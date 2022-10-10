import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
function App() {
  return (
    <NoteState>
    <Router>
      <Navbar/>
      <Alert message="this is a message"/>
      <div className="container">
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/login' element={<LogIn/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
      </div>
    </Router>
    </NoteState>
  );
}

export default App;
