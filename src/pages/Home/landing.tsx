import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  firstPostClass,
  secondPostClass,
  whiteBtnClass,
  secondPostSocialClass,
} from "../../core/style/homepage";
import { SocialLinkItemProps } from "../../core/interfaces/pages";
import { socialIcons } from "../../core/data/soliallink";

import MainCanvasSlide from "./mainslide";

import landingImage from "../../assets/images/landing.png";
import postImage from "../../assets/images/poster.png";

const Landing = () => {
  const mWidth = 640;
  const Screen = getWindowDimensions();
  const [windowDimensions, setWindowDimensions] = useState(Screen);
  // set height of poster and image
  const [windowHeight, setWindowHeight] = useState(Screen.height);
  const [imgHeightStyle, setImgHeightStyle] = useState({
    height: Screen.height + "px",
  });

  const mleft = Screen.width - 1313 < 0 ? (Screen.width - 1313) / 2 : 0;
  const [imgGrandoStyle, setGrandoStyle] = useState({
    height: Screen.height + "px",
    "margin-left": Screen.width > mWidth ? mleft + "px" : "",
  });
  const [containerStyle, setContainerStyle] = useState({
    height:
      Screen.width > mWidth
        ? windowHeight * 2 + 200 + "px"
        : windowHeight * 2 + "px",
  });
  // set scroll y
  const [scrollY, setScrollY] = useState(0);
  // const [pngRotate, setPngRotate] = useState({display: "rotate(0)"});
  const [firstPosterStyle, setFirstPosterStyle] = useState({
    display: "block",
  });
  const [secondPosterStyle, setSecondPosterStyle] = useState({
    display: "block",
  });
  const [btnShowStyle, setBtnShowStyle] = useState({ display: "none" });
  const [arriveStyle, setArriveStyle] = useState(" posterHide");
  // timer
  const [spinAngle, setSpinAngle] = useState(360);

  const firstImg = useRef<HTMLDivElement>(null);

  const posterStyle = "w-full overflow-hidden";

  const canvasRef = useRef(null);
  if (canvasRef.current) {
    // this will get the canvas HTML element where everyhting that's painted is drawn
    // and call the toDataURL() function on it
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // console.log(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    const wSize = getWindowDimensions();
    const width = Math.floor(((40 + scrollY / 20) * wSize.width) / 1000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (spinAngle <= 360) {
        setSpinAngle(spinAngle - 1);
      }
      if (spinAngle < 0) setSpinAngle(360);
    }, 100);
    return () => {
      clearInterval(myInterval);
    };
  });
  useEffect(() => {
    function handleResize() {
      const wSize = getWindowDimensions();
      setWindowDimensions(wSize);
      setWindowHeight(wSize.height);
      setImgHeightStyle({ height: wSize.height + "px" });
      const mleft = wSize.width - 1313 < 0 ? (wSize.width - 1313) / 2 : 0;
      const style = {
        height: wSize.height + "px",
        // "margin-left": mleft + "px",
        "margin-left": Screen.width > mWidth ? mleft + "px" : "",
      };
      setGrandoStyle(style);
      setContainerStyle({ height: wSize.height * 2 + 200 + "px" });
      const width = Math.floor(((40 + scrollY / 20) * wSize.width) / 1000);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const firtImgTop = firstImg.current?.getBoundingClientRect().top || 0;
    const roadMapHeight =
      firstImg.current?.getBoundingClientRect().height == undefined
        ? 0
        : firstImg.current?.getBoundingClientRect().height;
    if (Screen.width > mWidth) {
      if (scrollY < windowHeight) {
        // scroll down the ref div
        let offset = scrollY;
        let angle = Math.floor((offset / windowHeight) * 360) % 360;
        // setPngRotate({transform: 'rotate('+angle+'deg)'});
        let style1 = { display: "block", position: "fixed" };
        setFirstPosterStyle(style1);
        let style2 = { display: "block", position: "fixed" };
        setSecondPosterStyle(style2);
        setArriveStyle(" posterHide");
        setBtnShowStyle({ display: "none" });
        const wSize = windowDimensions;
        const width = Math.floor(((40 + scrollY / 20) * wSize.width) / 1000);
      } else if (scrollY < windowHeight + 200) {
        const mtop = scrollY - windowHeight;
        let style1 = { display: "block", position: "relative" };
        setFirstPosterStyle(style1);
        let style2 = { display: "block", top: "0px", position: "fixed" };
        setSecondPosterStyle(style2);
        setBtnShowStyle({ display: "block" });
      } else if (scrollY < windowHeight * 2 + 200) {
        // setPngRotate({transform: 'rotate(0deg)'});
        setFirstPosterStyle({ display: "block" });
        let style1 = { display: "block", position: "relative" };
        setFirstPosterStyle(style1);
        let style2 = { display: "block", top: "200px", position: "relative" };
        setSecondPosterStyle(style2);
        setArriveStyle(" postershow");

        setBtnShowStyle({ display: "block" });
      }

      // else if (scrollY < windowHeight*3) {

      //   // setPngRotate({transform: 'rotate(0deg)'});
      //   setFirstPosterStyle({display: 'block'});
      //   let style1 = {display: 'none', position: 'relative'};
      //     setFirstPosterStyle(style1);
      //   let style2 = {display: 'block', top:'0px', position: 'fixed'};
      //   //setSecondPosterStyle(style2);
      //   setArriveStyle(' posterHide');
      // }
      else {
        // setPngRotate({transform: 'rotate(0deg)'});
        let style1 = { display: "none", position: "relative" };
        setFirstPosterStyle(style1);
        let style2 = { display: "block", position: "relative" };
        setSecondPosterStyle(style2);
      }
    }
  }, [scrollY]);

  return (
    <div id="landing" style={containerStyle} className="mobile__top-con">
      <div
        className={posterStyle + " z-100"}
        ref={firstImg}
        style={firstPosterStyle}
      >
        <div
          className="w-full justify-center mobile__top-canvas"
          style={
            Screen.width > mWidth
              ? imgHeightStyle
              : { height: Screen.height + "px" }
          }
        >
          <div className="mobile__top-overflow">
            <MainCanvasSlide
              className="z-10 w-full mobile__top-bg"
              // width={windowDimensions.width}
              // height={windowDimensions.height}
              width={Screen.width > mWidth ? windowDimensions.width : 1}
              height={Screen.width > mWidth ? windowDimensions.height : 2}
              radius={scrollY}
              style={imgHeightStyle}
              spinrotate={spinAngle}
            />

            <div className={`${firstPostClass}  mobile__top-text`}>
              <p>
                Where Your World.{" "}
                <span className="text-texasRose font-medium">Recreated.</span>
              </p>
              <p>
                Your Life.{" "}
                <span className="text-texasRose font-medium">Reinvented.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          Screen.width > mWidth
            ? posterStyle
            : "mobile__second-poster mobile__top-canvas"
        }`}
        style={
          Screen.width > mWidth
            ? secondPosterStyle
            : { height: Screen.height + "px" }
        }
      >
        {Screen.width > mWidth ? (
          <img
            className="min-w-full max-w-2xl"
            src={postImage}
            style={imgGrandoStyle}
          />
        ) : (
          ""
        )}
        <div className="hidden sm:block">
          <div className="font-Rajdhani relative sm:-mt-212">
            <div className="font-Rajdhani uppercase font-semibold text-white text-21 leading-26 tracking-90p text-center w-full">
              Welcome to
            </div>
            <div className="font-lato text-white text-72 leading-84 tracking-10p font-bold text-center w-full">
              GRANDORA
            </div>
          </div>
          <div className={` ${Screen.width > mWidth ? secondPostClass : ""}`}>
            <div className="text-12 leading-18 md:ml-111 text-white uppercase font-Rajdhani msm:absolute md:sticky msm:top-100p msm:text-center">
              <p>new epic social platform project.</p>
              <p>
                <span className="font-semibold">Grandora</span> will bring
                everyone
              </p>
              <p>into the world where each player's</p>
              <p>imagination and creativity is limitless</p>
            </div>
            <button
              className="relative uppercase h-30 bg-white text-14 leading-17 text-center rounded-6 hover:text-primary w-200 tracking-2p font-semibold"
              style={btnShowStyle}
            >
              Get Ready
            </button>
            <div className="msm:mt-10p md:mr-95">
              {socialIcons.map((item, index) => {
                return (
                  <a key={index} className={secondPostSocialClass}>
                    <FontAwesomeIcon icon={item.icon} className="w-26 h-26 " />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between sm:hidden w-full mobile__top-second">
          <div className="text-12 leading-18 text-white uppercase font-Rajdhani text-center">
            <p>new epic social platform project.</p>
            <p>
              <span className="font-semibold">Grandora</span> will bring
              everyone
            </p>
            <p>into the world where each player's</p>
            <p>imagination and creativity is limitless</p>
          </div>
          <div>
            <div className="font-Rajdhani relative flex flex-col justify-center items-center text-center">
              <div className="text-center">
                <div className="font-Rajdhani uppercase font-semibold text-white text-[14px] leading-[16px] tracking-[0.6em] text-center w-full">
                  Welcome to
                </div>
                <p className="font-lato text-white text-[38px] tracking-[10px] font-bold leading-[38px]  text-center">
                  GRANDORA
                </p>
              </div>

              <button className="relative uppercase h-30 bg-white text-14 leading-17 text-center rounded-6 hover:text-primary w-[200px] tracking-2p mt-16 mb-8 font-semibold">
                Get Ready
              </button>
              <div className="msm:mt-10p md:mr-95">
                {socialIcons.map((item, index) => {
                  return (
                    <a
                      key={index}
                      className={
                        socialIcons[index] !=
                        socialIcons[socialIcons.length - 1]
                          ? "mr-[16px]"
                          : ""
                      }
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="w-20 h-20 text-white"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export default Landing;
