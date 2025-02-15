import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

// Базовые селекторы
const selectTaskState = (state: RootState) => state.task;
const selectThemeState = (state: RootState) => state.theme;

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

// Селектор для поиска задач с учетом фильтрации по статусу и запросу
export const selectFilteredTasks = createSelector(
    (state: RootState) => state.task.tasks,
    (state: RootState) => state.task.filterStatus,
    (state: RootState) => state.task.searchQuery,  // Добавляем поисковый запрос
    (tasks, filterStatus, searchQuery) => {
        let filteredTasks = tasks;

        // Фильтрация по статусу
        if (filterStatus === 'completed') {
            filteredTasks = filteredTasks.filter(task => task.status);
        } else if (filterStatus === 'incomplete') {
            filteredTasks = filteredTasks.filter(task => !task.status);
        }

        // Фильтрация по поисковому запросу
        if (searchQuery) {
            filteredTasks = filteredTasks.filter(task => task.taskContent.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        return filteredTasks;
    }
)