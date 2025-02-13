import React from 'react';
import trashIcon from "../../public/trash.svg";
import reeditIcon from "../../public/re-edit.svg";
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import "../styles/Task.scss"

interface TaskProps {
    taskContent: string;
    status: boolean;
}

const Task: React.FC<TaskProps> = ({ taskContent, status }) => {
    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <>
            <div className='task__content flex'>
                <Checkbox checked={status} onChange={onChange} />
                <h1 className='task__title'>{taskContent}</h1>
            </div>

            <div className='taskControls'>
                <button className='btn-reset'>
                    <img src={reeditIcon} alt="Re-edit Task"/>
                </button>

                <button className='btn-reset'>
                    <img src={trashIcon} alt='Delete Task'/>
                </button>
            </div>
        </>
    );
}

export default Task;
