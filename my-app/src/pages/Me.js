import hiking from "../images/hiking.jpg";
import bowling from "../images/bowling.jpg";
import butter from "../images/butter.jpg";
import gwc from "../images/gwc.jpg";
import giant from "../images/giant.jpg";
import luna from "../images/luna.png";
import morning from "../images/morning.jpg";
import rain from "../images/rain.jpg";
import "../App.css";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

export default function Me() {
  return (
    <div className="container pl-20 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">Me</h1>
      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <h3 className="text-3xl">Fun Facts About Me:</h3>
      <br className="space-y-4"></br>
      <div className="container pl-30 pr-30 text-xl">
        <p>Hiking: one of my favorite way to destress with friends.</p>
        <br className="space-y-4"></br>
        <p>Girls Who Code 2021-22: My favorite club at BCA. <a className="bg-sky-100 hover:bg-sky-400 hover:text-white inline-block block round px-2 rounded-full" href="https://www.instagram.com/gwc.bca/">@gwc.bca</a></p>
        <br className="space-y-4"></br>
        <p>Morning Walks: I like to wake up early and walk around the school track before my first class.</p>
        <br className="space-y-4"></br>
        <br className="space-y-2"></br>
        <div className="btn-group flex  w-full py-2">
          <a href="#item1" className="btn text-white btn-info hover:bg-gradient-to-r hover:from-sky-100 hover:to-sky-200 hover:border-sky-200 hover:text-black text-md">Hiking</a>
          <a href="#item2" className="btn text-white btn-info hover:bg-gradient-to-r hover:from-sky-100 hover:to-sky-200 hover:border-sky-200 hover:text-black text-md">GWC</a>
          <a href="#item3" className="btn text-white btn-info hover:bg-gradient-to-r hover:from-sky-100 hover:to-sky-200 hover:border-sky-200 hover:text-black text-md">Morning Walks</a>
        </div>
        <div className="flex carousel w-4/6 h-auto">
          <div id="item1" className="carousel-item w-full">
            <img src={hiking} className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={gwc} className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={morning} className="w-full" />
          </div>
        </div>
        <br className="space-y-4"></br>
        <br className="space-y-4"></br>

      </div>
    </div>
  )
}