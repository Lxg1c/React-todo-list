import React, { ReactNode } from 'react'
import { Button, ConfigProvider } from "antd";
import { CustomBtn } from "../utils/const.ts";

interface BtnProps {
    children: ReactNode;
    onClick: () => void;
}

const Btn: React.FC<BtnProps> = ({ children, onClick}) => {
    return (
        <ConfigProvider theme={CustomBtn}>
            <Button size='large' onClick={onClick}>
                {children}
            </Button>
        </ConfigProvider>
    )
}

export default Btn;
