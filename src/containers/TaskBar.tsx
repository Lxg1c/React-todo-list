import React, {useState} from 'react'
import Search from "../components/CustomInput.tsx";
import CustomDropdown from "../components/Dropdown.tsx";
import ChangeThemeBtn from "./ChangeThemeBtn.tsx";
import {useDispatch} from "react-redux";
import { setSearchQuery } from '../store/slices/taskSlice.ts';

const TaskBar: React.FC = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState<string>('');

    // Функция для обновления поискового запроса
    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearch(query);
        dispatch(setSearchQuery(query));  // Обновляем поиск в Redux
    };

    return (
        <div className='main__top flex mt-5 gap-4'>
            <Search value={search} onChange={onSearchChange} />
            <CustomDropdown/>
            <ChangeThemeBtn/>
        </div>
    )
}

export default TaskBar