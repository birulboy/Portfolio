import git from "../public/git.png"
import Image from "next/image";
export default function Projects () {
    let projects = [
        {
          name: "Red Social",
          img: "/red.jpg",
          description: "A social network built with next and nest, functional with login register post chats notifications and follow requests",
          git: "https://github.com/FullStack-Elite-Bootcamp-IV/social-media-front" ,
        },
        {
          name: "App News",
          img: "/news.jpg",
          description: "A page that shows News using the newsapi, allows you to search by bar, filters and change the them",
          git: "https://github.com/Gurottesque/News-App"
        },
        {
          name: "App Films",
          img: "/cinema.jpg",
          description: "A page that shows movies and actors using the TMDB API, allows you to search by bar, filters and change the theme",
          git: "https://github.com/birulboy/cinema-app"
        },
        {
          name: "Memorama",
          img: "/mem.jpg",
          description: "Memorama game developed only with html and css",
          git: "https://github.com/birulboy/Memorama-HTML-CSS"
        },
        {
          name: "Resonancia JS Vanilla",
          img: "/reso.jpg",
          description: "Vanilla JS program that simulates information from a brain MRI, analyzes the information and determines suspicious points and lines",
          git: "https://github.com/birulboy/Simulacion-de-Resonancia-JavaScript"
        },
        {
          name: "Graficadora Js Vanilla",
          img: "/grafi.jpg",
          description: "Rational Polynomial Grapher in Vanilla Js",
          git: "https://github.com/birulboy/Graficadora-JavaScript-Vanilla"
        },
      ];
    
    return ( 
        <main>
        <h1 className="text-title font-fredoka text-6xl flex justify-center p-10">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
          {projects.map((project, index) => (
            <div key={index} className="text-center bg-title rounded-lg p-4 max-w-xs mx-auto">
              <div className="flex justify-center mb-2">
                <Image
                  src={project.img}
                  alt={project.name}
                  width={200}  // Tamaño reducido
                  height={150} // Tamaño reducido
                  className="object-cover rounded"
                />
              </div>
              <h1 className="font-sansita text-black text-xl mb-1">{project.name}</h1>
              <p className="text-base font-medium overflow-auto">{project.description}</p>
              <a href={project.git} target="_blank" rel="noopener noreferrer">
        <Image
          src={git} 
          alt="GitHub"
          width={50}  
          height={50}  
        />
        </a>
            </div>
          ))}
        </div>
      </main>
    )
}