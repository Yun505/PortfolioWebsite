import Ocaml from "../images/ocaml.png";
import music from "../images/Music.png";
import Micro from "../images/Micro.png";
import Me from "../images/me_profile.jpg";
import harbs from "../images/harbs.jpg"


export default function Home() {
  return (
    <div className="container pl-20 pr-20">
      <br></br>
      <br></br>
      <div className="container pl-30 pr-30">
        <h1 className="text-6xl">Hayun Jung</h1>
        <br className="space-y-8"></br>
        <br className="space-y-8"></br>
        <div className="text-xl space-y-3 flex grid grid-cols-2 ">
          <div className="col container">
            <p>Interested in machine learning, cybersecurity, and game development</p>
            <br className="space-y-1"></br>
            <p>More: <a className="bg-sky-100 hover:bg-sky-400 hover:text-white inline-block block round px-2 rounded-full" href="https://github.com/Yun505">Github</a>, <a className="bg-sky-100 hover:bg-sky-400 hover:text-white inline-block block round px-2 rounded-full " href="https://www.linkedin.com/in/hayun-jung-4b8b49244/">LinkedIn</a></p>
            <br className="space-y-1"></br>
            <p>Contact me on <a className="underline text-semibold decoration-green-400 hover:text-green-500 " href="mailto:yunjun505@gmail.com">yunjun505@gmail.com</a></p>
            <br className="space-y-1"></br>
            <p>UMASS Amherst Computer Science B.S.'26</p>
            <br className="space-y-1"></br>
            {/* <p>Click on my profile on the right for random facts about me!</p> */}
          </div>
          <div className="col">
            <div className="avatar">
              <div className="rounded-xl ring ring-sky-500 ring-offset-base-500 ring-offset-2 items-center content-centered ">
                {/* <a href="/me"> */}
                <img src={Me} />
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <br className="space-y-8"></br>

      <div className="text-xl flex grid">
        <h3 className="text-3xl ">Some Projects:</h3>
        <br className="space-y-4"></br>
        <div className="row flex flex-wrap items-center gap-12">
          <div className="card bg-base-100 shadow-xl w-96">
            <figure><img src={Ocaml} /></figure>
            <div className="card-body">
              <h2 className="card-title text-md">
                Current: OCaml RPC
                <div className="badge badge-outline text-md">Learning</div>
              </h2>
              <div className="row flex flex-wrap gap-2 text-md">
                <div className="badge badge-outline text-md">Security</div>
                <div className="badge badge-outline text-md">BackEnd</div>
              </div>
              <p>Fun Side Project</p>
              <div className="card-actions py-1 justify-end">
                <a href="https://github.com/Yun505/OCaml-RPC">
                  <button
                    className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white">
                    github.io
                  </button>
                </a>
                <div>
                  <a href="/ocaml">
                    <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={music} /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Music Classifier
                <div className="badge badge-outline">Python</div>
              </h2>
              <div className="row flex flex-wrap gap-2 text-md">
                <div className="badge badge-outline text-md">Librosa</div>
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
            <figure><img src={Micro} /></figure>
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
        <br className="space-y-8"></br>
        <br className="space-y-1"></br>
        <p><a className="text-2xl underline text-semibold decoration-sky-400 hover:text-sky-500 " href="/portfolio">More Projects-</a></p>
      </div>

      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <h3 className="text-3xl ">Misc:</h3>
      <div className="text-xl flex grid">
        <br className="space-y-4"></br>
        <div className="">
          <h1 className="text-xl"><a className="underline text-semibold decoration-green-400 hover:text-green-500 " href="/misc">Blog</a></h1>
          <br className="space-y-8"></br>
          <div className="container justify-start">
            <div tabIndex={0} className="collapse collapse-arrow border border-violet-700 bg-base-100 rounded-box">
              <div className="collapse-title text-md font-medium text-violet-700">
                NYC Food Trip II 1/15/23
              </div>
              <div className="collapse-content text-sm">
                <br></br>
                <p>After apps, my friend and I went to the city again :D. We went around Soho trying different bakeries. The cronut at dominique ansel bakery was heavenly.</p>
                <br></br>
                <p>We also went to Harbs and I got to say their matcha cake is phenomenal. It's not too sweet. I also really liked their crepe cake shown below. The bakery was really pretty and if you ever go there, I'd suggest getting the royal milk tea with it.</p>
                <br className="space-y-5"></br>
                <img src={harbs}></img>
              </div>
            </div>
            <br className="space-y-2"></br>
            <div tabIndex={1} className="collapse collapse-arrow border border-violet-700 bg-base-100 rounded-box">
              <div className="collapse-title text-md font-medium text-violet-700">
                Reborn Rich Kdrama Critique
              </div>
              <div className="collapse-content text-sm">
                <br></br>
                <p>Lately, I have been engrossed in the K-drama series, "Reborn Rich." This captivating show has managed to capture my attention, not merely due to the presence of my favorite actor, Song Joon Ki, but primarily because of its riveting plotline. I have enthusiastically recommended it to fellow K-drama enthusiasts and am delighted to note that the series is being released at a pace of three episodes per week.

                  One aspect of "Reborn Rich" that particularly intrigues me is its literary origin. I have heard that the source material, the book on which the series is based, is exceptionally well-crafted, and I am eagerly anticipating delving into its pages in the near future.

                  While it may sound somewhat unconventional, this show has sparked within me a newfound interest in the world of stocks and investment. Interestingly, my current favorite character is not portrayed by Song Joon Ki, but rather the role of the grandfather. His performance is nothing short of exemplary, and I believe that he deserves recognition and acclaim in this year's awards circuit. His character, in my opinion, stands as the intellectual fulcrum of the entire series.

                  The brilliance of the storytelling lies not solely with the character of Dojun, who possesses knowledge of the future, but also in the rich historical context it offers. The incorporation of real-world events, such as the IMF crisis, adds a layer of authenticity to the narrative. Moreover, the parallels drawn between the fictional conglomerate, Soonyang, and the renowned Samsung conglomerate, pique my curiosity and make for a thought-provoking element within the show.</p>
                <br></br>

                <p>
                </p>
                <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6lGImvjI_Sw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <br className="space-y-8"></br>
          <br className="space-y-8"></br>
        </div>
      </div>


    </div>



  )
}