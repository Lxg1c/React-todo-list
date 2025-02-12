import {configureStore} from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice.ts";

const store = configureStore({
    reducer: {
        taskSlice,
    }
})

export default store