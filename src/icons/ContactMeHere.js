import * as React from "react";

function SvgContactMeHere(props) {
  return (
    <a href='mailto: vannida.lim@gmail.com'>
      <svg width={300} height={300} {...props}>
        <defs>
          <path
            id="ContactMeHere_svg__a"
            d="M90 150a60 60 0 01120 0 60 60 0 01-120 0"
          />
        </defs>
        <circle cx={150} cy={100} r={75} fill="none"/>
        <use xlinkHref="#ContactMeHere_svg__a" fill="none"/>
        <text fill='#BF7B5B'>
          <textPath xlinkHref="#ContactMeHere_svg__a">
            {"Contact me here Contact me here Contact me here"}
          </textPath>
        </text>
      </svg>
    </a>
  );
}

export default SvgContactMeHere;
