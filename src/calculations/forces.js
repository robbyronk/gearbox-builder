import {orderBy, range} from 'lodash'
import {interpolateValue} from "./interpolate";


/**
 * Returns speed in km/h
 * @param {number} totalGearRatio
 * @param {number} engineRpm
 * @param {number} wheelDiameter
 */
export function getSpeed(totalGearRatio, engineRpm, wheelDiameter) {
    const wheelRpm = engineRpm / totalGearRatio;
    return wheelRpm * 60 * Math.PI * wheelDiameter / 1000;
}

/**
 * @param {number} totalGearRatio
 * @param {number} engineTorque
 * @param {number} totalDriveWheels
 * @param {number} wheelDiameter
 */
export function getWheelForce(totalGearRatio, engineTorque, totalDriveWheels, wheelDiameter) {
    const wheelTorque = totalGearRatio * engineTorque / totalDriveWheels;
    return wheelTorque * 2 / wheelDiameter;
}

export function getWheelForces(totalGearRatio, engineTorques, totalDriveWheels, wheelDiameter) {
    return engineTorques.map(({rpm, torque}) => ({
        engineRpm: rpm,
        speed: getSpeed(totalGearRatio, rpm, wheelDiameter),
        wheelForce: getWheelForce(totalGearRatio, torque, totalDriveWheels, wheelDiameter)
    }))
}

export function getInterpolatedWheelForces(totalGearRatio, engineTorques, totalDriveWheels, wheelDiameter) {
    const actualForces = getWheelForces(totalGearRatio, engineTorques, totalDriveWheels, wheelDiameter);
    const speeds = actualForces.map(({speed}) => speed);
    const minSpeed = Math.ceil(Math.min(...speeds))
    const maxSpeed = Math.floor(Math.max(...speeds))
    return range(minSpeed, maxSpeed).map((currentSpeed) => {
        const upperForceIndex = actualForces.findIndex(({speed}) => speed >= currentSpeed);
        const lower = actualForces[upperForceIndex - 1];
        const upper = actualForces[upperForceIndex];
        return {
            engineRpm: interpolateValue(lower.speed, currentSpeed, upper.speed, lower.engineRpm, upper.engineRpm),
            speed: currentSpeed,
            wheelForce: interpolateValue(lower.speed, currentSpeed, upper.speed, lower.wheelForce, upper.wheelForce)
        }
    })
}

export function getAllGearsWheelForces(final, gears, engineTorques, totalDriveWheels, wheelDiameter) {
    return gears.flatMap((gearRatio, index) => {
        const wheelForces = getInterpolatedWheelForces(final * gearRatio, engineTorques, totalDriveWheels, wheelDiameter);
        return wheelForces.map((forces) => ({
            ...forces,
            gear: index + 1
        }))
    })
}

/**
 * @param allForces {Array}
 * @return {Array} forces sorted by speed ascending, then by force ascending
 */
export function sortForces(allForces) {
    return orderBy(allForces, ['speed', 'wheelForce'], ['asc', 'asc'])
    // untested, my node doesn't have toSorted
    // return allForces.toSorted((a, b) => {
    //     if (a.speed === b.speed) {
    //         return a.wheelForce - b.wheelForce;
    //     }
    //     return a.speed - b.speed;
    // })
}

export function getOptimalGearAtSpeeds(allForces) {
    return sortForces(allForces).reduceRight((optimalForces, force) => {
        if (optimalForces.length === 0) {
            return [force];
        }
        if (optimalForces[0].speed > force.speed) {
            return [force, ...optimalForces];
        }
        return optimalForces;
    }, [])
}

export function getShiftPoints(optimalForces) {
    return optimalForces.reduce((shiftPoints, force) => {
        if (shiftPoints.length === 0) {
            return [force];
        }
        if (shiftPoints[0].gear !== force.gear) {
            return [force, ...shiftPoints];
        }
        return shiftPoints;
    }, []).slice().reverse().slice(1)
}

export function getMaxPower(optimalForces) {
    const powers = optimalForces.map(({speed, wheelForce}) => speed * wheelForce)
    return Math.max(...powers)
}

export function calculateLosses(optimalForces) {
    const maxPower = getMaxPower(optimalForces);
    return optimalForces.map(optimalForce => ({
        ...optimalForce,
        loss: optimalForce.wheelForce - maxPower / optimalForce.speed
    }));
}

