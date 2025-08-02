import React, { useRef, useEffect } from "react";
import "../../../public/Js/svg"
import { gsap } from "gsap";

const StringAnimation = () => {
  return (
   <div id="string">
        <svg width="1000" height="200">
          <path d="M 10 100 Q 500 100 990 100" stroke="white" fill="transparent" />
        </svg>
    </div>
  );
};

export default StringAnimation;
