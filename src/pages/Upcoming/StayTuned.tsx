import React from "react";
import Tune from "../../assets/images/upcoming/tune.svg";
import SocialIcons from "../../components/SocialIcons";

const StayTuned = () => {
  return (
    <div className="pt-40 min-h-[80vh] h-full text-center px-20">
      <div className="flex flex-col justify-center items-center w-full h-full min-h-[80vh]">
        <img
          src={Tune}
          alt="icon"
          className="sm:h-98 h-70 mb-20 sm:mb-30 md:mb-40"
        />
        <h1 className="uppercase text-28 sm:text-40 tracking-widest md:text-75 font-poppins font-semibold md:leading-63 text-texasRose">
          stay <span className="text-davygrey">Tuned</span>{" "}
        </h1>
        <h3 className="font-Rajdhani pt-10 pb-15 md:pt-20 md:pb-30 font-semibold uppercase text-davygrey text-14 sm:text-20 md:text-28 tracking-widest sm:tracking-[0.2em] md:tracking-[0.35em]">
          something exciting is coming up.
        </h3>
        <button className="w-90 sm:w-120 md:w-176 md:h-30 font-Rajdhani text-12 sm:text-14 md:text-17 text-white rounded bg-davygrey font-semibold py-1 tracking-wider">
          Notify me
        </button>
        <div className="pt-40 sm:pt-80 md:pt-[129px]">
          <SocialIcons type={"text-texasRose"} />
        </div>
      </div>
    </div>
  );
};

export default StayTuned;
