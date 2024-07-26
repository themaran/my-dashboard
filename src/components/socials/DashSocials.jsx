import { FaWhatsapp, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaXTwitter, FaGithub  } from "react-icons/fa6";

const DashSocials = () => {
  return (
    <div className=' flex flex-col'>
                      <h1 className="text-xs">Social Feeds</h1>
              <div className="flex justify-start items-center h-full gap-4 ml-2">
                <a className="cursor-pointer shadow-md p-2 rounded-md transition hover:scale-105 ease-in-out "><FaWhatsapp size={25}/></a>
                <a className="cursor-pointer shadow-md p-2 rounded-md transition hover:scale-105 ease-in-out"><FaInstagram size={25}/></a>
                <a className="cursor-pointer shadow-md p-2 rounded-md transition hover:scale-105 ease-in-out"><FaLinkedinIn  size={25}/></a>
                <a className="cursor-pointer shadow-md p-2 rounded-md transition hover:scale-105 ease-in-out"><FaXTwitter   size={25}/></a>
                <a className="cursor-pointer shadow-md p-2 rounded-md transition hover:scale-105 ease-in-out"><FaGithub   size={25}/></a>
                <a className="cursor-pointer shadow-md p-2 rounded-md transition hover:scale-105 ease-in-out"><IoIosAdd size={25}/></a>
              </div>
    </div>
  )
}

export default DashSocials