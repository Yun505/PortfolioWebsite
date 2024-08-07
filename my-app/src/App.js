import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import Sentiment from "./pages/SentimentClassifier"
import Portfolio from "./pages/Portfolio"
import Meet from "./pages/ToMeet"
import Test from "./pages/Test"
import Rocket from "./pages/Rocket"
import Natto from "./pages/Natto"
import Alumni from "./pages/Alumni"
import BlackJack from "./pages/BlackJack"
import Micro from "./pages/Micro"
import Music from "./pages/Music"
import Blog from "./pages/Blog"
import Ocaml from "./pages/OCaml"
import "./App.css";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      {/* <div className="container"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sentiment" element={<Sentiment />} /> 
          <Route path="/test" element={<Test />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/blackjack" element={<BlackJack />} />
          <Route path="/home" element={<Home />} />
          <Route path="/micro" element={<Micro />} />
          <Route path="/music" element={<Music />} />
          <Route path="/natto" element={<Natto />} />
          <Route path="/rocket" element={<Rocket />} />
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/ocaml" element={<Ocaml />} />
          <Route path="/meet" element={<Meet />} />
        </Routes>
      {/* </div> */}
    </div>
  )
}

export default App;
