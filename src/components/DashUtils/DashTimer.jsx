import { useStopwatch } from "react-timer-hook";
import { LuTimerReset } from "react-icons/lu";
import { FaPlay, FaStop } from "react-icons/fa6";
import DashTime from "./DashTime";

const DashTimer = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  return (
    <div className="w-full h-full ">
      <div className="p-2 ">
        <DashTime />
      </div>
      <div className="mt-2">
        <p className=" text-center text-xs">Work Time Tracker</p>
        <div className="text-sm my-2 text-center">
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
        <p className="text-xs text-center">
          {isRunning ? "Running..." : "Lets track the time..."}
        </p>
        <div className="text-xs flex gap-1 items-center justify-evenly mt-4">
          <button
            className="hover:scale-125 transition-all duration-200 hover:rotate-12"
            onClick={start}
          >
            <FaPlay size={16} />
          </button>
          <button
            className="hover:scale-125 transition-all duration-200 "
            onClick={pause}
          >
            <FaStop size={16} />
          </button>
          <button
            className="hover:scale-125 transition-all duration-200 hover:-rotate-12"
            onClick={reset}
          >
            <LuTimerReset size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashTimer;
