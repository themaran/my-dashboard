import "./App.css";

//icons

import DashCalender from "./components/calender/DashCalender";
import DashCourses from "./components/courses/DashCourses";
import DashNews from "./components/news/DashNews";
import DashSocials from "./components/socials/DashSocials";
import DashWeather from "./components/weather/DashWeather";
import DashProfile from "./components/profile/DashProfile";
import DashWorkSpace from "./components/workspace/DashWorkSpace";
import DashTimer from "./components/DashUtils/DashTimer";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-full h-full bg-gray-100  grid grid-cols-12 grid-rows-4 gap-4 p-2">
        <div className="bg-white rounded-md shadow row-span-2 col-span-5">
          <DashWorkSpace/>
        </div>
        <div className="bg-white rounded-md shadow row-span-2 col-span-3">
          <DashCalender/>
          <DashWeather/>
          <div >
          </div>
        </div>
        <div className="bg-white rounded-md shadow row-span-6 col-span-4">
          <DashProfile/>
        </div>
        <div className="bg-white rounded-md shadow row-span-1 col-span-3 p-2">
          <h1 className="text-sm">Courses</h1>
          <div className="w-full h-full">
            <DashCourses/>
          </div>
        </div>
        <div className="bg-white rounded-md shadow row-span-1 col-span-5 p-2"><DashSocials/></div>
        <div className=" row-span-3 col-span-5">
          <div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-1">
            <div className="col-span-1 row-span-2 bg-black">1</div>
            <div className="col-span-1 row-span-2 bg-black">1</div>
            <div className="col-span-1 row-span-2 bg-black">1</div>
            <div className="col-span-1 row-span-2 rounded-md shadow bg-white">
              <DashTimer/>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow row-span-3 col-span-3 overflow-y-scroll overflow-visible">
          <DashNews/>
        </div>
      </div>
    </div>
  );
};

export default App;
