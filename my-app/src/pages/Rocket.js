import rocket from "../images/Rocket.png";

export default function Rocket() {
  return (
    <div className="container pl-20 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">Rocket</h1>

      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <article className="content text-md">
        <h3 className="text-3xl">Idea:</h3>
        <br className="space-y-8"></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3Bsgfa6kNRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br className="space-y-8"></br>
        <p>Inspiration struck as I watched the adventures of Dr. Who, venturing through time and space. With a sense of wonder and a dash of creativity, I set out to craft a space-style game that would transport players into an interstellar journey of their own.</p>
        <br className="space-y-3"></br>
        <p>The objective of the game is clear: guide your rocket through an intricate terrain, with the ultimate goal being the gleaming green launchpad. However, the path is fraught with peril, and any collision with an obstacle or an unfortunate tumble to the abyss will set you back to the very beginning, right at the launchpad.</p>
        <br className="space-y-3"></br>
        <p>To navigate this cosmic challenge, players have three controls at their disposal. Pressing the spacebar propels the rocket upwards, enabling you to soar through the cosmos. The 'A' key sends the rocket veering left, while 'D' propels it to the right, allowing for swift maneuvering through the celestial labyrinth.</p>
        <br className="space-y-3"></br>
        <p>This space odyssey is divided into two thrilling levels, each packed with a distinctive set of obstacles and challenges. The immersive experience mirrors the complexities of space travel, urging players to refine their skills as they progress.</p>
        <br className="space-y-3"></br>
        <h4>
        Embark on this stellar adventure and experience the thrill of conquering space, one obstacle at a time. The cosmos beckon, and it's up to you to navigate the treacherous terrain and guide your rocket to the ever-elusive green launchpad. Are you ready to defy gravity and master the mysteries of the universe in this exhilarating space escapade?
        </h4>
        <br className="space-y-4"></br>

        <img src={rocket} className="inline-photo"></img>
      </article>
    </div>
  )
}