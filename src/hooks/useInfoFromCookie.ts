import {useTasks} from "./useTasks.ts";
import {useTheme} from "./useTheme.ts";

export const useInfoFromCookie = () => {
    useTasks()
    useTheme()
}