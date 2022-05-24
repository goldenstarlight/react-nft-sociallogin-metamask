import team1Image from "../../assets/images/teams/team1.png";
import team2Image from "../../assets/images/teams/team2.png";
import team3Image from "../../assets/images/teams/team3.png";
import team4Image from "../../assets/images/teams/team4.png";
import team5Image from "../../assets/images/teams/team5.png";
import team6Image from "../../assets/images/teams/team6.png";
import teamInfoImage from "../../assets/images/teams/teamInfo.png";
const TeamDiv = () => {
  const teamClass: string =
    "sm:w-174 w-59 border border-4 border-white rounded-12 hover:border-seletiveyellow";
  return (
    <div className="lg:w-936 max-w-936 md:mx-auto msm:mx-10 msm:mt-80p w-[96%]">
      <p className="sm:text-64 text-22 text-seletiveyellow font-bold text-Rajdhani text-center sm:text-left pb-10">
        TEAM
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 mr-10 md:h-372 msm:h-60">
          <img src={team1Image} className={teamClass} key="1" />
          <img src={team2Image} className={teamClass} key="2" />
          <img src={team3Image} className={teamClass} key="3" />
          <img src={team4Image} className={teamClass} key="4" />
          <img src={team5Image} className={teamClass} key="5" />
          <img src={team6Image} className={teamClass} key="6" />
        </div>
        <div className="sm:w-372 w-127">
          <img src={teamInfoImage} className="sm:w-372 md:h-372" />
          <p className="sm:text-25 sm:leading-32 text-12 leading-15 tracking-15p font-medium text-davygrey font-Rajdhani pt-2 sm:pt-0">
            PIYADA TIM
          </p>
          <p className="sm:text-17 sm:leading-21 text-10 leading-12 tracking-2p font-medium text-cloudygrey font-Rajdhani">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamDiv;
