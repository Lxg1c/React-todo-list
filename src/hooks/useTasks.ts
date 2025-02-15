// Восстановление задач из cookies при загрузке приложения
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setTasks} from "../store/slices/taskSlice.ts";
import Cookies from "js-cookie";

export const useTasks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const savedTasks = Cookies.get('tasks');
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            dispatch(setTasks(tasks));
        }
    }, [dispatch]);
}