import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: number;
    taskContent: string;
    status: boolean;
}

interface TaskState {
    tasks: Task[];
    newTaskInput: string;
    filterStatus: 'all' | 'completed' | 'incomplete'; // Новое состояние для фильтра
}

const initialState: TaskState = {
    tasks: [],
    newTaskInput: '',
    filterStatus: 'all', // Начальный фильтр, показывающий все задачи
}

const taskSlice = createSlice({
    name: 'task',
    initialState,

    reducers: {
        setNewTaskInput: (state, action: PayloadAction<string>) => {
            state.newTaskInput = action.payload;
        },

        toggleTaskStatus: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find((task) => task.id === action.payload);

            if (task) {
                task.status = !task.status;
            }
        },

        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },

        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },

        // Экшен для фильтрации задач по статусу
        setFilterStatus: (state, action: PayloadAction<'all' | 'completed' | 'incomplete'>) => {
            state.filterStatus = action.payload;
        },
    }
});

export const { addTask, setNewTaskInput, toggleTaskStatus, removeTask, setFilterStatus } = taskSlice.actions;
export default taskSlice.reducer;
