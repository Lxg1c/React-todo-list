import { createSlice } from '@reduxjs/toolkit';
import {TaskInterface} from '../../utils/const.ts'

const taskSlice = createSlice({
    name: "counter",
    initialState: { taskArray: [] as TaskInterface[]}, // Исправлено начальное состояние

    reducers: {
        increment: (state, action) => {
            state.taskArray.push(action.payload);
        },
        decrement: (state, action) => {
            // Используем фильтрацию и присваиваем результат обратно
            state.taskArray = state.taskArray.filter((task) => task !== action.payload);
        }
    }
});

export const { increment, decrement } = taskSlice.actions;
export default taskSlice.reducer;
