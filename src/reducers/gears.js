import {createSlice} from '@reduxjs/toolkit';

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
    ]
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
        }
    },
});

export const {
    updateCount,
    updateFinal,
    updateGear,
} = gearsSlice.actions;

export const getGearsCount = state => state.gears.count;

export const getFinalGear = state => state.gears.final;

export const getGears = state => state.gears.gears;

export default gearsSlice.reducer;
