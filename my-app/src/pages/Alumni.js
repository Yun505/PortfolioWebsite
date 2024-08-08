import React from "react";
import capstone from "../images/capstone.jpg";

export default function Alumni() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl text-sky-500 mb-8">BCA Alumni Portal</h1>

      <article className="max-w-3xl">
        <h3 className="text-3xl mb-4">Prototype Demo:</h3>
        <p className="mb-4">Basic Outline for Client feedback (Dec '22)</p>
        <p className="mb-8">
          Current website has been refactored in UI for client needs (Updated video will be posted soon!)
        </p>
        <iframe
          className="mx-auto mb-8"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ijfOmpE0Msg"
          title="YouTube video player"
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <h3 className="text-3xl mb-4">Proposal:</h3>
        <p className="mb-4">
          Currently, there exists no dedicated platform aimed at fostering connections among our esteemed alumni. Former alumni gatherings have relied heavily on the management of a substantial, manually curated spreadsheet stored on Google Sheets. This approach, while commendable in its intentions, demands a substantial investment of time and effort.
        </p>
        <p className="mb-4">
          In an effort to streamline and enhance the alumni experience, we propose the development of a dedicated webpage. This platform will serve as an all-encompassing hub for our alumni community, enabling graduates to access a multitude of valuable resources. Beyond the practicality of email listings, this webpage will grant alumni the opportunity to remain informed about upcoming alumni events, contribute to BCA's continued growth through financial donations, and maintain a strong and enduring connection with their beloved alma mater.
        </p>
        <p className="mb-4">
          Moreover, the proposed webpage will offer a user-friendly feature that allows alumni to register and create their profiles, thereby requesting inclusion within the broader database of alumni. Subsequently, these requests will be subject to meticulous review and validation by our institution, ensuring the quality and integrity of our alumni network.
        </p>
        <p className="mb-4">
          This initiative promises to significantly alleviate the manual workload on the part of BCA's administration while establishing a centralized, comprehensive platform for all alumni affairs. This includes, but is not limited to, the coordination of Alumni Day festivities, engaging speakers for insightful talks, and orchestrating Career Day events that provide invaluable networking opportunities for both alumni and current students.
        </p>
        <p className="mb-4">
          Furthermore, the webpage will facilitate direct communication among alumni, enabling them to exchange messages and insights. Additionally, it will serve as a bridge between our accomplished alumni and our aspiring students, with the latter being able to reach out to the former for potential internship opportunities. This multifaceted platform will not only strengthen the bonds among alumni but also enrich the overall BCA experience for all parties involved.
        </p>

        <h4 className="font-semibold mb-4">Team Members: Kevin Liu, Hayun Jung, Remington Kim</h4>
        <img src={capstone} alt="Capstone" className="mx-auto mb-8 inline-photo" />
      </article>
    </div>
  );
}
