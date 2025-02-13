import './styles/App.scss';
import Header from './components/Header.tsx';
import TaskBar from "./containers/TopBar.tsx"
import AddTaskBtn from "./containers/AddTaskBtn.tsx";
import Modal from "./containers/Modal.tsx";
import React, {JSX, useState} from "react";
import {useDispatch, useSelector, } from "react-redux";
import {addTask, setNewTaskInput} from "./store/slices/taskSlice.ts";
import TaskList from "./containers/TaskList.tsx";
import {RootState} from "./store/store.ts";

function App(): JSX.Element {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();

    const newTaskInput = useSelector((state: RootState) => state.task.newTaskInput); // Правильный путь к состоянию

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);
    const onApply = () => {
        if (newTaskInput.trim()) { // Проводим проверку на пустоту ввода
            dispatch(addTask({
                id: Date.now(), // Генерация уникального ID задачи (можно заменить на более подходящее решение)
                taskContent: newTaskInput,
                status: false,
            }));
        }
    };


    // Обработчик изменения значения в поле ввода
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setNewTaskInput(e.target.value));
    };

    return (
        <div className='app container h-full relative'>
            <Header />
            <main className='relative'>
                <TaskBar />
                <TaskList />
                <AddTaskBtn onClick={openModal} />
            </main>

            {/* Убедитесь, что элемент для портала существует */}
            <div id='portal_root' className='right-0 left-0 bottom-0 top-0'>
                {isModalVisible ? <Modal onClose={closeModal} onApply={onApply} onChange={handleChange}/> : null}
            </div>
        </div>
    );
}

export default App;
