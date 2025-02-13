import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: number,
    taskContent: string,
    status: boolean
}

interface TaskState {
    tasks: Task[]
    newTaskInput: string
}

const initialState: TaskState = {
    tasks: [],
    newTaskInput: '',
}

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
