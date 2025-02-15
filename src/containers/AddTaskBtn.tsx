import plusIcon from "../assets/plusIcon.svg"
import React from 'react'
import FloatBtn from "../components/FloatBtn.tsx";

interface AddTaskBtnProps {
    onClick: () => void;
}

const AddTaskBtn: React.FC<AddTaskBtnProps> = ({ onClick }) => {
    return (
        <div className='max-w-12.5 fixed right-110 bottom-10' onClick={onClick}>
            <FloatBtn onClick={onClick}>
                <img src={plusIcon} alt='Button to add Task'/>
            </FloatBtn>
        </div>
    )
}

export default AddTaskBtn