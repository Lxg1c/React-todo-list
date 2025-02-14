import React from 'react';
import { ConfigProvider, Input } from 'antd';
import { CustomSearchTheme } from "../utils/const.ts";


const CustomInput: React.FC = () => {
    // Создаем состояние для хранения значения в поле ввода
    return (
        <ConfigProvider theme={CustomSearchTheme}>
            <Input
                placeholder="Search note..."
            />
        </ConfigProvider>
    );
};

export default CustomInput;
