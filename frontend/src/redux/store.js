import { configureStore } from '@reduxjs/toolkit'
import personReducer from "./features/auth/personSlice";
import imagesReducer from "./features/auth/imagesSlice";

export const store = configureStore({
    reducer: {
        person: personReducer,
        images: imagesReducer
    }
})
