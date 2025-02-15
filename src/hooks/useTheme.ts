import {useEffect} from "react";
import Cookies from "js-cookie";
import {setTheme} from "../store/slices/themeSlice.ts";
import {useDispatch} from "react-redux";

export const useTheme = () => {
    const dispatch = useDispatch();

    // Восстановление темы из cookies при загрузке приложения
    useEffect(() => {
        const savedTheme = Cookies.get('theme') as 'light' | 'dark' | undefined;
        if (savedTheme) {
            dispatch(setTheme(savedTheme));
        }
    }, [dispatch]);


}