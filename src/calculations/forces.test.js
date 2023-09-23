import {
    calculateLosses,
    getAllGearsWheelForces,
    getInterpolatedWheelForces,
    getOptimalGearAtSpeeds,
    getShiftPoints,
    getSpeed,
    getWheelForce,
    getWheelForces,
    sortForces
} from './forces'
import {shuffle} from "lodash";

it('should get speed from engine RPM', () => {
    const actual = getSpeed(4, 4000, 0.5);
    expect(actual).toBeCloseTo(94.2, 1)
});

it('should get wheel force', () => {
    const actual = getWheelForce(4, 100, 4, 0.5)
    expect(actual).toEqual(400)
});

it('should get wheel forces', () => {
    const torques = [
        {rpm: 1000, torque: 50},
        {rpm: 2000, torque: 60},
        {rpm: 3000, torque: 70},
        {rpm: 4000, torque: 90},
        {rpm: 5000, torque: 110},
        {rpm: 6000, torque: 100},
        {rpm: 7000, torque: 80},
    ]

    const actual = getWheelForces(4, torques, 4, 0.5);
    expect(actual.length).toEqual(torques.length)
});

it('should interpolate forces for all speeds', () => {
    const torques = [
        {rpm: 1000, torque: 50},
        {rpm: 2000, torque: 60},
        {rpm: 3000, torque: 70},
        {rpm: 4000, torque: 90},
        {rpm: 5000, torque: 110},
        {rpm: 6000, torque: 100},
        {rpm: 7000, torque: 80},
    ]

    const actual = getInterpolatedWheelForces(4, torques, 4, 0.5);

    const wheelRatios = actual.map(({engineRpm, speed}) => engineRpm / speed);
    for (const wheelRatio of wheelRatios) {
        expect(wheelRatio).toBeCloseTo(wheelRatios[0], 1)
    }

    expect(actual.length).toEqual(140)
});

it('should get all wheel forces', () => {
    const gears = [
        4.14,
        3.11,
        2.39,
        1.82,
        1.33,
        0.91
    ]

    const torques = [
        {rpm: 1000, torque: 50},
        {rpm: 2000, torque: 60},
        {rpm: 3000, torque: 70},
        {rpm: 4000, torque: 90},
        {rpm: 5000, torque: 110},
        {rpm: 6000, torque: 100},
        {rpm: 7000, torque: 80},
    ]

    const actual = getAllGearsWheelForces(3.85, gears, torques, 4, 0.5)
    expect(actual.length).toEqual(492)
});

it('should sort forces by speed and force', () => {
    const forces = [
        {speed: 20, wheelForce: 15, gear: 1},
        {speed: 20, wheelForce: 10, gear: 2},
        {speed: 30, wheelForce: 10, gear: 1},
        {speed: 30, wheelForce: 15, gear: 2},
        {speed: 10, wheelForce: 20, gear: 1},
        {speed: 10, wheelForce: 15, gear: 2},
    ]

    const actual = sortForces(shuffle(forces));
    expect(actual[0]).toEqual({speed: 10, wheelForce: 15, gear: 2})
});

it('should get optimal gears at speeds', () => {
    const forces = [
        {speed: 20, wheelForce: 15, gear: 1},
        {speed: 20, wheelForce: 10, gear: 2},
        {speed: 30, wheelForce: 10, gear: 1},
        {speed: 30, wheelForce: 15, gear: 2},
        {speed: 10, wheelForce: 20, gear: 1},
        {speed: 10, wheelForce: 15, gear: 2},
    ]

    const actual = getOptimalGearAtSpeeds(forces);
    expect(actual[0]).toEqual({speed: 10, wheelForce: 20, gear: 1})
    expect(actual[2]).toEqual({speed: 30, wheelForce: 15, gear: 2})
});

it('should get forces for a realistic example', () => {
    const gears = [
        4.14,
        3.11,
        2.39,
        1.82,
        1.33,
        0.91
    ]

    const torques = [
        {rpm: 1000, torque: 50},
        {rpm: 2000, torque: 60},
        {rpm: 3000, torque: 70},
        {rpm: 4000, torque: 90},
        {rpm: 5000, torque: 110},
        {rpm: 6000, torque: 100},
        {rpm: 7000, torque: 80},
    ]

    const forces = getAllGearsWheelForces(3.85, gears, torques, 4, 0.5);
    const actual = getOptimalGearAtSpeeds(forces)
    const actualGears = [...new Set(actual.map(({gear}) => gear))];
    expect(actualGears.length).toEqual(6)
});

it('should get shift points', () => {
    const gears = [
        4.14,
        3.11,
        2.39,
        1.82,
        1.33,
        0.91
    ]

    const torques = [
        {rpm: 1000, torque: 50},
        {rpm: 2000, torque: 60},
        {rpm: 3000, torque: 70},
        {rpm: 4000, torque: 90},
        {rpm: 5000, torque: 110},
        {rpm: 6000, torque: 100},
        {rpm: 7000, torque: 80},
    ]

    const forces = getAllGearsWheelForces(3.85, gears, torques, 4, 0.5);
    const actual = getShiftPoints(getOptimalGearAtSpeeds(forces));
    expect(actual.length).toEqual(6)
});

it('should calculate losses', () => {
    const gears = [
        4.14,
        3.11,
        2.39,
        1.82,
        1.33,
        0.91
    ]

    const torques = [
        {rpm: 1000, torque: 50},
        {rpm: 2000, torque: 60},
        {rpm: 3000, torque: 70},
        {rpm: 4000, torque: 90},
        {rpm: 5000, torque: 110},
        {rpm: 6000, torque: 100},
        {rpm: 7000, torque: 80},
    ]

    const forces = getAllGearsWheelForces(3.85, gears, torques, 4, 0.5);
    const actual = calculateLosses(getOptimalGearAtSpeeds(forces));
    const actualGears = [...new Set(actual.map(({gear}) => gear))];
    expect(actualGears.length).toEqual(6)
});