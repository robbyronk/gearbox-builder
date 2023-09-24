import {createSlice} from '@reduxjs/toolkit';
import {noop, take} from "lodash";

const initialState = {
    count: 7,
    final: 3.2,
    gears: [
        4.1,
        3.5,
        3.1,
        2.5,
        1.9,
        1.2,
        1.0,
        0.95,
        0.9,
        0.85,
    ],
    shiftPoints: []
};

export const gearsSlice = createSlice({
    name: 'gears',
    initialState,
    reducers: {
        updateCount: (state, {payload}) => {
            const count = parseInt(payload);
            if (1 <= count && count <= 10) {
                state.count = count;
            } else {
                state.count = 10;
            }
        },
        updateFinal: (state, {payload}) => {
            state.final = payload;
        },
        updateGear: (state, {payload}) => {
            const index = payload.gear - 1;
            state.gears[index] = payload.value;
        },
        setShiftPoints: (state, {payload}) => {
            state.shiftPoints = payload;
        },
        calculateGears: noop
    },
});

export const {
    updateCount,
    updateFinal,
    updateGear,
    setShiftPoints,
    calculateGears,
} = gearsSlice.actions;

export const getGearsCount = state => state.gears.count;

export const getFinalGear = state => state.gears.final;

export const getGears = state => state.gears.gears;

export const getActiveGears = state => {
    const count = getGearsCount(state);
    return take(getGears(state), count)
};

export const getShiftPoints = state => state.gears.shiftPoints;

export default gearsSlice.reducer;
