import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface DeleteBtnProps {
    onDelete: (id: number) => void;
    id: number; // Добавляем id для передачи в onDelete
}

const DeleteBtn: React.FC<DeleteBtnProps> = ({ onDelete, id }) => {
    return (
        <IconButton
            aria-label="delete"
            size="large"
            onClick={() => onDelete(id)}
        >
            <DeleteOutlineOutlinedIcon />
        </IconButton>
    );
};

export default DeleteBtn;
