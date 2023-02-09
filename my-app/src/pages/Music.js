import music from "../images/Music.png";

export default function Music() {
  return (
    <div className="container pl-20 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">Music Classifier</h1>

      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <article className="content text-md">
        <h3 className="text-3xl">Summary:</h3>
        <br className="space-y-8"></br>
        <p>The user is able to sign up/into the GUI and can choose to get song recommendations by inputting a song into the system. </p>
        <br className="space-y-3"></br>
        <p>The system will tell the user what genre it is in the console and give song recommendations through the model. </p>
        <br className="space-y-3"></br>
        <p>The song recommendations will show up in the Previous Song Recommendations section.</p>
        <br className="space-y-3"></br>
        <p>The user can also play or stop a file they chose to check if it's the right song.

        </p>
        <br className="space-y-3"></br>
        <h4 className="font-semibold">Team members: Hayun Jung, Devon Lai, Kevin Liu</h4>
        <br className="space-y-3"></br>
        <h4 className="font-semibold">Awarded: Most Technically Complex End of Year Project</h4>
        <br className="space-y-4"></br>

        <img src={music} className="inline-photo"></img>
      </article>
    </div>
  )
}