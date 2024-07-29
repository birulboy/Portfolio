

import AboutMe from "@/componentes/AboutMe";
import Skills from "@/componentes/Skills";
import Projects from "@/componentes/Projects";
import Contactame from "@/componentes/Contactame";
import Image from "next/image";
import foto from '../public/foto.JPG';
import git from '../public/git.png'
import link from '../public/linkedin.jpg'
import cv from '../public/cv-icon.png'
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaPencilAlt  } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript ,  SiNestjs  } from "react-icons/si";
import { RiNextjsFill ,  RiTailwindCssFill , RiTeamFill } from "react-icons/ri";
import { DiDocker, DiPostgresql, DiScrum } from "react-icons/di";
import { BiPencil } from "react-icons/bi";

export default function Home() {
  let skills = [
    {
      name : "Html" ,
      icon: <FaHtml5 size={50} />,
    } ,
    {
      name: "Css" ,
      icon: <FaCss3Alt size={50} />
    } ,
    {
      name: "JavaScript" ,
      icon: <IoLogoJavascript size={50} />
    } ,
    {
      name: "TypeScript" ,
      icon: <SiTypescript size={50} />
    } ,
    {
      name: "Nest" ,
      icon: <SiNestjs size={50} />
    } ,
    {
      name: "Next" ,
      icon: <RiNextjsFill size={50} />
    } ,
    {
      name: "TailWind" ,
      icon: <RiTailwindCssFill size={50} />
    } ,
    {
      name: "Docker" ,
      icon: <DiDocker size={50} />
    } ,
    {
      name: "PostGres" ,
      icon: <DiPostgresql size={50} />
    } ,
    {
        name: "Scrum" ,
        icon: <DiScrum size={50} />
    } ,
    {
        name: "TeamWork" ,
        icon: <RiTeamFill size={50} />
    } ,
    {
        name: "Auto Learning" ,
        icon: <BiPencil size={50} />
    } ,
    
  ] 
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
    <main className="">
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
        <main>
        <h1 className="font-fredoka text-title text-6xl m-20">Skills</h1>
        <div className="">
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  {skill.icon}
                </div>
                <p className="text-lg font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
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
      <main>
        <h1 className="m-10 text-title font-fredoka text-6xl">Contactame</h1>
        <div className=" flex flex-col m-8">
          <div className="flex justify-center align-middle gap-4">
            <FaPhone size={30}></FaPhone>
            3009025241
          </div>
          <div className="flex justify-center align-middle gap-4">
            <SiGmail size={30}></SiGmail>
            brahian.castro@utp.edu.co        
          </div>
          <div className="flex justify-center align-middle gap-4">
            <FaDiscord size={30}></FaDiscord>
            birulboy
          </div>
        </div>
    </main>  
    </main>
  );
}
