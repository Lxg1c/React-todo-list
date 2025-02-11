import './styles/App.scss';
import { Header } from './components/Header.tsx';
import { Search } from './components/Search.tsx';
import {JSX} from "react";

function App(): JSX.Element {  // Используем JSX.Element вместо React.ElementType

    return (
        <div className='app container'>
            <Header />
            <Search />
        </div>
    );
}

export default App;
