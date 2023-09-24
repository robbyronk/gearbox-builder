import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    curve: [
        {rpm: 1000, torque: 50},
        {rpm: 2000, torque: 60},
        {rpm: 3000, torque: 70},
        {rpm: 4000, torque: 90},
        {rpm: 5000, torque: 110},
        {rpm: 6000, torque: 100},
        {rpm: 7000, torque: 80},
    ],
};

export const torquesSlice = createSlice({
    name: 'torques',
    initialState,
    reducers: {},
});

// export const {} = torquesSlice.actions;

export const getTorqueCurve = state => state.torques.curve;


export default torquesSlice.reducer;
