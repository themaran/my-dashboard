import "./App.css";

//icons

import DashCalender from "./components/calender/DashCalender";
import DashCourses from "./components/courses/DashCourses";
import DashNews from "./components/news/DashNews";
import DashSocials from "./components/socials/DashSocials";
import DashWeather from "./components/weather/DashWeather";
import DashProfile from "./components/profile/DashProfile";

import DashTimer from "./components/DashUtils/DashTimer";
import GitMap from "./components/workspace/GitMap";

const App = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="grid w-full h-full grid-cols-12 grid-rows-4 gap-4 p-2 bg-gray-100">
        <div className="items-center col-span-5 row-span-2 p-2 bg-white rounded-md shadow">
          <GitMap/>
        </div>
        <div className="col-span-3 row-span-2 bg-white rounded-md shadow">
          <DashCalender/>
          <DashWeather/>
          <div >
          </div>
        </div>
        <div className="col-span-4 row-span-6 bg-white rounded-md shadow">
          <DashProfile/>
        </div>
        <div className="col-span-3 row-span-1 p-2 bg-white rounded-md shadow">
          <h1 className="text-sm">Courses</h1>
          <div className="w-full h-full">
            <DashCourses/>
          </div>
        </div>
        <div className="col-span-5 row-span-1 p-2 bg-white rounded-md shadow"><DashSocials/></div>
        <div className="col-span-5 row-span-3 ">
          <div className="grid w-full h-full grid-cols-4 grid-rows-2 gap-1">
            <div className="col-span-1 row-span-2 bg-black">1</div>
            <div className="col-span-1 row-span-2 bg-black">1</div>
            <div className="col-span-1 row-span-2 bg-black">1</div>
            <div className="col-span-1 row-span-2 bg-white rounded-md shadow">
              <DashTimer/>
            </div>
          </div>
        </div>
        <div className="col-span-3 row-span-3 overflow-visible overflow-y-scroll bg-white rounded-md shadow">
          <DashNews/>
        </div>
      </div>
    </div>
  );
};

export default App;
