import micro from "../images/Micro.png";


export default function Micro() {
  return (
    <div className="container pl-40 pr-20">
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
        <p>Designed for a comprehensive unit review in my Microeconomics class, I sought a more engaging alternative to the usual Kahoot quiz. The aim was to infuse a touch of creativity into our learning experience.</p>
        <br className="space-y-3"></br>
        <p>With a thorough grasp of the course material, I introduced an innovative game to my classmates, providing an exciting avenue to solidify our understanding of the concepts we had recently covered.</p>
        <br className="space-y-3"></br>
        <p>The game unfolds with a series of five thought-provoking questions. An incorrect answer leads the player to a unique "basement scene" or what we can call a "warning scene." In this scenario, the consequences of the wrong choice are made evident.</p>
        <br className="space-y-3"></br>
        <p>Following each question, I would lead the class through a brief review of the topic to reinforce their understanding before proceeding to the next question.</p>
        <br className="space-y-3"></br>
        <p>To enhance the game's immersive experience, I incorporated scenes and images captured within our very own school, BCA. These visuals were meticulously taken and creatively edited to add a personalized touch to the learning experience.</p>
        <br className="space-y-3"></br>
        <p>Throughout the game, a penalty system was integrated. Every wrong answer incurred a penalty point, emphasizing the importance of accuracy in the learning process. The ultimate goal was to minimize these penalties and work toward a favorable outcome.</p>
        <br className="space-y-3"></br>
        <p>Intriguingly, the game offers a total of six distinct endings. Surprisingly, the ending numbers do not correlate with the penalty point numbers. This design adds an element of surprise and intrigue, making the learning journey even more captivating.</p>
        <br className="space-y-3"></br>
        <p>In essence, this innovative approach to the unit review leverages gamification to elevate our understanding of Microeconomics. By incorporating immersive elements and creative twists, the experience offers a fun and effective method of learning, with students vying for the coveted higher-numbered endings as a testament to their mastery of the subject matter.</p>
        <br className="space-y-3"></br>
        <img src={micro} className="inline-photo"></img>

      </article>
    </div>
  )
}