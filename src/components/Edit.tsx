import React from 'react'
import IconButton from '@mui/material/IconButton';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import {useSelector} from "react-redux";
import {selectCurrentTheme} from "../store/selectors.ts";

const Edit: React.FC = () => {
    const theme = useSelector(selectCurrentTheme);

    return (
        <IconButton aria-label="delete" size="large">
            <CreateOutlinedIcon  sx={{color: theme === 'light' ? '#000000' : '#ffffff'}}/>
        </IconButton>
    )
}

export default Edit