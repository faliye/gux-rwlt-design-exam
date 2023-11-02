import { configureStore } from '@reduxjs/toolkit';
import globalState from './globalState';


export const store = configureStore({
    reducer:{
        globalState
    },
})