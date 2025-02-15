import React, { ReactNode } from 'react'
import { Button, ConfigProvider } from "antd";
import { CustomBtn } from "../utils/const.ts";
import {SizeType} from "antd/es/config-provider/SizeContext";

interface BtnProps {
    children: ReactNode;
    onClick: () => void;
    size?: SizeType
}

const Btn: React.FC<BtnProps> = ({ children, onClick, size}) => {
    return (
        <ConfigProvider theme={CustomBtn}>
            <Button size={size ? size : 'large'} onClick={onClick}>
                {children}
            </Button>
        </ConfigProvider>
    )
}

export default Btn;
