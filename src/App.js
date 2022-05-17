import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Proadd from './components/Proadd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Searchpro from './components/Searchpro';
import Viewpro from './components/Viewpro';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" exact element={<Proadd/>}/>
<Route path="/search" exact element={<Searchpro/>}/>
<Route path="/view" exact element={<Viewpro/>}/>

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
