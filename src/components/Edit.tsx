import React from 'react'
import IconButton from '@mui/material/IconButton';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import {useSelector} from "react-redux";
import {selectCurrentTheme} from "../store/selectors.ts";

interface EditBtnProps {
    onEdit: (id: number) => void;
    id: number; // Добавляем id для передачи в onDelete
}

const EditBtn: React.FC<EditBtnProps> = ({ onEdit, id }) => {
    const theme = useSelector(selectCurrentTheme);

    return (
        <IconButton
            aria-label="delete"
            size="large"
            onClick={() => onEdit(id)}
        >
            <CreateOutlinedIcon  sx={{color: theme === 'light' ? '#000000' : '#ffffff'}}/>
        </IconButton>
    )
}

export default EditBtn