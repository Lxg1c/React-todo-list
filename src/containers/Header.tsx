import "../styles/Header.scss"
import React from 'react';
import {useSelector} from "react-redux";
import {selectCurrentTheme} from "../store/selectors.ts";

const Header: React.FC = () => {
    const theme = useSelector(selectCurrentTheme)

    return (
        <header className='header'>
            <h1 id='header__title' style={{
                color: theme === 'light' ? '#000000' : '#ffffff'
            }}>TODO LIST</h1>
        </header>
    )
}

export default Header;