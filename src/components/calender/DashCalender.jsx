import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DashCalender = () => {
  const [date, setDate] = useState(new Date());

  const dayInMonth = () => {
    const daysArray = [];
    const fDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    for (let i = 0; i < fDay.getDay(); i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= lDay.getDate(); i++) {
      daysArray.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    return daysArray;
  };

  const isSameDay = (d1, d2) =>{
    return d1.getDate()===d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
  };

  const handleChangeMonth = (e) => {
    const setMonth = parseInt(e.target.value, 10);
    setDate(new Date(date.getFullYear(), setMonth,1));
  };

  const handleChangeYear = (e) => {
    const setYear = parseInt(e.target.value, 10);
    setDate(new Date(setYear, date.getMonth(),1));
  };


  return (
    <div className="w-full h-auto p-1">
      <div className="flex items-center justify-between p-1">
        <button onClick={()=>{
          setDate(new Date(date.getFullYear(), date.getMonth()-1,1))
        }}>
          <GoArrowLeft className="hover:scale-150 transition-all duration-200"/>
        </button>
        <select value={date.getMonth()} className="text-xs outline-none" onChange={handleChangeMonth}>
          {months.map((months, index) => (
            <option key={index} value={index}>
              {months}
            </option>
          ))}
        </select>
        <select value={date.getFullYear()} className="text-xs outline-none" onChange={handleChangeYear}>
          {Array.from({ length: 10 }, (_, i) => date.getFullYear() - 5 + i).map(
            (year) => (
              <option key={year} value={year}>
                {year}
              </option>
            )
          )}
        </select>
        <button onClick={()=>{
          setDate(new Date(date.getFullYear(), date.getMonth()+1,1))
        }} className="hover:scale-150 transition-all duration-200">
          <GoArrowRight />
        </button>
      </div>
      <div className="grid grid-cols-7 text-center text-orange-600 text-xs p-1 font-medium mt-2">
        {dayOfWeek.map((days) => (
          <div key={days}>{days}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 space-y-2 space-x-0 text-xs">
        {dayInMonth().map((day, index) => (
          <div
            key={index}
            className={day ?  (isSameDay(day, new Date()))?"text-center place-self-center text-orange-600 font-medium rounded animate-bounce" : "text-center text-gray-400 ": ""}
          >
            {day ? day.getDate() : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashCalender;
