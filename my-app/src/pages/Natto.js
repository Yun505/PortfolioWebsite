import sticky from "../images/Sticky.png";

export default function Natto() {
  return (
    <div className="container pl-20 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">Natto Obstacle Course</h1>
      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <article className="content text-md">
        <h3 className="text-3xl">Idea:</h3>
        <br className="space-y-8"></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JDNeyeTWXgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br className="space-y-8"></br>
        <p>One day, I was eating Natto and struggling to get some of the sticky strings out of my hair when I came up with this idea.</p>
        <br className="space-y-3"></br>
        <p>I thought the strings were obstacles that I struggled with to get to eating the delicious food, the goal.</p>
        <br className="space-y-3"></br>
        <p>The layout is that of the bowl where the player is a rice grain trying to navigate through the bowl without hitting the obstacles. </p>
        <br className="space-y-3"></br>
        <p>There are 3 obstacles, my favorite being the sticky Natto.</p>
        <br className="space-y-3"></br>
        <p>Each obstacle slows down the player when hit but by different speeds.</p>
        <br className="space-y-3"></br>
        <p>The player becomes red when they hit an obstacle. </p>
        <br className="space-y-3"></br>
        <p>There are two levels in this game and the second level has more obstacles + is faster.</p>
        <br className="space-y-3"></br>
        <h4 className=" font-semibold">Three obstacles: Sticky Natto, Natto, Sticky Strings</h4>

      {/* TODO: change to natto image thing */}
        <img src={sticky} className="inline-photo"></img>


      </article>
    </div>
  )
}