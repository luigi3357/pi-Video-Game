import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { LandingPage } from './elements/LandingPage/LandingPage';
import Home from './elements/Home/home';
import {Detail} from './elements/Detail/Detal';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<LandingPage/>}/>      
      <Route path='/home/:id' element={<Detail/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
