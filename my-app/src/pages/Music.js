import music from "../images/Music.png";

export default function Music() {
  return (
    <div className="container pl-40 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">Music Classifier</h1>

      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <article className="content text-md">
        <h3 className="text-3xl">Summary:</h3>
        <br className="space-y-8"></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GSpHw8jqjdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br className="space-y-8"></br>
        <p>
          In our user-friendly graphical user interface (GUI), users have the capability to either sign up or log into the system seamlessly. Once logged in, they are empowered with the choice to explore a world of music through our innovative recommendation feature.</p>
        <br className="space-y-3"></br>
        <p>Upon entering a song title into the system, our technology springs into action. The console swiftly identifies the genre of the user's input, offering valuable insights into the musical landscape. Simultaneously, the system taps into our cutting-edge model to generate a curated list of song recommendations tailored to the user's unique taste. </p>
        <br className="space-y-3"></br>
        <p>The fruits of this musical journey, these song recommendations, elegantly populate the "Previous Song Recommendations" section, serving as a dynamic and evolving playlist.</p>
        <br className="space-y-3"></br>
        <p>Adding an extra layer of engagement, users can preview their selected song files, granting them the power to play and pause their musical choices in real-time. It's the perfect way to ensure that the chosen song resonates with their current mood or preferences.</p>
        <br className="space-y-3"></br>
        <h4 className="font-semibold">Team members: Hayun Jung, Devon Lai, Kevin Liu</h4>
        <br className="space-y-3"></br>
        <h4 className="font-semibold">Awarded: Most Technically Complex End of Year Project</h4>
        <br className="space-y-2"></br>

        <img src={music} className="inline-photo"></img>
      </article>
    </div>
  )
}