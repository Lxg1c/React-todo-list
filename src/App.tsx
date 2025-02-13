import './styles/App.scss';
import Header from './components/Header.tsx';
import Search from './components/Search.tsx';
import CustomDropdown from "./components/Dropdown.tsx";
import {JSX} from "react";

function App(): JSX.Element {

    return (
        <div className='app container h-full relative'>
            <Header />
            
            <main>
                <div className='main__top flex mt-5 gap-4'>
                    <Search />
                    <CustomDropdown />
                </div>
            </main>

            {/* Убедитесь, что элемент для портала существует */}
            <div id='portal_root' className='right-0 left-0 bottom-0 top-0'>
                {isModalVisible ? <Modal onClose={closeModal} onApply={onApply} onChange={handleChange}/> : null}
            </div>
        </div>
    );
}

export default App;
