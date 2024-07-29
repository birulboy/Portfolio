import { FaHtml5, FaCss3Alt, FaPencilAlt  } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript ,  SiNestjs  } from "react-icons/si";
import { RiNextjsFill ,  RiTailwindCssFill , RiTeamFill } from "react-icons/ri";
import { DiDocker, DiPostgresql, DiScrum } from "react-icons/di";
import { BiPencil } from "react-icons/bi";

export default function Skills () {
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
    return (
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
     
    )
}