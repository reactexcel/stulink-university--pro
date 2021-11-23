import React from "react";
import { stulinkService } from "../Common/Images";

const WelcomeStulinks = () => {
  return (
    <div>
      <div className="flex flex-row justify-between p-20">
        <div className="max-w-lg">
          <p className="text-blue-550 font-medium">WELCOME TO STULINK</p>
          <p className="text-black text-2xl font-extrabold mt-7">    
            The Smarter Way to Find{" "}
            <span className="text-blue-550 text-2xl font-extrabold">
              Dream College
            </span>
          </p>
          <div className="border-l-4 pl-4 border-blue-550 mt-11">
            <p className="text-gray-500 text-lg  font-normal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo dolor Aenean massa Cum sociis .
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={stulinkService} alt="" className=" w-96 h-80" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeStulinks;
