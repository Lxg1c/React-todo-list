import React, {ReactNode} from 'react'
import {Button, ConfigProvider} from "antd";
import {CustomBtn} from "../utils/const.ts";

interface BtnProps {
    children: ReactNode;
}

const Btn: React.FC<BtnProps> = ({ children }) => {
    return (
        <ConfigProvider theme={CustomBtn}>
            <Button size='large'>
                {children}
            </Button>
        </ConfigProvider>
    )
}

export default Btn;