import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer';
import thunkMiddleware from "redux-thunk"
import {CurriedGetDefaultMiddleware} from "@reduxjs/toolkit/dist/getDefaultMiddleware";



const store = configureStore({
    reducer:<any> {
        reducer
    },
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunkMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

