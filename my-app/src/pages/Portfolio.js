import Alumni from "../images/Alumni.png";
import Natto from "../images/Natto.png";
import Micro from "../images/Micro.png";
import Rocket from "../images/Rocket.png";
import Music from "../images/Music.png";
import BlackJack from "../images/BlackJack.png";


export default function Portfolio() {
  return (
    <div className="container pl-20 pr-20">
      <br></br>
      <br></br>
      <div className="text-xl grid pl-30 pr-30">
        <h3 className="text-6xl ">Projects:</h3>
        <br className="space-y-5"></br>
        <br className="space-y-5"></br>
        <div className="row flex flex-wrap items-center gap-12">
          <div className="card bg-base-100 shadow-xl w-96">
            <figure><img src={Alumni} /></figure>
            <div className="card-body">
              <h2 className="card-title text-md">
                Current: Alumni Portal
                <div className="badge badge-outline text-md">FrontEnd</div>
              </h2>
              <div className="row flex flex-wrap gap-2 text-md">
                <div className="badge badge-outline text-md">Security</div>
                <div className="badge badge-outline text-md">BackEnd</div>
              </div>
              <p>Year-Long Senior Project</p>
              <div className="card-actions py-1 justify-end">
                <a href="https://github.com/RemingtonKim/AcademiesAlumni">
                  <button
                    className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white">
                    github.io
                  </button>
                </a>
                <div>
                  <a href="/alumni">
                    <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={Natto} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Natto Obstacle Course
                <div className="badge badge-outline">C#</div>
              </h2>
              <div className="row flex flex-wrap gap-2 text-md">
                <div className="badge badge-outline text-md">Unity</div>
                <div className="badge badge-outline text-md">Game Development</div>
              </div>
              <p>Two-level single player</p>
              <div className="card-actions py-2 justify-end">
                <a href="https://github.com/Yun505/Natto_Obstacle_Course">
                  <button
                    className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white">
                    github.io
                  </button>
                </a>
                <div>
                  <a href="/natto">
                    <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={Micro} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                AP Micro Dating Simulator
                <div className="badge badge-outline">Python</div>
              </h2>
              <div className="row flex flex-wrap gap-2 text-md">
                <div className="badge badge-outline text-md">Photography</div>
                <div className="badge badge-outline text-md">Game Development</div>
                <div className="badge badge-outline">Ren'Py</div>
              </div>
              <p>Economies of Scale Review</p>
              <div className="card-actions py-2 justify-end">
                <a href="https://github.com/Yun505/MicroDatingSimulation">
                  <button
                    className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white">
                    github.io
                  </button>
                </a>
                <div>
                  <a href="/micro">
                    <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br className="space-y-6"></br>
        <div className="row flex flex-wrap items-center gap-12">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={Rocket} /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Rocket Game
                <div className="badge badge-outline">C#</div>
              </h2>
              <div className="row flex flex-wrap gap-2 text-md">
                <div className="badge badge-outline text-md">Unity</div>
                <div className="badge badge-outline text-md">Game Development</div>
              </div>
              <p>Single Player</p>
              <div className="card-actions py-2 justify-end">
                <a href="https://github.com/Yun505/rocket">
                  <button
                    className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white">
                    github.io
                  </button>
                </a>
                <div>
                  <a href="/rocket">
                    <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={Music} /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Music Classifier
                <div className="badge badge-outline">Python</div>
              </h2>
              <div className="row flex flex-wrap gap-2 text-md">
                <div className="badge badge-outline text-md">Tkinter</div>
                <div className="badge badge-outline text-md">Machine Learning</div>
              </div>
              <p>Most Technically Complex Award</p>
              <div className="card-actions py-2 justify-end">
                <a href="https://github.com/Yun505/MusicClassifier">
                  <button
                    className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white">
                    github.io
                  </button>
                </a>
                <div>
                  <a href="/music">
                    <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={BlackJack} /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Digital BlackJack
                <div className="badge badge-outline">Python</div>
              </h2>
              <div className="row flex flex-wrap gap-2 text-md">
                <div className="badge badge-outline text-md">Tkinter</div>
                <div className="badge badge-outline text-md">Game Development</div>
                <div className="badge badge-outline">Photoshop</div>
              </div>
              <p>3 Modes of Play</p>
              <div className="card-actions py-2 justify-end">
                <a href="https://github.com/Yun505/Midyear-Project-Blackjack">
                  <button
                    className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white">
                    github.io
                  </button>
                </a>
                <div>
                  <a href="/blackjack">
                    <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}