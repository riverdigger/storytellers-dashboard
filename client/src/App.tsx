import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import GameCreate from './pages/Game/GameEdit';
import Starfield from './components/Starfield/Starfield';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Starfield
        starCount={750}
        starColor={[255, 255, 255]}
        speedFactor={0.01}
        backgroundColor="black"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/create" element={<GameCreate />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
