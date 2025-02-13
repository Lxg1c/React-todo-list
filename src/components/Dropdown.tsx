// DropDownCustom.tsx
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space, ConfigProvider } from 'antd';
import { useDispatch } from 'react-redux';
import { setFilterStatus } from '../store/slices/taskSlice.ts';
import { CustomBtn } from '../utils/const.ts';

const items: MenuProps['items'] = [
    { label: 'All', key: 'all' },
    { label: 'Completed', key: 'completed' },
    { label: 'Incomplete', key: 'incomplete' },
];

const DropDownCustom: React.FC = () => {
    const [currentValue, setCurrentValue] = useState<string>('All');
    const dispatch = useDispatch();

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        const status = e.key as 'all' | 'completed' | 'incomplete'; // Получаем фильтр
        setCurrentValue(status.charAt(0).toUpperCase() + status.slice(1)); // Поменять первую букву на заглавную
        dispatch(setFilterStatus(status)); // Устанавливаем новый фильтр в глобальное состояние
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <ConfigProvider theme={CustomBtn}>
            <Dropdown menu={menuProps}>
                <Button size={'large'}>
                    <Space>
                        {currentValue}
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </ConfigProvider>
    );
};

export default DropDownCustom;
