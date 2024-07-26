import { SiUdemy, SiCoursera, SiFreecodecamp, SiEdx, SiSkillshare, SiPluralsight } from "react-icons/si";
import { IoIosAdd } from "react-icons/io";
function DashCourses() {
  return (
    <div className="grid grid-cols-5 justify-center items-center mt-2">
        <a className="shadow-md rounded-md p-2 place-self-center transition hover:scale-105 ease-in-out cursor-pointer"><SiUdemy size={25}/></a>
        <a className="shadow-md rounded-md p-2 place-self-center transition hover:scale-105 ease-in-out cursor-pointer"><SiCoursera size={25}/></a>
        <a className="shadow-md rounded-md p-2 place-self-center transition hover:scale-105 ease-in-out cursor-pointer"><SiFreecodecamp size={25}/></a>
        <a className="shadow-md rounded-md p-2 place-self-center transition hover:scale-105 ease-in-out cursor-pointer"><SiEdx size={25}/></a>
        <a className="shadow-md rounded-md p-2 place-self-center transition hover:scale-105 ease-in-out cursor-pointer"><SiSkillshare size={25}/></a>
        <a className="shadow-md rounded-md p-2 place-self-center transition hover:scale-105 ease-in-out cursor-pointer"><SiPluralsight size={25}/></a>
        <a className="shadow-md rounded-md p-2 place-self-center transition hover:scale-105 ease-in-out cursor-pointer"><IoIosAdd size={25}/></a>
    </div>
  )
}

export default DashCourses
