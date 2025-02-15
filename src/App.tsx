import './styles/App.scss';
import Header from './containers/Header.tsx';
import TaskBar from './containers/TaskBar.tsx';
import AddTaskBtn from './containers/AddTaskBtn.tsx';
import Modal from './containers/Modal.tsx';
import {JSX, useState} from 'react';
import { useSelector } from 'react-redux';
import TaskList from './containers/TaskList.tsx';
import {ConfigProvider} from "antd";
import { selectCurrentTheme } from "./store/selectors.ts";
import {useInfoFromCookie} from "./hooks/useInfoFromCookie.ts";

function App(): JSX.Element {
    // State to Modal view
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Selectors
    const theme = useSelector(selectCurrentTheme);

    // Custom hook to get theme and tasks from cookie
    useInfoFromCookie()

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);


    return (
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 18,
                    colorBgContainer: '#6C63FF',
                },
            }}
        >
            <div
                className="app"
                style={{
                    background: theme === 'dark' ? '#252525' : '#ffffff',
                }}
            >
                <div className="app__container container">
                    <Header />

                    <main className="flex-grow">
                        <TaskBar />
                        <TaskList openModal={openModal} />
                        <AddTaskBtn onClick={openModal} />
                    </main>
                    
                    <div id="portal_root" className="right-0 left-0 bottom-0 top-0">
                        {isModalVisible ? <Modal onClose={closeModal} /> : null}
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
}

export default App;
