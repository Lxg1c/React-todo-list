import React from 'react';
import { ConfigProvider, Input } from 'antd';
import { CustomSearchTheme } from "../utils/const.ts";

interface SearchProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ onChange }) => {
    // Создаем состояние для хранения значения в поле ввода
    return (
        <ConfigProvider theme={CustomSearchTheme}>
            <Input
                placeholder="Search note..."
                onChange={onChange}
            />
        </ConfigProvider>
    );
};

export default Search;
