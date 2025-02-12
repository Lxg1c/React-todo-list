export const CustomSearchTheme = {
    token: {
        colorBorder: "#6C63FF",
    },
}

export const CustomBtn = {
    components: {
        Button: {
            colorText: '#ffffff',
            fontSize: 18,
            colorBgContainer: '#6C63FF',
        }
    }
}

export interface TaskInterface {
    id: number,
    taskContent: string
}