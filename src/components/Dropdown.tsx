import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space, ConfigProvider } from 'antd';
import {CustomBtn} from "../utils/const.ts";

const items: MenuProps['items'] = [
    {
        label: 'ALL',
        key: '1',
    },
    {
        label: 'Completed',
        key: '2',
    },
    {
        label: 'Incomplete',
        key: '3',
    },
];

const DropDownCustom: React.FC = () => {
    const [currentValue, setCurrentValue] = useState<string>('ALL');

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setCurrentValue(e.key === '1' ? 'All' : e.key === '2' ? 'Completed' : 'Incomplete');
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <>
            <ConfigProvider
                theme={CustomBtn}
            >
                <Dropdown menu={menuProps}>
                    <Button size={'large'}>
                        <Space>
                            {currentValue}
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            </ConfigProvider>
        </>

    );
};

export default DropDownCustom;