import React from 'react';
import { ConfigProvider, Input } from 'antd';
import {CustomSearchTheme} from "../utils/const.ts";

const Search: React.FC = () => {
    return (
        <ConfigProvider
            theme={CustomSearchTheme}>

            <Input placeholder="Search note..." />
        </ConfigProvider>
    )
};

export default Search;