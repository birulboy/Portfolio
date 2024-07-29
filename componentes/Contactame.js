import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
export default function Contactame () {
    return (
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
    )
}