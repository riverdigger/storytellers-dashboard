import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Game from './components/Game/Game';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
