import { configureStore } from '@reduxjs/toolkit'
import personReducer from "./features/auth/personSlice";

export const store = configureStore({
    reducer: {
        person: personReducer
    }
})
