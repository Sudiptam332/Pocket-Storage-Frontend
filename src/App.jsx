import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';
import AddNote from './components/AddNote';
import AddPhoto from './components/AddPhoto';
import PhotoState from './context/photos/PhotoState';
import DocState from './context/docs/DocState';
import AddDoc from './components/AddDoc';
import Notes from './components/Notes';
import Welcome from './components/Welcome';

function App() {
  return (
    <NoteState>
      <DocState>
        <PhotoState>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/galary" element={<AddPhoto />} />
              <Route path="/doc" element={<AddDoc />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Router>
        </PhotoState>
      </DocState>
    </NoteState>
  );
}

export default App;
