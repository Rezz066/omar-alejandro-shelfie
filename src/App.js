import Homepage from "./pages/Homepage/Homepage";
import Bookpage from './pages/Bookpage/Bookpage';
import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'


function App() {

  return (
    <div className="app">
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path="/bookpage/:bookId" element={<Bookpage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
