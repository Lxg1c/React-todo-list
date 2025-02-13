import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Search from "./Search.tsx";
import '../styles/Modal.scss';
import NewNoteControls from "../containers/NewNoteControls.tsx";

interface ModalProps {
    onClose: () => void;
    onApply: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Исправили тип на функцию
}

const Modal: React.FC<ModalProps> = ({ onClose, onApply, onChange }) => {
    const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

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
        <div className="modal">
            <div className="modal__content">
                <h1 className="modal__content-title mb-6.25">NEW NOTE</h1>
                <Search />
                <NewNoteControls />
            </div>
        </div>,
        portalRoot
    );
};

export default Modal;
