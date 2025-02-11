import React from 'react';
import { ConfigProvider, Input } from 'antd';
import {SearchTheme} from "../utils/cont.ts";

export const Search: React.FC = () => {
    return (
        <ConfigProvider
            theme={SearchTheme}>

            <Input placeholder="Search note..." />
        </ConfigProvider>
    )
};
