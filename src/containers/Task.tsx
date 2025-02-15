import React, { useState } from 'react';
import DeleteBtn from "../components/DeleteBtn.tsx";
import EditBtn from "../components/Edit.tsx";
import { Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskStatus, updateTask } from "../store/slices/taskSlice.ts";
import TaskStatus from "../components/TaskStatus.tsx";
import "../styles/Task.scss";
import { selectCurrentTheme } from "../store/selectors.ts";
import Input from "../components/CustomInput.tsx";
import Btn from "../components/Btn.tsx";

interface TaskProps {
    id: number;
    taskContent: string;
    status: boolean;
    onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ id, taskContent, status, onDelete }) => {
    // State
    const [edit, setEdit] = useState<boolean>(false);
    const [inputContent, setInputContent] = useState<string>(taskContent);  // Инициализируем значением taskContent

    // Dispatcher to send action to reducer
    const dispatch = useDispatch();

    // Selectors
    const theme = useSelector(selectCurrentTheme);

    const onChange = () => {
        dispatch(toggleTaskStatus(id));
    };

    const toggleEdit = () => {
        if (edit) {
            // Обновляем задачу, если режим редактирования выключен
            dispatch(updateTask({ id, newTaskContent: inputContent }));
        }
        setEdit(!edit);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputContent(e.target.value);
    };

    return (
        <>
            {edit ? (
                <>
                    <div className="task__content flex flex-2">
                        <Space>
                            <Input
                                placeholder={taskContent}
                                value={inputContent}
                                onChange={handleInput}
                            />
                            <Btn size="middle" onClick={toggleEdit}>
                                APPLY
                            </Btn>
                        </Space>
                    </div>


                    <div className="taskControls">
                        <DeleteBtn id={id} onDelete={onDelete}/>
                    </div>
                </>
            ) : (
                <>
                    <div className="task__content flex">
                        <Space>
                            <TaskStatus onChange={onChange} status={status}/>
                            <h1
                                className="task__title"
                                style={{
                                    ...(status ? {
                                        textDecoration: 'line-through',
                                        color: '#252525',
                                        opacity: '50%',
                                    } : {}),
                                    color: theme === 'light' ? '#000000' : '#ffffff',
                                }}
                            >
                                {taskContent}
                            </h1>
                        </Space>
                    </div>

                    <div className="taskControls">
                        <Space>
                            <EditBtn id={id} onEdit={toggleEdit} />
                            <DeleteBtn id={id} onDelete={onDelete} />
                        </Space>
                    </div>
                </>
            )}
        </>
    );
};

export default Task;
