
import { useTime } from "react-timer-hook";

const DashTime = () => {
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });
  return (
    <div className="flex items-center justify-center mt-1 gap-1 text-xs text-gray-700">
      <span className="text-sm text-black">{hours}</span>:<span className="text-sm text-black">{minutes}</span>:<span className="text-sm text-black">{seconds}</span>
      <span>{ampm}</span>
    </div>
  );
};

export default DashTime;
