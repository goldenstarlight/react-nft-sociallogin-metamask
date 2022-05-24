import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { socialIcons } from "../core/data/soliallink";

const SocialIcons = (props: any) => {
  return (
    <div>
      {socialIcons.map((item, index) => {
        return (
          <a
            key={index}
            className={
              socialIcons[index] != socialIcons[socialIcons.length - 1]
                ? "mr-[16px]"
                : ""
            }
            href={"#"}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`w-20 h-20 sm:w-25 sm:h-25 ${props.type}`}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
