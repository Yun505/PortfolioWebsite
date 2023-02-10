import butter from "../images/butter.jpg"
import luna from "../images/luna.png"
import rain from "../images/rain.jpg"
import giant from "../images/giant.jpg"
import bowling from "../images/bowling.jpg"
import harbs from "../images/harbs.jpg"
export default function Misc() {
  return (
    <div className="container pl-20 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">Miscellaneous</h1>
      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <h3 className="text-3xl text-green-400">Photography:</h3>
      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      
      <h3 className="text-3xl text-violet-700 ">Blog:</h3>
      <br className="space-y-8"></br>
      <div className="container justify-start">
        <div tabIndex={0} className="collapse collapse-arrow border border-violet-700 bg-base-100 rounded-box">
          <div className="collapse-title text-md font-medium text-violet-700">
            NYC Food Trip II 1/15/23
          </div>
          <div className="collapse-content">
            <br></br>
            <p>After apps, my friend and I went to the city again :D. We went around Soho trying different bakeries. The cronut at dominique ansel bakery was heavenly.</p>
            <br></br>
            <p>We also went to Harbs and I got to say their matcha cake is phenomenal. It's not too sweet. I also really liked their crepe cake shown below. The bakery was really pretty and if you ever go there, I'd suggest getting the royal milk tea with it.</p>
            <br className="space-y-5"></br>
            <img src={harbs}></img>
          </div>
        </div>
        <br className="space-y-2"></br>
        <div tabIndex={1} className="collapse collapse-arrow border border-violet-700 bg-base-100 rounded-box">
          <div className="collapse-title text-md font-medium text-violet-700">
            Reborn Rich Kdrama 12/10/22
          </div>
          <div className="collapse-content">
            <br></br>
            <p>Recently, I've been binging Reborn Rich. It's really good not just because of my favorite actor(Song Joon Ki) being there,
              but the plot leaves me glued to the screen. I've been recommending it to everyone that likes Kdramas and I'm really glad
              they're releasing 3 episodes a week. I heard the book they based the story off is really good and I'm looking forward to reading it
              soon. </p>
            <br></br>

            <p>This is kind of silly, but this show makes me want to learn stocks and invest more. My favorite character currently isn't who Song Joon Ki plays, but
              the grandfather. I think his actor should honestly win an award this year, the acting was phenomenal.
              His character is probably the smartest in the entire show. It's not Dojun who knows the future, although he is brilliant in his own way.
              It's really fun seeing the historic events during my parent's time like the IMF crisis in the show and I find the parallels to Samsung pretty interesting
              with calling the company Soonyang and all.
            </p>
            <br></br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6lGImvjI_Sw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <br className="space-y-2"></br>
        <div tabIndex={2} className="collapse collapse-arrow border border-violet-700 bg-base-100 rounded-box">
          <div className="collapse-title text-md font-medium text-violet-700">
            NYC Food Trip 11/30/22
          </div>
          <div className="collapse-content">
            <br></br>
            <p>My friend and I had been wanting to go to a restaurant since the Summer, but we didn't have time to because of school work and
              writing essays :(. It was also really hard to get a reservation so when we finally had time, I recall I stayed up until midnight
              (when the reservation site opens) to get a seat. We also went to nearby bakeries for some snacks and had a lot of fun.</p>
            <br></br>
            <img src={butter}></img>
            <br></br>
            <p>We got butterbeer later at the Harry Potter store. The drink was amazing and it was cool how we got the cup as a souvenir.
              We stayed pretty late in the city and the city was so much prettier during the dark. I was kind of scared when waiting for our ride, but otherwise
              I surprisingly felt relatively safe walking around.
            </p>
            <br></br>
          </div>
        </div>
        <br className="space-y-2"></br>
        <div tabIndex={3} className="collapse collapse-arrow border border-violet-700 bg-base-100 rounded-box">
          <div className="collapse-title text-md font-medium text-violet-700">
            Moon Poem 10/30/22
          </div>
          <div className="collapse-content">
            <br></br>
            <p>Recently, I started to use LunaDiary on my phone again. I used it alot during April to organize my thoughts, but
              I've picked up on it again. I think I got reminded of it when I saw how beautiful the moon was a couple days ago. I highly reccomend using the
              app, the UI is very pleasing and it's simple to use. I found
              something that I wrote on April 7th and here are some lines that I liked from it...
            </p>
            <br></br>
            <p>You say you're not the sun, the shining light everyone likes, loves and adores,</p>
            <br></br>
            <p>that you're foregotten,</p>
            <br></br>
            <p> but to me you're my favorite light, calm and wise.</p>
            <br></br>
            <p>I like you the light that won't burn me if I stand too close, the light I can stare at forever. </p>
            <br></br>
            <p> The light that keeps me company in the dark, reassuring me that I'm not alone.</p>
            <br></br>
            <p>
              The light that shines unlike the rest, able to see past my walls of complex thought.
            </p>
            <br></br>    
            <img className="w-3/6" src={luna}>
            </img>
            <br></br>
          </div>
        </div>
        <br className="space-y-2"></br>
        <div tabIndex={4} className="collapse collapse-arrow border border-violet-700 bg-base-100 rounded-box">
          <div className="collapse-title text-md font-medium text-violet-700">
            Rain = Umbrella 10/15/22
          </div>
          <div className="collapse-content">
            <br></br>
            <img src={rain}></img>
            <br></br>

            <p>Couldn't find a picture of a rainy day recently, so this one's a old picture that I liked.
              As I was walking through the rain this morning, I couldn't help but to start writing
              a comparison of the umbrella I was holding to a character relationship in a current TV show I was watching.  </p>
            <br></br>
            <p>You're like my umbrella, </p>
            <br></br>
            <p>hiding me from the pouring rain but not enough to completely cover me, just the perfect amount to let me have rain droplets
              cool me down. Without you I notice the pouring rain, the world overwhelming me immediately.
            </p>
            <br></br>
            <p>You let me overcome my troubles while shielding me and keeping me warm, letting me develop slowly not shoving me into
              the cold like the rest.
            </p>
            <br></br>
            <p>You're with me through the hard storm and light rain, doing your best to protect me despite my flaws as I don't know how to hold you.
              Despite my stupid anger when I can't understand you, struggling with opening up and running away from you.
            </p>
            <br></br>
            <p>Understanding as you are, you cover me from hardships, encouraging me that it's okay to be the way I am, letting me know that time will heal me,
              reassuring me the rain will pass- </p>

          </div>
        </div>
        <br className="space-y-2"></br>
        <div tabIndex={5} className="collapse collapse-arrow border border-violet-700 bg-base-100 rounded-box">
          <div className="collapse-title text-md font-medium text-violet-700">
            Hiking Giant Stairs 8/1/22
          </div>
          <div className="collapse-content">
            <br></br>
            <p>Today, I went hiking with my friends and man the trail was difficult. When I saw the reviews online and they said it was difficult,
              I thought it was an exaggeration, but I was sorely mistaken.
              The entire trail was basically rocks and the weather was extremely hot.
              My friend who is a skilled hiker was basically running up the trail, but my other friend and I struggled to catch up to her.
              The trail became easier as time passed and the view was worth it, but I was sweating buckets when we finally took a break.
              We had pocky and madeleines during our break. The 2 hour hike took us 4 hours as we sat on the rocks chatting about our Summer.
            </p>
            <br></br>
            <img src={giant}></img>
            <br></br>
          </div>
        </div>
        <br className="space-y-2"></br>
        <div tabIndex={6} className="collapse collapse-arrow border border-violet-700 bg-base-100 rounded-box">
          <div className="collapse-title text-md font-medium text-violet-700">
            Bowling + Top Gun Maverick 6/8/22
          </div>
          <div className="collapse-content">
            <br></br>
            <p>I've been a fan of Tom Cruise for a while and I was super psyched to watch the new movie. The action was amazing and
              the music was perfectly incorporated throughout each scene. I think my favorite song was <a className="text-purple-400 border-white inline-block rounded hover:bg-purple-300 hover:text-black" href="https://open.spotify.com/track/4h9wh7iOZ0GGn8QVp4RAOB?si=ee40eadb7ed74da3">I Ain't Worried</a>.
            </p>
            <br></br>
            <p>Afterwards we went bowling, which was really nice because I hadn't gone bowling in years. At one point I managed to knock all the pins down in one go, which surprised me. </p>
            <br></br>
            <img src={bowling}></img>
          </div>
        </div>
      </div>

    </div>
  )
}