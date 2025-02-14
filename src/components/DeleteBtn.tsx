import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useSelector} from "react-redux";
import {selectCurrentTheme} from "../store/selectors.ts";

interface DeleteBtnProps {
    onDelete: (id: number) => void;
    id: number; // Добавляем id для передачи в onDelete
}

const DeleteBtn: React.FC<DeleteBtnProps> = ({ onDelete, id }) => {
    const theme = useSelector(selectCurrentTheme)
    return (
        <IconButton
            aria-label="delete"
            size="large"
            onClick={() => onDelete(id)}
        >
            <DeleteOutlineOutlinedIcon sx={{color: theme === 'light' ? '#000000' : '#ffffff'}} />
        </IconButton>
    );
};

export default DeleteBtn;
