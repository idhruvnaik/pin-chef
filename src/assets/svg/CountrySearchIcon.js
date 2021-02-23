import * as React from 'react';
import Svg, {
  Circle,
  Rect,
  Path,
  Ellipse,
  Defs,
  Stop,
  RadialGradient,
  G,
} from 'react-native-svg';

export default function AddLink() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="26.621"
      height="26.621"
      viewBox="0 0 26.621 26.621">
      {/* <defs>
        <filter
          id="Path_258"
          x="0"
          y="0"
          width="23"
          height="23"
          filterUnits="userSpaceOnUse">
          <feOffset dx="1" dy="1" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Path_259"
          x="13.379"
          y="13.379"
          width="13.243"
          height="13.243"
          filterUnits="userSpaceOnUse">
          <feOffset dx="1" dy="1" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="1" result="blur-2" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs> */}
      <G
        id="Search_icon"
        data-name="Search icon"
        transform="translate(3.5 3.5)">
        <G transform="matrix(1, 0, 0, 1, -3.5, -3.5)" filter="url(#Path_258)">
          <Path
            id="Path_258-2"
            data-name="Path 258"
            d="M18.5,11.5a7,7,0,1,1-7-7,7,7,0,0,1,7,7Z"
            transform="translate(-1 -1)"
            fill="none"
            stroke="#514949"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
        </G>
        <G transform="matrix(1, 0, 0, 1, -3.5, -3.5)" filter="url(#Path_259)">
          <Path
            id="Path_259-2"
            data-name="Path 259"
            d="M27.975,27.975l-3-3"
            transform="translate(-7.47 -7.48)"
            fill="none"
            stroke="#514949"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
        </G>
      </G>
    </Svg>
  );
}
