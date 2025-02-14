import React, { ReactNode } from 'react'
import { Button } from "antd";
import MoonIcon from '../../public/moonIcon.svg'

interface ChangeThemeBtnProps {
    children: ReactNode;
    onClick: () => void;
}

const ChangeThemeBtn: React.FC<ChangeThemeBtnProps> = ({ onClick}) => {
    return (
        <Button size='large' onClick={onClick}>
            <img src={MoonIcon} alt='Change Theme' />
        </Button>
    )
}

export default ChangeThemeBtn;
