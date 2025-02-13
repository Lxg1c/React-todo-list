import React, {ReactNode} from 'react';
import { FloatButton } from 'antd';

interface FloatBtnProps {
    children: ReactNode;
    onClick: () => void;
}

const FloatBtn: React.FC<FloatBtnProps> = ({ children, onClick}) => {
    return (
        <>
            <FloatButton
                onClick={onClick}
                shape="circle"
                type="primary"
                style={{ insetInlineEnd: 94 }}
                icon={children}
            />
        </>
    )
}

export default FloatBtn;