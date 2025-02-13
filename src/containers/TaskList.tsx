// TaskList.tsx
import React from 'react';
import Task from './Task.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { removeTask } from '../store/slices/taskSlice.ts';
import '../styles/TaskList.scss';

const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const filterStatus = useSelector((state: RootState) => state.task.filterStatus);

    // Фильтрация задач в зависимости от текущего состояния фильтра
    const filteredTasks = tasks.filter((task) => {
        if (filterStatus === 'all') return true;
        if (filterStatus === 'completed') return task.status === true;
        if (filterStatus === 'incomplete') return task.status === false;
        return true;
    });

    const onDelete = (id: number) => {
        dispatch(removeTask(id)); // Удаляем задачу по ID
    };

    return (
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
    );
};

export default TaskList;
