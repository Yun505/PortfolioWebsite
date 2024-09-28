import React from 'react';
import Alumni from "../images/Alumni.png";
import Blog from "../images/Blog.png";
import Logo from "../images/logo.png";
import Natto from "../images/Natto.png";
import Micro from "../images/Micro.png";
import Rocket from "../images/Rocket.png";
import Music from "../images/Music.png";
import BlackJack from "../images/BlackJack.png";
import Twitter from "../images/twitter.png";
import Resy from "../images/resy.png"
import Move from "../images/move.png"
import { useModal } from '../components/VideoModalController';
import VideoModal from "../components/VideoModal";

export default function Portfolio() {
  const { modals, openModal, closeModal, isModalOpen } = useModal();

  const content = {
    move:{
      videoSrc: "https://www.youtube.com/watch?v=JmsyGQDQh5g",
      description:"Hack MIT Project"
    },
    // resy:{
    //   videoSrc: "https://path/to/sentiment-analysis-video.mp4",
    //   description: "This is a detailed description of the sentiment analysis project.",
    // },
    // sentiment: {
    //   videoSrc: "https://path/to/sentiment-analysis-video.mp4",
    //   description: "This is a detailed description of the sentiment analysis project.",
    // },
    tomeet: {
      videoSrc: "https://path/to/tomeet-app-video.mp4",
      description: "Description for another project.",
    },
    blog: {
      videoSrc: "https://path/to/personal-blog-video.mp4",
      description: "Personal Reflections and Insights.",
    },
    alumni: {
      videoSrc: "https://www.youtube.com/embed/ijfOmpE0Msg",
      description: "Year-Long Senior Project.",
    },
    micro: {
      videoSrc: "https://www.youtube.com/embed/Ot85pQ76atM",
      description: "Economies of Scale Review.",
    },
    natto: {
      videoSrc: "https://www.youtube.com/embed/JDNeyeTWXgs",
      description: "Two-level single player.",
    },
    rocket: {
      videoSrc: "https://www.youtube.com/embed/3Bsgfa6kNRA",
      description: "Single Player.",
    },
    music: {
      videoSrc: "https://www.youtube.com/embed/GSpHw8jqjdk",
      description: "Most Technically Complex Award.",
    },
    blackjack: {
      videoSrc: "https://www.youtube.com/embed/xOyyNY_SQwc",
      description: "3 Modes of Play.",
    },
  };

  

  const openSpecificModal = (id) => {
    openModal(id, content[id] || { videoSrc: "", description: "No description available." });
  };

  const projects = [
    {
      image: Move,
      title: "MoveMatic",
      tags: ["FastAPI", "MongoDB", "AIST++ Dataset"],
      description: "Hack MIT Project ",
      githubLink: "https://github.com/Yun505/JVXH_MIT_HACK",
      modalId: "move",
      showModalButton: true,
    },
    {
      image: Resy,
      title: "Resy Roulette",
      tags: ["Resy API", "Flask"],
      description: "Indecisive Diners",
      githubLink: "https://github.com/Yun505/resy_roulette",
      modalId: "resy",
      showModalButton: false,
    },
    {
      image: Twitter,
      title: "X Sentiment Analysis",
      tags: ["X API", "Python"],
      description: "Quantitative Trading [Profit]",
      githubLink: "https://github.com/HenryLiu714/Sentiment-Analysis-Model",
      modalId: "sentiment",
      showModalButton: false,
    },
    {
      image: Logo,
      title: "BackLog: ToMeet App",
      tags: ["Expo Go", "React"],
      description: "Long Distance Friendships",
      githubLink: "https://github.com/Yun505/tomeet",
      modalId: "tomeet",
      showModalButton: false, // No modal button for this project
    },
    {
      image: Blog,
      title: "Personal Blog",
      tags: ["FrontEnd", "Writing", "Photography"],
      description: "Personal Reflections and Insights",
      githubLink: "https://github.com/Yun505/blog",
      modalId: "blog",
      showModalButton: false, // No modal button for this project
    },
    {
      image: Alumni,
      title: "Alumni Portal",
      tags: ["FullStack", "Auth0", "SQL"],
      description: "Year-Long Senior Project",
      githubLink: "https://github.com/BCA-Alumni-Portal/Alumni-Portal",
      modalId: "alumni",
      showModalButton: true,
    },
    {
      image: Micro,
      title: "AP Micro Dating Simulator",
      tags: ["Photography", "Ren'Py"],
      description: "Economies of Scale Review",
      githubLink: "https://github.com/Yun505/MicroDatingSimulation",
      modalId: "micro",
      showModalButton: true,
    },
    {
      image: Natto,
      title: "Natto Obstacle Course",
      tags: ["C#", "Unity"],
      description: "Two-level single player",
      githubLink: "https://github.com/Yun505/Natto_Obstacle_Course",
      modalId: "natto",
      showModalButton: true,
    },
    {
      image: Rocket,
      title: "Rocket Game",
      tags: ["C#", "Unity"],
      description: "Single Player",
      githubLink: "https://github.com/Yun505/rocket",
      modalId: "rocket",
      showModalButton: true,
    },
    {
      image: Music,
      title: "Music Classifier",
      tags: ["Python", "Tkinter", "Machine Learning"],
      description: "Most Technically Complex Award",
      githubLink: "https://github.com/Yun505/MusicClassifier",
      modalId: "music",
      showModalButton: true,
    },
    {
      image: BlackJack,
      title: "Digital BlackJack",
      tags: ["Python",  "Tkinter"],
      description: "3 Modes of Play",
      githubLink: "https://github.com/Yun505/Midyear-Project-Blackjack",
      modalId: "blackjack",
      showModalButton: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-green-700 py-5">  <button
                    className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                    </svg>
                  </button> - Video Demos</h1>
      <main className="flex flex-col items-center w-full flex-1 text-center">
        <section className="flex flex-wrap justify-center gap-8 w-full px-4 py-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-base-100 shadow-xl rounded-lg w-80 p-4 flex flex-col items-center">
              <img src={project.image} alt={project.title} className="w-full h-40 rounded-md" />
              <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
              <div className="row flex flex-wrap gap-2 text-md">
                {project.tags.map((tag, i) => (
                  <div key={i} className="badge badge-outline text-md">{tag}</div>
                ))}
              </div>
              <p className="flex-grow text-green-600">{project.description}</p>
              <div className="card-actions py-1 justify-end">
                {project.githubLink && (
                  <a href={project.githubLink}>
                    <button className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-sky-100 hover:text-white">
                      Repository 
                    </button>
                  </a>
                )}
                {project.showModalButton && content[project.modalId]?.videoSrc && (
                  <button
                    onClick={() => openSpecificModal(project.modalId)}
                    className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
      {isModalOpen && (
        <VideoModal
          onClose={closeModal}
          videoSrc={content[modals[0]?.id]?.videoSrc}
          description={content[modals[0]?.id]?.description}
        />
      )}
    </div>
  );
}
