import React, { ReactNode } from 'react';
import {ConfigProvider, FloatButton} from 'antd';
import {CustomFloatBtn} from "../utils/const.ts";

interface FloatBtnProps {
    children: ReactNode;
    onClick: () => void;
}

const FloatBtn: React.FC<FloatBtnProps> = ({ children, onClick }) => {
    return (
        <>
            <ConfigProvider theme={CustomFloatBtn}>
                <FloatButton
                    onClick={onClick}
                    shape="circle"
                    style={{
                        insetInlineEnd: 94,
                    }}
                    icon={children}
                />
            </ConfigProvider>

        </>
    );
};

export default FloatBtn;