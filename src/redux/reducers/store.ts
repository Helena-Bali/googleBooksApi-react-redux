import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer';
import thunkMiddleware from "redux-thunk"
import {CurriedGetDefaultMiddleware} from "@reduxjs/toolkit/dist/getDefaultMiddleware";


const store: any = configureStore({
    reducer: {
        //@ts-ignore
        reducer: reducer,
    },
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunkMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
