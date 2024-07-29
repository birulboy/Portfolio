

import AboutMe from "@/componentes/AboutMe";
import Skills from "@/componentes/Skills";
import Projects from "@/componentes/Projects";
import Contactame from "@/componentes/Contactame";

export default function Home() {
  
  return (
    <main className="">
      <AboutMe />
      <Skills />
      <Projects></Projects>
      <Contactame></Contactame>
    </main>
  );
}
