import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import { useState } from 'react';
function App() {
  const [alert ,setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home showAlert={showAlert}/>} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={<LogIn showAlert={showAlert} />} />
            <Route exact path='/signup' element={<SignUp showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
