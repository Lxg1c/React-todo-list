import Btn from "../components/Btn.tsx";
import { Button } from "antd";
import React from "react";

interface NewNoteControlsProps {
    onClose: () => void;
    onApply: () => void;
}

const NewNoteControls: React.FC<NewNoteControlsProps> = ({ onClose, onApply }) => {
    // Создаем новый обработчик, который вызывает оба действия
    const handleApplyAndClose = () => {
        onApply();
        onClose();
    };

    return (
        <div className="modal__content-controls flex justify-between align-middle mt-32">
            <Button onClick={onClose}>CANCEL</Button>
            <Btn onClick={handleApplyAndClose}>
                APPLY
            </Btn>
        </div>
    );
};

export default NewNoteControls;