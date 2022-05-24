import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { socialIcons } from "../../core/data/soliallink";
import {
  secondPostSocialClass,
  whiteBtnClass,
} from "../../core/style/homepage";

const Footer = () => {

  const [path, setPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
    console.log('/path', path);
  }, [location]);

  if (path !== '/')
  
   {
    return <></>
  }

  return (
    <div className="bg-footerImg w-full h-500 min-h-500 bg-repeat-round mobile__footer">
      <div></div>
      <div className="msm:mx-20p md:mx-110">
        <div className="grid md:grid-cols-2 md:gap-40 text-white">
          <div className="md:mt-200 msm:mt-150">
            <p className="sm:text-35 text-18 font-bold sm:leading-45 leading-35 tracking-5 uppercase">
              contact us
            </p>
            <p className="sm:text-18 text-14 font-semibold sm:leading-24 leading-14  tracking-2">
              You’ll find us at all hours on Discoard and also reach us through
              the usual channels.
            </p>
            <div className="md:my-50p msm:my-10p">
              {socialIcons.map((item, index) => {
                return (
                  <a key={index} className={secondPostSocialClass}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="sm:w-26 sm:h-26 h-17 w-17 mr-10 sm:mr-0"
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="md:mt-200 msm:10p">
            <p className=" sm:text-35 text-18 font-bold sm:leading-45 leading-35 tracking-5 uppercase">
              Get the lastest updates
            </p>
            <p className="sm:text-18 text-14  font-semibold sm:leading-24 leading-14 tracking-2">
              Breaking news on events, competition and new depvolopements in
              GRANDONA, Delivered straight to your inbox.
            </p>
            <div className="my-5p msm:flex msm:flex-col sm:pt-0 pt-8">
              <input
                className="h-30 sm:w-300 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 "
                placeholder="email@domain.com"
              />
              <button className={whiteBtnClass + " w-90 sm:mt-5p mt-7"}>
                sign up
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center min-h-50">
          <p className="sm:text-12 text-10 font-medium text-white sm:text-left text-center mt-auto sm:mt-0">
            Copyright © 2022 Grandona. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
