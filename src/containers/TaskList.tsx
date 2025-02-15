import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectCurrentTheme, selectFilteredTasks} from '../store/selectors.ts';
import Task from './Task.tsx';
import { removeTask } from '../store/slices/taskSlice.ts';
import '../styles/TaskList.scss';
import EmptyLight from '../assets/empty-light.svg';
import EmptyDark from '../assets/empty-dark.svg';

const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    const filteredTasks = useSelector(selectFilteredTasks);
    const theme = useSelector(selectCurrentTheme);


    const onDelete = (id: number) => {
        dispatch(removeTask(id));
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
