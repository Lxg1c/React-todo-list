import './styles/App.scss'
import {Header} from "./components/Header.tsx";
import {Search} from "./components/Search.tsx";

function App() {

  return (
      <div className='app container'>
          <Header />
          <Search />
      </div>
  )
}

export default App
