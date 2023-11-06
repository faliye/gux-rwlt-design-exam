import { createSlice } from '@reduxjs/toolkit';

export const userInfoStateSlice = createSlice({
    name: "userInfo",
    initialState: {
        email: '',
        passward: '',
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPsd: (state, action) => {
            state.passward = action.payload;
        },
    },
});

export const { setEmail, setPsd } = userInfoStateSlice.actions;

export default userInfoStateSlice.reducer;