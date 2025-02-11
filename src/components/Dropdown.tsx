import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space, ConfigProvider } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'All',
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

const App: React.FC = () => {
    const [currentValue, setCurrentValue] = useState<string>('All');

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
                theme={{
                    token: {
                        colorPrimary: '#6C63FF', // Основной цвет
                        borderRadius: 8, // Радиус скругления
                        colorBgContainer: '#f0f0f0', // Цвет фона
                    },
                }}
            >
                <Dropdown menu={menuProps}>
                    <Button style={{ background: '#6C63FF', color: '#ffffff' }}>
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

export default App;