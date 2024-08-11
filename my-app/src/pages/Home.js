import React from "react";
import profileImage from "../images/linkedin.jpg";
import musicImage from "../images/Music.png";
import alumniImage from "../images/Alumni.png";
// import twitterImage from "../images/twitter.png";
import resyImage from "../images/resy.png";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex flex-col items-center w-full flex-1 text-center">

        <section className="my-8 flex items-center justify-center">
          <img
            src={profileImage}
            alt="ALT"
            className="w-50 h-60  object-cover ring ring-sky-500 ring-offset-base-500 ring-offset-2 rounded"
          />
          <div className="ml-4 text-left">
            <h1 className="text-4xl py-3">Hayun Jung</h1>
            <p>Favorite Book: The History of Love
              by Nicole Krauss
            </p>
            <p className="text-md text-green-600">UMass Amherst CS + Math B.S.'26</p>
            <p>
              <a
                className="bg-sky-100 hover:bg-sky-400 hover:text-white inline-block block round px-2 rounded-full"
                href="https://github.com/Yun505"
              >
                Github
              </a>
              <a
                className="bg-sky-100 hover:bg-sky-400 hover:text-white inline-block block round px-2 rounded-full "
                href="https://www.linkedin.com/in/hayun-jung-4b8b49244/"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                className="underline font-semibold text-green-400 hover:text-green-500"
                href="mailto:yunjun505@gmail.com"
              >
                yunjun505@gmail.com
              </a>
            </p>
          </div>
        </section>

        <h2 className="text-3xl text-green-700">Portfolio has videos for Select Projects.</h2>
        <section className="flex flex-wrap justify-center gap-8 w-full px-4 py-10">

          <div className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
            <img
              src={resyImage}
              alt=""
              className="w-full h-40 rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4"> Resy Roulette</h2>
            <div className="row flex flex-wrap gap-2 text-md ">
              <div className="badge badge-outline text-md">Resy API</div>
              <div className="badge badge-outline text-md">Flask</div>
            </div>
            <p className="flex-grow text-green-600">Indecisive Diners</p>
            <div className="card-actions py-1 justify-end">
              <a href="https://github.com/Yun505/resy_roulette">
                <button
                  className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white"
                >
                  Repository 
                </button>
              </a>
              
            </div>
          </div>

          <div className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
            <img
              src={musicImage}
              alt="Music Classifier Project"
              className="w-full h-40 rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Music Classifier</h2>
            <div className="row flex flex-wrap gap-2 text-md">
              <div className="badge badge-outline text-md">Machine Learning</div>
              <div className="badge badge-outline text-md">Librosa</div>
            </div>
            <p className="flex-grow text-green-600">Most Technically Complex Award</p>
            <div className="card-actions py-1 justify-end">
              <a href="https://github.com/Yun505/MusicClassifier">
                <button
                  className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white"
                >
                  Repository 
                </button>
              </a>
             
            </div>
          </div>

          <div className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
            <img
              src={alumniImage}
              alt="Alumni Portal Project"
              className="w-full h-40 rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Alumni Portal</h2>
            <div className="row flex flex-wrap  text-md gap-2">
              <div className="badge badge-outline text-md">Security</div>
              <div className="badge badge-outline text-md">BackEnd</div>
            </div>
            <p className="flex-grow text-green-600">Capstone Project</p>
            <div className="card-actions py-1 justify-end">
              <a href="https://github.com/BCA-Alumni-Portal/Alumni-Portal">
                <button
                  className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white"
                >
                  Repository 
                </button>
              </a>
              
            </div>
          </div>
        </section>

        <section className="text-xl flex grid">
          <div className="">
            <h1 className="text-xl">
              <a
                className="underline text-semibold decoration-green-400 hover:text-green-500"
                href="https://yun505.github.io/blog/index.html"
              >
                Click for Blog/Hobbies
              </a>
            </h1>
          </div>
        </section>
        <br className="space-y-3"></br>
      </main>
    </div>
  );
}
