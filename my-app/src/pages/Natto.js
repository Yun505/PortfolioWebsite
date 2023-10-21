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
        <p>It was just another day, and there I was, attempting to savor a bowl of Natto. As I twirled my chopsticks through the gooey strands, one fateful moment found those sticky strings making an audacious escape, entangling themselves in my hair. In that quirky instant, inspiration struck like a lightning bolt.</p>
        <br className="space-y-3"></br>
        <p>
          I couldn't help but see these tiny, stubborn strands as obstacles in my path, much like the challenges we face in life. The goal, of course, was to enjoy that scrumptious bite of Natto at the end of the struggle.</p>
        <br className="space-y-3"></br>
        <p>This newfound vision led to the birth of an intriguing idea. I envisioned a digital realm where the player takes on the role of a humble grain of rice, embarking on a perilous journey within the confines of a bowl – their mission, navigating this confined culinary landscape while dodging the impending obstacles.</p>
        <br className="space-y-3"></br>
        <p>In this rice-grain adventure, there are three primary obstacles, each presenting a unique set of challenges. My personal favorite among them is the notorious sticky Natto. This adversary, once encountered, exerts a captivating pull on our rice hero, slowing them down and momentarily turning them a distinct shade of red.</p>
        <br className="space-y-3"></br>
        <p>When the player collides with any of these obstacles, it's as if they've encountered a life hurdle, resulting in a momentary setback. The encounter leaves our resilient rice grain feeling a bit red in the face, both metaphorically and in the game's charming aesthetics.</p>
        <br className="space-y-3"></br>
        <p>The game's journey unfolds across two distinct levels. The second level, in all its excitement, ramps up the stakes. Here, the player encounters an even denser array of obstacles and must navigate the treacherous terrain at a much faster pace. The game's progression mirrors the complexities and quick pace of life's challenges, urging players to test their mettle. </p>
        <br className="space-y-3"></br>
        <p>In this deceptively simple, yet delightfully engaging concept, the Natto-laden adventure mirrors the unpredictable twists and turns of life itself, offering players a flavorful experience like no other.</p>
        <br className="space-y-3"></br>
        <h4 className=" font-semibold">Three obstacles: Sticky Natto, Natto, Sticky Strings</h4>

        {/* TODO: change to natto image thing */}
        <img src={sticky} className="inline-photo"></img>


      </article>
    </div>
  )
}