import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { countrySlice } from './feature/CountrySlice';
import countryFilterReducer from './feature/CountryFilterSlice'; // Import the countryFilter slice


export const store = configureStore({
    reducer: {
        countryFilter: countryFilterReducer, // Add filter slice reducer
        [countrySlice.reducerPath]: countrySlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat([countrySlice.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()