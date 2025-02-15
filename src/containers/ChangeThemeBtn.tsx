import React from 'react';
import { Button } from 'antd';
import MoonIcon from '../assets/moonIcon.svg'; // Убедитесь, что путь правильный
import SunIcon from '../assets/sunIcon.svg'; // Убедитесь, что путь правильный
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentTheme } from '../store/selectors';
import { toggleTheme } from '../store/slices/themeSlice'; // Импортируйте действие

const ChangeThemeBtn: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectCurrentTheme); // Текущая тема

    // Обработчик для переключения темы
    const handleChangeTheme = () => {
        dispatch(toggleTheme()); // Используем действие toggleTheme
    };

    return (
        <Button size="large" onClick={handleChangeTheme}>
            <img
                src={theme === 'light' ? MoonIcon : SunIcon}
                alt="Change Theme"
                style={{ width: '24px', height: '24px' }} // Добавьте стили, если нужно
            />
        </Button>
    );
};

export default ChangeThemeBtn;