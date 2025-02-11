import './styles/App.scss';
import Header from './components/Header.tsx';
import Search from './components/Search.tsx';
import CustomDropdown from "./components/Dropdown.tsx";
import {JSX} from "react";

function App(): JSX.Element {

    return (
        <div className='app container'>
            <Header />
            
            <main>
                <div className='main__top flex mt-5 gap-4'>
                    <Search />
                    <CustomDropdown />
                </div>
            </main>
            
        </div>
    );
}

export default App;
