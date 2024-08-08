import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Sentiment from "./pages/SentimentClassifier";
import Portfolio from "./pages/Portfolio";
import Meet from "./pages/ToMeet";

import Rocket from "./pages/Rocket";
import Natto from "./pages/Natto";
import Alumni from "./pages/Alumni";
import BlackJack from "./pages/BlackJack";
import Micro from "./pages/Micro";
import Music from "./pages/Music";
import Blog from "./pages/Blog";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          
          <Route path="/home" element={<Home />} />
        
        </Routes>
      </div>
    </div>
  );
}

export default App;
