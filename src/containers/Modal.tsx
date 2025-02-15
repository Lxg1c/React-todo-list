import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Search from "../components/CustomInput.tsx";
import '../styles/Modal.scss';
import NewNoteControls from "./NewNoteControls.tsx";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentTheme, selectNewTaskInput} from "../store/selectors.ts";
import {addTask, setNewTaskInput} from "../store/slices/taskSlice.ts";

interface ModalProps {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    // State to contain portal_root tag
    const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

    // Dispatcher to send actions to reducer
    const dispatch = useDispatch();

    // Selectors
    const newTaskInput = useSelector(selectNewTaskInput);
    const theme = useSelector(selectCurrentTheme)

    // Func to search portal_root div
    useEffect(() => {
        const rootElement = document.getElementById("portal_root");
        if (!rootElement) {
            console.error("Portal root not found!");
        } else {
            setPortalRoot(rootElement);
        }
    }, []);

    // Обработчик изменения значения в поле ввода
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setNewTaskInput(e.target.value));
    };

    const onApply = () => {
        if (newTaskInput.trim()) {
            dispatch(
                addTask({
                    id: Date.now(), // Генерация уникального ID задачи
                    taskContent: newTaskInput,
                    status: false, // Задача не завершена по умолчанию
                })
            );
        }
    };

    // If portal_root not found - dont render
    if (!portalRoot) return null;

    return ReactDOM.createPortal(
        <div className="modal" >
            <div className="modal__content" style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#252525'}}>
                <h1 className="modal__content-title mb-6.25" style={{color: theme === 'light' ? '#252525' : '#ffffff'}}>NEW NOTE</h1>
                <Search onChange={handleChange} />
                <NewNoteControls onClose={onClose} onApply={onApply} />
            </div>
        </div>,
        portalRoot
    );
};

export default Modal;
