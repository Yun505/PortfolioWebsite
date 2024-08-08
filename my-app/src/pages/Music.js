import React from "react";
import music from "../images/Music.png";

export default function Music() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl text-sky-500 mb-8">Music Classifier</h1>

      <article className="max-w-3xl">
        <h3 className="text-3xl mb-4">Summary:</h3>
        <iframe
          className="mx-auto mb-8"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GSpHw8jqjdk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p className="mb-4">
          In our user-friendly graphical user interface (GUI), users have the capability to either sign up or log into the system seamlessly. Once logged in, they are empowered with the choice to explore a world of music through our innovative recommendation feature.
        </p>
        <p className="mb-4">
          Upon entering a song title into the system, our technology springs into action. The console swiftly identifies the genre of the user's input, offering valuable insights into the musical landscape. Simultaneously, the system taps into our cutting-edge model to generate a curated list of song recommendations tailored to the user's unique taste.
        </p>
        <p className="mb-4">
          The fruits of this musical journey, these song recommendations, elegantly populate the "Previous Song Recommendations" section, serving as a dynamic and evolving playlist.
        </p>
        <p className="mb-4">
          Adding an extra layer of engagement, users can preview their selected song files, granting them the power to play and pause their musical choices in real-time. It's the perfect way to ensure that the chosen song resonates with their current mood or preferences.
        </p>
        <h4 className="font-semibold mb-4">Team members: Hayun Jung, Devon Lai, Kevin Liu</h4>
        <h4 className="font-semibold mb-4">Awarded: Most Technically Complex End of Year Project</h4>
        <img src={music} alt="Music Classifier" className="mx-auto mb-8 inline-photo" />
      </article>
    </div>
  );
}
