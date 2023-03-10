import { configureStore } from '@reduxjs/toolkit'
import { designSlice } from './slices/designSlice'

export const store = configureStore({
    reducer: {
        design: designSlice.reducer

    },
})