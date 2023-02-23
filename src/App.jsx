
import {Routes, Route} from "react-router-dom"
import './App.css';
import HomePage from './components/HomePage';
import TitlePage from './components/TitlePage';




const App = () => {
 
  return ( 
    <div>
      <Routes>
      <Route path='/' element={<HomePage/>} />
        <Route path='/title/:titre' element={<TitlePage/>} />
      </Routes>
      </div>
      )};

export default App;