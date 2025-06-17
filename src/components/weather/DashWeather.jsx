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
  const [city, setCity] = useState('Bengaluru')
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
    <div className="w-full h-auto mt-2">
      {weatherInfo ? (
        <div className="grid items-center justify-center w-full h-auto grid-cols-2 grid-rows-2 p-2">
          <div className="flex items-center justify-center col-span-1 row-span-2 gap-2">
            <p className="text-3xl font-light">{temp}&deg;</p>
            <p className="font-medium text-md">{city}</p>

          </div>
          <div className="flex items-center justify-around col-span-1 row-span-1">
          <p className="text-sm text-gray-700">{icon}</p>
          <p className="text-xs font-medium text-gray-700 capitalize">{` ${weatherInfo.weather[0].description}`}</p>
          </div>
          {/* <div className="flex col-span-1 row-span-1 gap-3 mt-2">
            <div title="Humidity" className="flex items-center gap-1 text-gray-700">
            <IoWater size={16}/><p className="text-xs">{weatherInfo.main.humidity}%</p>
            </div>
            <div title="Wind Speed" className="flex items-center gap-1 text-gray-700">
            <FaWind size={16}/><p className="text-xs">{weatherInfo.wind.speed}km/h</p>
            </div>
          </div> */}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default DashWeather;
