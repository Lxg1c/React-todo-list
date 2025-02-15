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

// Селектор для получения количества завершенных задач
export const selectCompletedTasksCount = createSelector(
    [selectTasks],
    (tasks) => tasks.filter((task) => task.status).length
);

// Селектор для получения количества активных задач
export const selectActiveTasksCount = createSelector(
    [selectTasks],
    (tasks) => tasks.filter((task) => !task.status).length
);

// Селектор для получения поля ввода для новой задачи
export const selectNewTaskInput = createSelector(
    [selectTaskState], // Зависимость от состояния задач
    (taskState) => taskState.newTaskInput // Возвращаем поле newTaskInput
);