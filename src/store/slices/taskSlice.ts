import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface Task {
    id: number;
    taskContent: string;
    status: boolean;
}

interface TaskState {
    tasks: Task[];
    newTaskInput: string;
    filterStatus: 'all' | 'completed' | 'incomplete';
}

// Функция для получения начального состояния задач из cookies
const getInitialTasks = (): Task[] => {
    const savedTasks = Cookies.get('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
};

const initialState: TaskState = {
    tasks: getInitialTasks(), // Восстановление задач из cookies
    newTaskInput: '',
    filterStatus: 'all',
};

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
                Cookies.set('tasks', JSON.stringify(state.tasks)); // Сохраняем задачи в cookies
            }
        },

        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
            Cookies.set('tasks', JSON.stringify(state.tasks)); // Сохраняем задачи в cookies
        },

        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            Cookies.set('tasks', JSON.stringify(state.tasks)); // Сохраняем задачи в cookies
        },

        setFilterStatus: (state, action: PayloadAction<'all' | 'completed' | 'incomplete'>) => {
            state.filterStatus = action.payload;
        },

        // Установка задач из Cookie
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload;
        },
    },
});

export const { addTask, setNewTaskInput, toggleTaskStatus, removeTask, setFilterStatus, setTasks } = taskSlice.actions;
export default taskSlice.reducer;