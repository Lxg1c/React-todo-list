import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const DeleteBtn: React.FC = () => {
    return (
        <IconButton aria-label="delete" size="large">
            <DeleteOutlineOutlinedIcon />
        </IconButton>
    )
}

export default DeleteBtn