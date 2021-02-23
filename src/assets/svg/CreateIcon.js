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
  Text,
  TSpan,
} from 'react-native-svg';

export default function AddLink() {
  return (
    <Svg
      id="Creat_new_button"
      data-name="Creat new button"
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="51"
      viewBox="0 0 52 51">
      <Path
        id="Green_circle_behind_plus"
        data-name="Green circle behind plus"
        d="M26,0A25.754,25.754,0,0,1,52,25.5,25.754,25.754,0,0,1,26,51,25.754,25.754,0,0,1,0,25.5,25.754,25.754,0,0,1,26,0Z"
        fill="#3f8f22"
      />
      <Path
        id="Plus"
        d="M34.746-14.04q0,4.126-4.255,4.126H20.433v7.608a16.909,16.909,0,0,0,.709,3.869,2.667,2.667,0,0,1-2.128,1.418q-4.449,0-4.449-4v-8.9H2.186a5.892,5.892,0,0,1-.967-2.708,3.241,3.241,0,0,1,.9-2.224,2.719,2.719,0,0,1,2.063-1,32.753,32.753,0,0,1,3.417.258,32.753,32.753,0,0,0,3.417.258h3.546v-11.8a6.662,6.662,0,0,1,2.9-.9,5.267,5.267,0,0,1,2.547.838q1.451.838,1.451,1.805a14.58,14.58,0,0,1-.516,3.192A14.58,14.58,0,0,0,20.433-19v3.675h8.64a20.245,20.245,0,0,0,4.126-.645Q34.746-15.136,34.746-14.04Z"
        transform="translate(7.822 38)"
        fill="#fff"
      />
    </Svg>
  );
}
