import { configureStore } from '@reduxjs/toolkit'
import catsReducer from './features/catSlice'
import authReducer from './features/authSlice'
import nameReducer from './features/nameSlice'

export const store = configureStore({
    reducer: {
        cats: catsReducer,
        auth: authReducer,
        names: nameReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;