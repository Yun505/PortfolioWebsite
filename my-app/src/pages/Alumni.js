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
        <p>Basic Outline for Client feedback (Dec '22)</p>
        <br className="space-y-3"></br>
        <p>Currently refactoring UI + editing project to suit client's needs. </p>
        <br className="space-y-8"></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ijfOmpE0Msg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br className="space-y-8"></br>

        <h3 className="text-3xl">Proposal:</h3>
        <br className="space-y-3"></br>
        <p>There is currently no application solely for the purpose of connecting previous alumni.
        </p>
        <br className="space-y-3"></br>
        <p>Previous gatherings of alumni relied on a sizable, manually curated spreadsheet emails on Google Spreadsheet.</p>
        <br className="space-y-3"></br>
        <p> This process required a significant amount of time and effort.</p>
        <br className="space-y-3"></br>
        <p>This webpage would allow all alumni, regardless of if they are on the mass email list, to see alumni events, donate money to BCA for further funding, and stay connected with their alma mater.
        </p>
        <br className="space-y-3"></br>
        <p> Alumni would also be able to sign in with their emails to send a request to be added to the database of alumni, which would later be reviewed and checked by the client. </p>
        <br className="space-y-3"></br>
        <p>The webpage would also reduce the amount of manual labor required on the BCA’s part while creating a centralized, all-in-one destination for all alumni affairs (i.e., Alumni day, speakers, and Career Day). </p>
        <br className="space-y-3"></br>
        <p>Alumni would be able to message one another and current students could reach out for internships.</p>
        <br className="space-y-4"></br>
        <h4 className=" font-semibold">Team Members: Kevin Liu, Hayun Jung, Remington Kim</h4>
        <img src={capstone} className="inline-photo"></img>
        <br className="space-y-8"></br>
        <p></p>

      </article>
    </div>
  )
}