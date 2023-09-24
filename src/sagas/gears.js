import {put, select} from 'redux-saga/effects';
import {getActiveGears, getFinalGear, setShiftPoints} from "../reducers/gears";
import {getTorqueCurve} from "../reducers/torques";
import {getAllGearsWheelForces, getOptimalGearAtSpeeds, getShiftPoints} from "../calculations/forces";
import {getDriveWheels, getWheelDiameter} from "../reducers/wheels";

export function* doCalculateGears() {
    const final = yield select(getFinalGear);
    const gears = yield select(getActiveGears);
    const driveWheels = yield select(getDriveWheels);
    const wheelDiameter = yield select(getWheelDiameter)
    const torques = yield select(getTorqueCurve);

    const forces = getAllGearsWheelForces(final, gears, torques, driveWheels, wheelDiameter);
    const shiftPoints = getShiftPoints(getOptimalGearAtSpeeds(forces))

    yield put(setShiftPoints(shiftPoints));
}