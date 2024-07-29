import Image from "next/image";
import foto from '../public/foto.JPG';
import git from '../public/git.png'
import link from '../public/linkedin.jpg'
import cv from '../public/cv-icon.png'

export default function AboutMe() {
    return (
        <main >
            <div className="flex justify-center align-middle">
            <Image  className=" overflow-hidden rounded-full  "
                     src={foto} 
                     alt="Foto"
                     width={500}   
                     height={300}   
            />
            </div>
            <div className=" flex flex-col items-center justify-center p-5">
            <h1 className="font-fredoka text-title text-7xl">
                I´m Birulboy
            </h1>
            <div className="font-lora text-text mt-2">
                Hi, I´m a full stack developer that loves programming
            </div>
            </div>
            <div className="flex justify-center items-center space-x-4">
      <a href="https://github.com/birulboy" target="_blank" rel="noopener noreferrer">
        <Image
          src={git} 
          alt="GitHub"
          width={50}  
          height={50}  
        />
      </a>
      <a href="https://www.linkedin.com/in/brahian-castro-devia-13958631b/" target="_blank" rel="noopener noreferrer">
        <Image
          src={link} 
          alt="LinkedIn"
          width={50}   
          height={50}  
        />
      </a>
      <a href="/Brahian_Castro_CV.pdf" download="cv-brahian.pdf">
        <Image
          src={cv} 
          alt="CV"
          width={50}  
          height={50}  
        />
      </a>
    </div>
    <div className="flex flex-col p-20 space-y-4">
  <h1 className="text-title text-5xl font-fredoka">About Me</h1>
  <div className="text-text font-lora text-2xl space-y-2">
    <div>
      <span>Hi, I´m </span>
      <span className="font-bold">Brahian Castro</span>
    </div>
    <div>
      <span>A web developer from </span>
      <span className="font-bold">Cartago, Colombia.</span>
    </div>
    <div>
      I really like developing my skills and getting better every day.
    </div>
    </div>
    </div>
    
        </main>
    );
}
