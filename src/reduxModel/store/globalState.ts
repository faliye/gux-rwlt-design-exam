import { createSlice } from '@reduxjs/toolkit';
import { GlobalState } from './store';

export const globalStateSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        email: [],
        passward: '',
    },
    reducers: {
       setEmail: (state, action) => { 
        state.email = action.payload;
       }, 
       setPsd: (state, action) => { 
        state.passward = action.payload;
       }, 
       setLoading: (state,action) => {
        state.loading = action.payload;
       },   
    },
});
    
export const { setEmail, setPsd, setLoading } = globalStateSlice.actions;


export const selectUser = (state: GlobalState) => ({
    email: state.email,
}); 
    
export default globalStateSlice.reducer;