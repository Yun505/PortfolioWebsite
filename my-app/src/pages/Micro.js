import micro from "../images/Micro.png";


export default function Micro() {
  return (
    <div className="container pl-20 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">AP Microeconomics Dating Simulation</h1>

      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <article className="content text-md">
        <h3 className="text-3xl">Summary:</h3>
        <br className="space-y-8"></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ot85pQ76atM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br className="space-y-8"></br>
        <p>Created for a Unit review for Microeconmics class.</p>
        <br className="space-y-3"></br>
        <p>We needed something for creativity and I didn't want to do Kahoot, so I decided to make a game.</p>
        <br className="space-y-3"></br>
        <p>After reviewing the material, I showed the class the game to review what they just learned.</p>
        <br className="space-y-3"></br>
        <p>The game consists of 5 questions which if the person answers wrong, takes them to the basement scene[warning scene].</p>
        <br className="space-y-3"></br>
        <p>After each question, I would review it briefly before moving onto the next question.</p>
        <br className="space-y-3"></br>
        <p>The scenes or pictures shown throughout the game are of BCA that I took and edited.</p>
        <br className="space-y-3"></br>
        <p>A penalty point is given everytime they get a question wrong.</p>
        <br className="space-y-3"></br>
        <p>The lower the penalty points, the better the ending.</p>
        <br className="space-y-3"></br>
        <p>There are a total of 6 endings with the higher the number ending, the better the ending.</p>
        <br className="space-y-3"></br>
        <p>The ending numbers do not correspond to the penalty point numbers.</p>
        <br className="space-y-3"></br>
        <h4 className=" font-semibold">
          Goal: to get as many correct answers to win the heart of the textbook character like any other dating simulation</h4>
        <br className="space-y-4"></br>
        <h4 className=" font-semibold">Wrong Answer: Takes player to fitness center, the "dungeon" as BCA students call it + penalty point.</h4>

        <img src={micro} className="inline-photo"></img>

      </article>
    </div>
  )
}