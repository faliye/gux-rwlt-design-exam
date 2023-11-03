import { createSlice } from '@reduxjs/toolkit';
import { GlobalState } from './store.d'

export const globalStateSlice = createSlice({
    name: "global",
    initialState: {
        loading: false,
    },
    reducers: {
        setLoadingState: (state: GlobalState, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setLoadingState } = globalStateSlice.actions;

export default globalStateSlice.reducer;