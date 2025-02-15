import plusIcon from "../assets/plusIcon.svg"
import React from 'react'
import Btn from "../components/Btn.tsx";

interface AddTaskBtnProps {
    onClick: () => void;
}

const AddTaskBtn: React.FC<AddTaskBtnProps> = ({ onClick }) => {
    return (
        <div className='max-w-12.5 fixed right-110 bottom-10' onClick={onClick}>
            <Btn onClick={onClick}>
                <img src={plusIcon} alt='Button to add Task'/>
            </Btn>
        </div>
    )
}

export default AddTaskBtn