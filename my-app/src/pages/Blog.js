import blog from "../images/Blog.png";

export default function Blog() {
  return (
    <div className="container pl-20 pr-20">
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-5xl text-sky-500">Personal Blog</h1>

      <br className="space-y-8"></br>
      <br className="space-y-8"></br>
      <article className="content text-md">
        <h3 className="text-3xl">Summary:</h3>
        <br className="space-y-8"></br>
       <p>Recently, I undertook the task of migrating my blog from its previous location to a separate website, primarily driven by the desire to enhance my web development skills. This move offered me the perfect opportunity to reorganize my stories in a more structured manner, covering a wide range of topics. From my culinary escapades, critiquing the restaurants I visit, to my creative pursuits like writing poems and documenting personal life experiences, this new website encapsulates it all.</p>
       <br className="space-y-8"></br>
       <p>While I'm still in the process of updating and transferring my stories, a few of my cherished pieces are already available for readers to explore. One of the highlights of this project has been the website's adaptability, as it resizes seamlessly for mobile devices, ensuring a mobile-friendly user experience.</p>
        <br className="space-y-8"></br>
        <p>Furthermore, I've been actively working on incorporating sliders to better showcase my photography, adding a visually engaging element to the website. In the process, I've had the pleasure of working with new libraries like Masonry and Font Awesome, which have significantly contributed to enhancing the aesthetics of the website while maintaining clean and efficient code.</p>
        <br className="space-y-8"></br>
        <p>This journey has not only allowed me to organize my content more effectively but also presented me with the opportunity to expand my web development skills and explore new tools and techniques. It's an ongoing project that reflects my passion for both storytelling and the ever-evolving world of web development.</p>
        <br className="space-y-2"></br>

        <img src={blog} className="inline-photo"></img>

        
      </article>
    </div>
  )
}