import blackjack from "../images/BlackJack.png";


export default function BlackJack() {
  return (
    <div className="container pl-40 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">BlackJack GUI</h1>

      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <article className="content text-md">
        <h3 className="text-3xl">Idea:</h3>
        <br className="space-y-8"></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xOyyNY_SQwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br className="space-y-8"></br>
        <br className="space-y-3"></br>
        <p>The genesis of this game concept emerged from the need for a readily accessible and engaging activity to enjoy with friends in a shared physical space, especially during those moments when a deck of cards wasn't readily available.

          The gameplay begins with the distribution of cards, cleverly concealed from each player, thus adding an element of surprise and strategy to the mix.</p>
        <br className="space-y-3"></br>
        <p>Each player, embarking on their turn, faces a pivotal decision: to "hit" and draw another card or "pass" and retain their current hand. This delicate balance between risk and caution sets the stage for an exhilarating gaming experience.

          The game's objective revolves around the magic number, 21. Should a player surpass this threshold or opt to stand, the same dilemma is presented to the next player in line, adding an aura of suspense and anticipation.</p>
        <br className="space-y-3"></br>
        <p>As the game unfolds, the final player's decisions become the ultimate turning point. If they either exceed 21 points or choose to maintain their hand, the game gracefully transitions to a concluding screen, where the triumphant player is unveiled, and a running tally of victories is dutifully updated.</p>
        <br className="space-y-3"></br>

        <p>Adding to the versatility of the game, players can select from a trio of distinct modes: they can challenge AI opponents, engage in thrilling head-to-head matchups with a friend, or embrace the social dynamic of a four-player showdown. Each mode offers a unique and captivating experience that caters to different gaming preferences.</p>
        <br className="space-y-4"></br>

        <img src={blackjack} className="inline-photo"></img>
      </article>


    </div>
  )
}