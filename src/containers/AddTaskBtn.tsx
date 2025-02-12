import plusIcon from "../../public/plusIcon.svg"
import React from 'react'
import Btn from "../components/Btn.tsx";

const AddTaskBtn: React.FC = () => {
    return (
        <div className='max-w-12.5 fixed right-110 bottom-10'>
            <Btn children={<img src={plusIcon} alt='Button to add Task'/>} />
        </div>
    )
}

export default AddTaskBtn