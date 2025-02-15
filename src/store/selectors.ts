import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

// Базовые селекторы
const selectTaskState = (state: RootState) => state.task;
const selectThemeState = (state: RootState) => state.theme;

// Селектор для получения списка задач
export const selectTasks = createSelector(
    [selectTaskState], // Зависимости
    (taskState) => taskState.tasks // Функция преобразования
);

// Селектор для получения текущей темы
export const selectCurrentTheme = createSelector(
    [selectThemeState],
    (themeState) => themeState.theme
);

// Селектор для получения поля ввода для новой задачи
export const selectNewTaskInput = createSelector(
    [selectTaskState], // Зависимость от состояния задач
    (taskState) => taskState.newTaskInput // Возвращаем поле newTaskInput
);

// Селектор для получения отфильтрованных задач
export const selectFilteredTasks = createSelector(
    [selectTasks, (state: RootState) => state.task.filterStatus], // Зависимости: задачи и статус фильтра
    (tasks, filterStatus) => {
        switch (filterStatus) {
            case 'completed':
                return tasks.filter((task) => task.status);
            case 'incomplete':
                return tasks.filter((task) => !task.status);
            default:
                return tasks;
        }
    }
);