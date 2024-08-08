import Navbar from "./components/NavBar";
import Home from "./pages/Home";

import Portfolio from "./pages/Portfolio";

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
