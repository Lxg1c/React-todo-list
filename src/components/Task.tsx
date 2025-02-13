import React from 'react';
import trashIcon from "../../public/trash.svg";
import reeditIcon from "../../public/re-edit.svg";
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

interface TaskProps {
    taskContent: string;
    status: boolean;
}

const Task: React.FC<TaskProps> = ({ taskContent, status }) => {
    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const textStatus = status ? { textDecoration: "line-through" } : null;

    return (
        <div className="task flex justify-between">
            <div className='task__content flex'>
                <Checkbox checked={status} onChange={onChange} />
                <h1 style={textStatus}>{taskContent}</h1>
            </div>

            <div className='taskControls'>
                <button>
                    <img src={reeditIcon} alt="Re-edit Task"/>
                </button>

                <button>
                    <img src={trashIcon} alt='Delete Task'/>
                </button>
            </div>
        </div>
    );
}

export default Task;
