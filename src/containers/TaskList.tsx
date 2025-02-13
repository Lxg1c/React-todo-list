import React from "react";
// import emptyLight from '../../public/empty-light.svg'
import Task from "./Task.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import "../styles/TaskList.scss"

const TaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.task.tasks);

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
