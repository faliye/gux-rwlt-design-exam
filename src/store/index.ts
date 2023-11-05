import { configureStore } from '@reduxjs/toolkit';
import globalState from './globalStateSlice';
import userInfoState from './userInfoSlice';
import graphStateSlice from './pages/graph/graphStateSlice';

export const store = configureStore({
    reducer: {
        globalState,
        userInfoState,
        graphStateSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>