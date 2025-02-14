import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Search from "../components/CustomInput.tsx";
import '../styles/Modal.scss';
import NewNoteControls from "./NewNoteControls.tsx";
import {useSelector} from "react-redux";
import {selectCurrentTheme} from "../store/selectors.ts";

interface ModalProps {
    onClose: () => void;
    onApply: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onApply }) => {
    const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
    const theme = useSelector(selectCurrentTheme)

    useEffect(() => {
        const rootElement = document.getElementById("portal_root");
        if (!rootElement) {
            console.error("Portal root not found!");
        } else {
            setPortalRoot(rootElement);
        }
    }, []);

    // Если portalRoot не найден, не рендерим компонент
    if (!portalRoot) return null;

    return ReactDOM.createPortal(
        <div className="modal" >
            <div className="modal__content" style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#252525'}}>
                <h1 className="modal__content-title mb-6.25" style={{color: theme === 'light' ? '#252525' : '#ffffff'}}>NEW NOTE</h1>
                <Search />
                <NewNoteControls onClose={onClose} onApply={onApply} />
            </div>
        </div>,
        portalRoot
    );
};

export default Modal;
