import blackjack from "../images/BlackJack.png";


export default function BlackJack() {
  return (
    <div className="container pl-20 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">BlackJack GUI</h1>

      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <article className="content text-md">
        <h3 className="text-3xl">Summary:</h3>
        <br className="space-y-8"></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xOyyNY_SQwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br className="space-y-8"></br>
        <br className="space-y-3"></br>
        <p>The game was designed with the idea in mind that players could play in the same room on one computer without knowing the other player’s cards.</p>
        <br className="space-y-3"></br>
        <p>Cards are randomly imported into the hands of the players. </p>
        <br className="space-y-3"></br>
        <p>The player has the option to hit or pass each turn. </p>
        <br className="space-y-3"></br>
        <p>If a player goes over 21 or chooses to keep their hand, the next player now has the same choice. </p>
        <br className="space-y-3"></br>
        <p> If the last player goes over 21 or chooses to keep their hand, the game will go to a screen, which will show who wins and add a counter for who won.</p>
        <br className="space-y-3"></br>
        <h4 className=" font-semibold">
          Player can choose 3 modes: AI, 2 player, 4 player to play the game.</h4>
        <br className="space-y-4"></br>

        <img src={blackjack} className="inline-photo"></img>
      </article>


    </div>
  )
}