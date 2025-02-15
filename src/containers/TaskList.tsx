import React from 'react';
import Task from './Task.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../store/slices/taskSlice.ts';
import '../styles/TaskList.scss';
import { selectCurrentTheme, selectFilteredTasks } from "../store/selectors.ts"; // Используем новый селектор
import EmptyLight from '../assets/empty-light.svg'
import EmptyDark from '../assets/empty-dark.svg'

const TaskList: React.FC = () => {
    const dispatch = useDispatch();

    // Используем селекторы
    const filteredTasks = useSelector(selectFilteredTasks); // Отфильтрованные задачи
    const theme = useSelector(selectCurrentTheme); // Текущая тема

    const onDelete = (id: number) => {
        dispatch(removeTask(id)); // Удаляем задачу по ID
    };

    return (
        <>
            {filteredTasks.length === 0 ? (
                <img src={theme === 'light' ? EmptyLight : EmptyDark} alt="There are no tasks" />
            ) : (
                <div>
                    <ul className="task__list">
                        {filteredTasks.map((task) => (
                            <li key={task.id} className="task__list-item">
                                <Task
                                    id={task.id}
                                    status={task.status}
                                    taskContent={task.taskContent}
                                    onDelete={onDelete}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default TaskList;