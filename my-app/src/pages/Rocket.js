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
        <h3 className="text-3xl">Summary:</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3Bsgfa6kNRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br className="space-y-8"></br>
        <p>I was inspired by watching Dr. Who's trips to space and wanted to make a space-style-game.</p>
        <br className="space-y-3"></br>
        <p>The player must navigate the rocket through the terrain to the green launchpad.</p>
        <br className="space-y-3"></br>
        <p>If the player hits an obstacle or falls down, they will start over from the launchpad.</p>
        <br className="space-y-3"></br>
        <p>The player would press space to move the rocket up, A to move left, and D to move right.</p>
        <br className="space-y-3"></br>
        <h4 className=" font-semibold">
          Two Level Obstacle Game
        </h4>
        <br className="space-y-4"></br>

        <img src={rocket} className="inline-photo"></img>
      </article>
    </div>
  )
}