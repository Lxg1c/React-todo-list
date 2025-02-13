import React from "react";
import Task from "./Task.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { removeTask } from "../store/slices/taskSlice.ts";
import "../styles/TaskList.scss";

const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.task.tasks);

    const onDelete = (id: number) => {
        dispatch(removeTask(id)); // Удаление задачи по id
    };

    return (
        <ul className="task__list">
            {tasks.map((task, index: number) => (
                <li key={index} className="task__list-item">
                    <Task id={task.id} status={task.status} taskContent={task.taskContent} />
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
