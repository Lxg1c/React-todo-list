import Btn from "../components/Btn.tsx";
import {Button} from "antd";
import React from "react";

interface NewNoteControlsProps {
    onClose: () => void;
    onApply: () => void;
}

const NewNoteControls: React.FC = () => {
    return (
        <div className="modal__content-controls flex justify-between align-middle mt-32">
            <Button>CANCEL</Button>
            <Btn children='APPLY'/>
        </div>
    )
}

export default NewNoteControls;