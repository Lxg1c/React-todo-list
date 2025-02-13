import React from 'react';
import { Checkbox } from '@mui/material';
import { ChangeEvent } from 'react';

interface TaskStatusProps {
    status: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void; // Тип для onChange для MUI
}

const TaskStatus: React.FC<TaskStatusProps> = ({ status, onChange }) => {
    return (
        <Checkbox
            checked={status}
            onChange={(e) => onChange(e, e.target.checked)} // Маппируем на правильный тип
            sx={{
                '& .MuiSvgIcon-root': { fontSize: 32 },
                color: "#6C63FF",
                '&.Mui-checked': {
                    color: "#6C63FF",
                },
            }}
        />
    );
};

export default TaskStatus;
