import { useEffect, useState } from "react";
import { IoSunny, IoSnow, IoWater } from "react-icons/io5";
import { BsFillCloudSunFill } from "react-icons/bs";
import { IoIosCloud, IoMdRainy   } from "react-icons/io";
import { BsFillCloudsFill } from "react-icons/bs";
import { FaCloudSunRain } from "react-icons/fa6";
import { BsFillCloudLightningRainFill } from "react-icons/bs";
import { TbMist } from "react-icons/tb";
import { FaWind } from "react-icons/fa6";

const weatherIcons = {
  "01d": <IoSunny />,
  "01n": <IoSunny />,
  "02d": <BsFillCloudSunFill />,
  "02n": <BsFillCloudSunFill />,
  "03d": <IoIosCloud />,
  "03n": <IoIosCloud />,
  "04d": <BsFillCloudsFill />,
  "04n": <BsFillCloudsFill />,
  "09d":<IoMdRainy />,
  "09n":<IoMdRainy />,
  "10d":<FaCloudSunRain />,
  "10n":<FaCloudSunRain />,
  "11d":<BsFillCloudLightningRainFill />,
  "11n":<BsFillCloudLightningRainFill />,
  "13d":<IoSnow />,
  "13n":<IoSnow />,
  "50d":<TbMist />,
  "50n":<TbMist />
};

const DashWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [icon, setIcon] = useState(weatherIcons["01d"]);
  const [city, setCity] = useState('Trichy')
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bee2aeecf8d8dcaff343acb0ada25d57`
    )
      .then((response) => response.json())
      .then((data) => setWeatherInfo(data));
  }, []);

  useEffect(() => {
    if (weatherInfo && weatherInfo.weather && weatherInfo.weather[0]) {
      const getWeatherIcon = weatherInfo.weather[0].icon;
      setIcon(weatherIcons[getWeatherIcon]);
      const temperature = weatherInfo.main.temp;
      const celcius = temperature - 273.15;
      setTemp(Math.round(celcius))
    }
  }, [weatherInfo]);

  return (
    <div className="w-full h-auto  mt-2">
      {weatherInfo ? (
        <div className="w-full h-auto grid grid-cols-2 grid-rows-2 items-center justify-center p-2">
          <div className="col-span-1 row-span-2 flex flex-col items-center">
            <p className="text-3xl">{temp}&deg;</p>
            <p className="text-xs">{city}</p>

          </div>
          <div className="col-span-1 row-span-1 flex items-center justify-around">
          <p className="text-xl text-gray-700">{icon}</p>
          <p className="text-xs font-medium text-gray-700  capitalize">{` ${weatherInfo.weather[0].description}`}</p>
          </div>
          <div className="col-span-1  row-span-1 flex space-x-2 mt-2">
            <div className="flex items-center gap-1 text-gray-700">
            <IoWater size={16}/><p className="text-xs">{weatherInfo.main.humidity}%</p>
            </div>
            <div className="flex items-center gap-1 text-gray-700">
            <FaWind size={16}/><p className="text-xs">{weatherInfo.wind.speed}km/h</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default DashWeather;
