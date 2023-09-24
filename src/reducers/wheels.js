import {createSlice} from '@reduxjs/toolkit';
import {getTireHeight} from "../calculations/tires";

const initialState = {
    driveWheels: 4,
    tireWidth: 265,
    aspectRatio: 55,
    rimSize: 17,
};

export const tiresSlice = createSlice({
    name: 'wheels',
    initialState,
    reducers: {
        updateDriveWheels: (state, {payload}) => {
            const driveWheels = parseInt(payload);
            if (1 <= driveWheels && driveWheels <= 6) {
                state.driveWheels = driveWheels;
            } else {
                state.driveWheels = initialState.driveWheels;
            }
        },
        updateTireWidth: (state, {payload}) => {
            const tireWidth = parseInt(payload);
            if (1 <= tireWidth && tireWidth <= 1000) {
                state.tireWidth = tireWidth;
            } else {
                state.tireWidth = initialState.tireWidth;
            }
        },
        updateAspectRatio: (state, {payload}) => {
            const aspectRatio = parseInt(payload);
            if (1 <= aspectRatio && aspectRatio <= 6) {
                state.aspectRatio = aspectRatio;
            } else {
                state.aspectRatio = initialState.aspectRatio;
            }
        },
        updateRimSize: (state, {payload}) => {
            const rimSize = parseInt(payload);
            if (1 <= rimSize && rimSize <= 99) {
                state.rimSize = rimSize;
            } else {
                state.rimSize = initialState.rimSize;
            }
        },
    },
});

export const {
    updateDriveWheels,
    updateTireWidth,
    updateAspectRatio,
    updateRimSize,
} = tiresSlice.actions;

export const getDriveWheels = state => state.wheels.driveWheels;
export const getTireWidth = state => state.wheels.tireWidth;
export const getAspectRatio = state => state.wheels.aspectRatio;
export const getRimSize = state => state.wheels.rimSize;

export const getWheelDiameter = state => {
    const width = parseInt(getTireWidth(state));
    const aspectRatio = parseInt(getAspectRatio(state));
    const rimDiameter = parseInt(getRimSize(state));
    return getTireHeight({width, aspectRatio, rimDiameter});
};


export default tiresSlice.reducer;
