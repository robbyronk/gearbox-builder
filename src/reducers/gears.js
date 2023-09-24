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
        }
    },
});

export const {
    updateCount
} = gearsSlice.actions;

export const getGearsCount = state => state.gears.count;

export default gearsSlice.reducer;
