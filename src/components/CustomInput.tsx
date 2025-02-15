import React from 'react';
import { ConfigProvider, Input } from 'antd';
import {CustomSearchDarkTheme, CustomSearchTheme} from "../utils/const.ts";
import {useSelector} from "react-redux";
import {selectCurrentTheme} from "../store/selectors.ts";

interface CustomInputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value?: string,
    placeholder?: string,
}

const CustomInput: React.FC<CustomInputProps> = ({ onChange, value, placeholder }) => {
    const theme = useSelector(selectCurrentTheme)
    // Создаем состояние для хранения значения в поле ввода
    return (
        <ConfigProvider theme={theme === 'light' ? CustomSearchTheme : CustomSearchDarkTheme}>
            <Input
                value={value}
                onChange={onChange}
                placeholder={placeholder ? placeholder : "Search note..."}
            />
        </ConfigProvider>
    );
};

export default CustomInput;

