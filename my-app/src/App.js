import Navbar from "./components/NavBar"
import Home from "./pages/Home"
// import Misc from "./pages/Misc"
import Portfolio from "./pages/Portfolio"
import Test from "./pages/Test"
import Rocket from "./pages/Rocket"
import Natto from "./pages/Natto"
import Alumni from "./pages/Alumni"
import BlackJack from "./pages/BlackJack"
import Micro from "./pages/Micro"
import Music from "./pages/Music"
// import Me from "./pages/Me"
import Ocaml from "./pages/OCaml"
import "./App.css";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/misc" element={<Misc />} /> */}
          <Route path="/test" element={<Test />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/blackjack" element={<BlackJack />} />
          <Route path="/home" element={<Home />} />
          <Route path="/micro" element={<Micro />} />
          <Route path="/music" element={<Music />} />
          <Route path="/natto" element={<Natto />} />
          <Route path="/rocket" element={<Rocket />} />
          {/* <Route path="/me" element={<Me />} /> */}
          <Route path="/ocaml" element={<Ocaml />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
