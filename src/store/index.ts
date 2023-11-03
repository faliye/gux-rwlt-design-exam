import { configureStore } from '@reduxjs/toolkit';
import globalState from './globalStateSlice';
import userInfoState from './userInfoSlice';


export const store = configureStore({
    reducer:{
        globalState,
        userInfoState,
    },
})