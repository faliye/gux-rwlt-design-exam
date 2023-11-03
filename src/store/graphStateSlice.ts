import { createSlice } from '@reduxjs/toolkit';
import { GraphState, GraphParamsAction } from './store';
import { CLASSIFACTION_SETTING, DISPLAY_TYPE_SETTING, GERDER_SETTING, MATTER_SETTING } from '../constants';

export const graphStateSlice = createSlice({
    name: "graph",
    initialState: {
        matter: MATTER_SETTING.data[0].value,
        classification: CLASSIFACTION_SETTING.data[0].value,
        displayType: DISPLAY_TYPE_SETTING[0].data[0].value,
        gender: GERDER_SETTING.data[0].value,
        data: [],
    },
    reducers: {
        setParamsState: (state: GraphState,action: GraphParamsAction ) => {
            state[action.payload.key] = action.payload.value;
        },
       setDataState: (state,action) => {
        state.data = action.payload;
       },   
    },
});
    
export const { setParamsState,setDataState } = graphStateSlice.actions;
    
export default graphStateSlice.reducer;