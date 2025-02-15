import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface ThemeState {
    theme: 'light' | 'dark';
}

// Функция для получения темы из cookies
const getInitialTheme = (): 'light' | 'dark' => {
    const savedTheme = Cookies.get('theme') as 'light' | 'dark' | undefined;
    return savedTheme || 'light'; // Если тема не найдена, возвращаем 'light'
};

const initialState: ThemeState = {
    theme: getInitialTheme(), // Инициализация темы из cookies
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            Cookies.set('theme', state.theme); // Сохраняем тему в cookies
        },

        setTheme: (state, action: PayloadAction<"light" | "dark">) => {
            state.theme = action.payload;
            Cookies.set('theme', action.payload); // Сохраняем тему в cookies
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;