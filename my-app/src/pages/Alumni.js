import capstone from "../images/capstone.jpg";

export default function Alumni() {
  return (
    <div className="container pl-20 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">BCA Alumni Portal</h1>
      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <article className="content text-md">
        <h3 className="text-3xl">Prototype Demo:</h3>
        <br className="space-y-3"></br>
        <p>Basic Outline for Client feedback (Dec '22) </p>
        <br className="space-y-3"></br>
        <p>Current website has been refactored in UI for client needs (Updated video will be posted soon!) </p>
        <br className="space-y-8"></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ijfOmpE0Msg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br className="space-y-8"></br>

        <h3 className="text-3xl">Proposal:</h3>
        <br className="space-y-3"></br>
        <p>Currently, there exists no dedicated platform aimed at fostering connections among our esteemed alumni. Former alumni gatherings have relied heavily on the management of a substantial, manually curated spreadsheet stored on Google Sheets. This approach, while commendable in its intentions, demands a substantial investment of time and effort.
        </p>
        <br className="space-y-3"></br>
        <p>In an effort to streamline and enhance the alumni experience, we propose the development of a dedicated webpage. This platform will serve as an all-encompassing hub for our alumni community, enabling graduates to access a multitude of valuable resources. Beyond the practicality of email listings, this webpage will grant alumni the opportunity to remain informed about upcoming alumni events, contribute to BCA's continued growth through financial donations, and maintain a strong and enduring connection with their beloved alma mater.</p>
        <br className="space-y-3"></br>
        <p>Moreover, the proposed webpage will offer a user-friendly feature that allows alumni to register and create their profiles, thereby requesting inclusion within the broader database of alumni. Subsequently, these requests will be subject to meticulous review and validation by our institution, ensuring the quality and integrity of our alumni network.</p>
        <br className="space-y-3"></br>
        <p>This initiative promises to significantly alleviate the manual workload on the part of BCA's administration while establishing a centralized, comprehensive platform for all alumni affairs. This includes, but is not limited to, the coordination of Alumni Day festivities, engaging speakers for insightful talks, and orchestrating Career Day events that provide invaluable networking opportunities for both alumni and current students.
        </p>
        <br className="space-y-3"></br>
        <p>Furthermore, the webpage will facilitate direct communication among alumni, enabling them to exchange messages and insights. Additionally, it will serve as a bridge between our accomplished alumni and our aspiring students, with the latter being able to reach out to the former for potential internship opportunities. This multifaceted platform will not only strengthen the bonds among alumni but also enrich the overall BCA experience for all parties involved.
        </p>

        <br className="space-y-4"></br>
        <h4 className=" font-semibold">Team Members: Kevin Liu, Hayun Jung, Remington Kim</h4>
        <img src={capstone} className="inline-photo"></img>
        <br className="space-y-8"></br>
        <p></p>

      </article>
    </div>
  )
}