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
    name: 'task',
    initialState,

    reducers: {
        // action Для обновления всего массива задач (если это ваша цель)
        setNewTaskInput: (state, action: PayloadAction<string>) => {
            state.newTaskInput = action.payload;
        },

        // action, Для обновления статус конкретной задачи
        toggleTaskStatus: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find((task) => task.id === action.payload);

            if (task) {
                task.status = !task.status;
            }
        },

        // action, Добавление новой задачи в массив
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },

        // action, Удаления задачи
        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        }
    }
});

export const { addTask, setNewTaskInput, toggleTaskStatus, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
