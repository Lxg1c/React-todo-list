import React from 'react';
import DeleteBtn from "../components/DeleteBtn.tsx";
import ReEdit from "../components/ReEdit.tsx";
import { Space } from 'antd';
import { useDispatch } from "react-redux";
import { toggleTaskStatus } from "../store/slices/taskSlice.ts";
import TaskStatus from "../components/TaskStatus.tsx";
import "../styles/Task.scss";

interface TaskProps {
    id: number;
    taskContent: string;
    status: boolean;
}

const Task: React.FC<TaskProps> = ({ id, taskContent, status }) => {
    const dispatch = useDispatch();

    // Обработчик для изменения состояния чекбокса
    const onChange = () => {
        dispatch(toggleTaskStatus(id)); // Обработчик событий, вызывающий экшен для изменения статуса задачи
    };

    return (
        <>
            <div className="task__content flex">
                <Space>
                    <TaskStatus onChange={onChange} status={status} />
                    <h1 className="task__title"
                        style={status ? { textDecoration: 'line-through', color: '#252525', opacity: '50%' } : {}}
                    >{taskContent}
                    </h1>
                </Space>
            </div>

            <div className="taskControls">
                <Space>
                    <ReEdit />
                    <DeleteBtn />
                </Space>
            </div>

        </>
    );
};

export default Task;
