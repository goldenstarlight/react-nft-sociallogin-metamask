import React from "react";
import SocialIcons from "../../components/SocialIcons";

const ComingYellow = () => {
  return (
    <div className="pt-40 min-h-[80vh] h-full coming__yellow-bg text-center px-20">
      <div className="flex flex-col justify-center items-center w-full h-full min-h-[80vh]">
        <h2 className="font-poppins font-semibold text-16 sm:text-24 md:text-30 uppercase leading-25 sm:leading-40  text-white tracking-wider">
          Coming
        </h2>
        <h1 className="uppercase text-35 sm:text-40 md:text-65 tracking-widest font-poppins font-semibold md:leading-63 text-white">
          <span>Very soon</span>{" "}
        </h1>
        <h3 className="font-Rajdhani pt-10 pb-15 md:pt-20 md:pb-30 font-semibold uppercase text-white text-14 sm:text-18 tracking-widest">
          Stay tuned something exciting is coming up.
        </h3>
        <div className="w-full mlg:w-402  flex tex-center pt-10">
          <input
            type="email"
            className="w-full h-35 bg-white py-1 px-2 rounded border-[1px] border-texasRose text-12 sm:text-14 md:text-18 font-Rajdhani font-semibold text-cloud text-center mr-8"
            placeholder="grandora@email.com"
          />
          <button className="text-10 sm:text-14 md:text-18 h-35 w-50 sm:w-60 md:w-70 lg:w-112 bg-white py-1 px-2 rounded text-texasRose font-semibold tracking-wide">send</button>
        </div>
        <div className="pt-25 sm:pt-30 md:pt-[50px]">
          <SocialIcons type={"text-white"} />
        </div>
      </div>
    </div>
  );
};

export default ComingYellow;
