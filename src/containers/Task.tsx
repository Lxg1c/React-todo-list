import React from 'react';
import DeleteBtn from "../components/DeleteBtn.tsx";
import Edit from "../components/Edit.tsx";
import { Space } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import { toggleTaskStatus } from "../store/slices/taskSlice.ts";
import TaskStatus from "../components/TaskStatus.tsx";
import "../styles/Task.scss";
import {selectCurrentTheme} from "../store/selectors.ts";

interface TaskProps {
    id: number;
    taskContent: string;
    status: boolean;
    onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ id, taskContent, status, onDelete }) => {
    const dispatch = useDispatch();
    const theme = useSelector(selectCurrentTheme);

    const onChange = () => {
        dispatch(toggleTaskStatus(id));
    };

    return (
        <>
            <div className="task__content flex">
                <Space>
                    <TaskStatus onChange={onChange} status={status} />
                    <h1 className="task__title"
                        style={{
                            ...(status ? { textDecoration: 'line-through', color: '#252525', opacity: '50%' } : {}),
                            color: theme === 'light' ? '#000000' : '#ffffff',
                        }}
                    >{taskContent}</h1>
                </Space>
            </div>

            <div className="taskControls">
                <Space>
                    <Edit />
                    <DeleteBtn id={id} onDelete={onDelete} />
                </Space>
            </div>
        </>
    );
};

export default Task;
