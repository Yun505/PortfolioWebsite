import Alumni from "../images/Alumni.png";
import Blog from "../images/Blog.png";
import Logo from "../images/logo.png"
import Natto from "../images/Natto.png";
import Micro from "../images/Micro.png";
import Rocket from "../images/Rocket.png";
import Music from "../images/Music.png";
import BlackJack from "../images/BlackJack.png";
import Twitter from "../images/twitter.png";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex flex-col items-center w-full flex-1 text-center">
        <section className="flex flex-wrap justify-center gap-8 w-full px-4 py-10">
          <div className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
            <img
              src={Twitter}
              alt="X Sentiment Trading"
              className="w-full h-40 rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">X Sentiment Trading</h2>
            <div className="row flex flex-wrap gap-2 text-md">
              <div className="badge badge-outline text-md">X API</div>
              <div className="badge badge-outline text-md">Machine Learning</div>
              <div className="badge badge-outline text-md">Trading</div>
            </div>
            <p className="flex-grow text-green-600">Quantitative Trading [Profit]</p>
            <div className="card-actions py-1 justify-end">
              <a href="https://github.com/HenryLiu714/Sentiment-Analysis-Model">
                <button
                  className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white"
                >
                  github.io
                </button>
              </a>
              <a href="/sentiment">
                <button
                  className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <div className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
            <img
              src={Logo}
              alt="BackLog: ToMeet App"
              className="w-full h-40 rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">BackLog: ToMeet App</h2>
            <div className="row flex flex-wrap gap-2 text-md">
              <div className="badge badge-outline text-md">Graphics</div>
              <div className="badge badge-outline text-md">Learning</div>
              <div className="badge badge-outline text-md">App</div>
            </div>
            <p className="flex-grow text-green-600">Long Distance Friendships</p>
            <div className="card-actions py-1 justify-end">
              <a href="https://github.com/Yun505/tomeet">
                <button
                  className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white"
                >
                  github.io
                </button>
              </a>
              <a href="/meet">
                <button
                  className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <div className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
            <img
              src={Blog}
              alt="Personal Blog"
              className="w-full h-40 rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Personal Blog</h2>
            <div className="row flex flex-wrap gap-2 text-md">
              <div className="badge badge-outline text-md">FrontEnd</div>
              <div className="badge badge-outline text-md">Writing</div>
              <div className="badge badge-outline text-md">Photography</div>
            </div>
            <p className="flex-grow text-green-600">Personal Reflections and Insights</p>
            <div className="card-actions py-1 justify-end">
              <a href="https://github.com/Yun505/blog">
                <button
                  className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white"
                >
                  github.io
                </button>
              </a>
              <a href="/blog">
                <button
                  className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <div className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
            <img
              src={Alumni}
              alt="Alumni Portal"
              className="w-full h-40 rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Alumni Portal</h2>
            <div className="row flex flex-wrap gap-2 text-md">
              <div className="badge badge-outline text-md">FrontEnd</div>
              <div className="badge badge-outline text-md">Security</div>
              <div className="badge badge-outline text-md">BackEnd</div>
            </div>
            <p className="flex-grow text-green-600">Year-Long Senior Project</p>
            <div className="card-actions py-1 justify-end">
              <a href="https://github.com/BCA-Alumni-Portal/Alumni-Portal">
                <button
                  className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white"
                >
                  github.io
                </button>
              </a>
              <a href="/alumni">
                <button
                  className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
    <img src={Micro} alt="AP Micro Dating Simulator Project" className="w-full h-40 rounded-md" />
    <h2 className="text-xl font-semibold mt-4">AP Micro Dating Simulator</h2>
    <div className="row flex flex-wrap gap-2 text-md">
      <div className="badge badge-outline text-md">Python</div>
      <div className="badge badge-outline text-md">Photography</div>
      <div className="badge badge-outline text-md">Game Development</div>
      <div className="badge badge-outline text-md">Ren'Py</div>
    </div>
    <p className="flex-grow text-green-600">Economies of Scale Review</p>
    <div className="card-actions py-1 justify-end">
      <a href="https://github.com/Yun505/MicroDatingSimulation">
        <button className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-sky-100 hover:text-white">
          github.io
        </button>
      </a>
      <a href="/micro">
        <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
          </svg>
        </button>
      </a>
    </div>
  </div>

 
  <div className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
    <img src={Rocket} alt="Rocket Game Project" className="w-full h-40 rounded-md" />
    <h2 className="text-xl font-semibold mt-4">Rocket Game</h2>
    <div className="row flex flex-wrap gap-2 text-md">
      <div className="badge badge-outline text-md">C#</div>
      <div className="badge badge-outline text-md">Unity</div>
      <div className="badge badge-outline text-md">Game Development</div>
    </div>
    <p className="flex-grow text-green-600">Single Player</p>
    <div className="card-actions py-1 justify-end">
      <a href="https://github.com/Yun505/rocket">
        <button className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-sky-100 hover:text-white">
          github.io
        </button>
      </a>
      <a href="/rocket">
        <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
          </svg>
        </button>
      </a>
    </div>
  </div>

  
  <div className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
    <img src={Music} alt="Music Classifier Project" className="w-full h-40 rounded-md" />
    <h2 className="text-xl font-semibold mt-4">Music Classifier</h2>
    <div className="row flex flex-wrap gap-2 text-md">
      <div className="badge badge-outline text-md">Python</div>
      <div className="badge badge-outline text-md">Tkinter</div>
      <div className="badge badge-outline text-md">Machine Learning</div>
    </div>
    <p className="flex-grow text-green-600">Most Technically Complex Award</p>
    <div className="card-actions py-1 justify-end">
      <a href="https://github.com/Yun505/MusicClassifier">
        <button className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-sky-100 hover:text-white">
          github.io
        </button>
      </a>
      <a href="/music">
        <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
          </svg>
        </button>
      </a>
    </div>
  </div>

  
  <div className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
    <img src={BlackJack} alt="Digital BlackJack Project" className="w-full h-40 rounded-md" />
    <h2 className="text-xl font-semibold mt-4">Digital BlackJack</h2>
    <div className="row flex flex-wrap gap-2 text-md">
      <div className="badge badge-outline text-md">Python</div>
      <div className="badge badge-outline text-md">Tkinter</div>
      <div className="badge badge-outline text-md">Game Development</div>
      <div className="badge badge-outline text-md">Photoshop</div>
    </div>
    <p className="flex-grow text-green-600">3 Modes of Play</p>
    <div className="card-actions py-1 justify-end">
      <a href="https://github.com/Yun505/Midyear-Project-Blackjack">
        <button className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-sky-100 hover:text-white">
          github.io
        </button>
      </a>
      <a href="/blackjack">
        <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589"> </path></svg>
            </button></a>
            </div></div>


        </section>


      </main>
    </div>

  )
}