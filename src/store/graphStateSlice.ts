import { CaseReducer,SliceCaseReducers, createSlice } from '@reduxjs/toolkit';
import { GraphState, GraphParamsAction } from './store';

export const graphStateSlice = createSlice({
    name: "graph",
    initialState: {
        matter: '',
        classification: '',
        displayType: '',
        gender: '',
        data: [],
    },
    reducers: {
        setParamsState: (state: GraphState,action: GraphParamsAction ) => {
            state[action.payload.key] = action.payload.value
           },
       setDataState: (state,action) => {
        state.data = action.payload;
       },   
    },
});
    
export const { setParamsState,setDataState } = graphStateSlice.actions;
    
export default graphStateSlice.reducer;