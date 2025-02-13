import React from 'react'
import Search from "../components/Search.tsx";
import CustomDropdown from "../components/Dropdown.tsx";
import ChangeThemeBtn from "../components/ChangeThemeBtn.tsx";

const TaskBar: React.FC = () => {
    return (
        <div className='main__top flex mt-5 gap-4'>
            <Search/>
            <CustomDropdown/>
            <ChangeThemeBtn/>
        </div>
    )
}

export default TaskBar