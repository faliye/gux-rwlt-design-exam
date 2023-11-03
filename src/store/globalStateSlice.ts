import { createSlice } from '@reduxjs/toolkit';
import { GlobalState } from './store';

export const globalStateSlice = createSlice({
    name: "global",
    initialState: {
        loading: false,
    },
    reducers: {
       setLoadingState: (state,action) => {
        state.loading = action.payload;
       },   
    },
});
    
export const { setLoadingState } = globalStateSlice.actions;
    
export default globalStateSlice.reducer;