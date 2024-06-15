import app from "../images/app.jpg";

export default function Meet() {
  return (
    <div className="container pl-40 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">ToMeet App</h1>
      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <article className="content text-md">
        <h3 className="text-3xl">Summary:</h3>
        <br className="space-y-8"></br>
        <br className="space-y-8"></br>
        
        <ol>
          <li>
            <strong>Real-Time Availability Status:</strong> Empowering users to signal their readiness for calls, enabling seamless coordination by indicating their availability or engagement in other tasks.
          </li>
          <br className="space-y-8"></br>
          <li>
            <strong>Ping and Do Not Disturb (DND):</strong> A thoughtful feature allowing discreet check-ins with friends without disrupting their focus, ensuring that interactions align with their availability.
          </li>
          <br className="space-y-8"></br>
          <li>
            <strong>Online Status:</strong> Displaying users' active presence on the app, facilitating spontaneous connections and prompt responses for meaningful conversations.
          </li>
          <br className="space-y-8"></br>
          <li>
            <strong>Conversation Starters:</strong> Curated prompts covering various engaging topics such as culinary delights, hobbies, and daily experiences, fostering enriching discussions among friends.
          </li>
          <br className="space-y-8"></br>
          <li>
            <strong>Gentle Reminders for Communication:</strong> Thoughtfully designed prompts to encourage reconnecting with friends who may have drifted apart, nurturing and sustaining valuable relationships.
          </li>
          <br className="space-y-8"></br>
          <li>
            <strong>Notifications for Important Events:</strong> Timely reminders for significant occasions like birthdays, exams, and health check-ins, reflecting genuine care and support for friends' milestones and well-being.
          </li>
        </ol>
        <br className="space-y-8"></br>
        <p>Embarking on the creation of an app integrating these transformative features promises to bridge the gap imposed by differing time zones. This initiative seeks to elevate communication quality, fostering spontaneity, depth, and consistent engagement among friends despite geographical distances.</p>
        <br className="space-y-8"></br>
        <p>The development process calls for meticulous design and implementation to ensure an intuitive interface and seamless functionality across diverse platforms. React Native stands as an optimal choice for crafting cross-platform compatibility, accommodating both iOS and Android devices.</p>
        <br className="space-y-8"></br>
        <p>Priority must be given to user privacy and notification controls, empowering individuals to personalize their settings, thus enhancing their overall experience. Your envisioned app holds the potential to address a genuine need, enhancing communication and nurturing connections among friends, no matter where they are in the world.</p>
        <br className="space-y-8"></br>

       
        {/* <p>I initiated a project with the aim of gaining a deeper understanding of OCaml while simultaneously delving into the creation of my own SAT solver. My inspiration for this endeavor stemmed from chance encounters with a few informative slides online. It all started when a friend of mine mentioned the potential of "solving" my Math Foundations of Computer Science homework using a SAT solver, which intrigued me greatly. The notion of building my own solver seemed not only fascinating but also a rewarding way to explore the capabilities of OCaml.</p>
          <br className="space-y-8"></br>
          <p>Updates on project will be posted soon!</p> */}
          <img src={app} className="inline-photo"></img>
      </article>
    </div>
  )
}