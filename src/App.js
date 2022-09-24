import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <h1>INoteBook</h1>
      <Navbar/>
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
