import {configureStore} from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice.ts";
import themeSlice from "./slices/themeSlice.ts";

export const store = configureStore({
    reducer: {
        task: taskSlice,
        theme: themeSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;