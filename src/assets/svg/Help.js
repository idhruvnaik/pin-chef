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
      width="28"
      height="28"
      viewBox="0 0 28 28">
      <G id="Help_icon" data-name="Help icon" transform="translate(0 0.431)">
        <G
          id="Rectangle_1512"
          data-name="Rectangle 1512"
          transform="translate(0 -0.431)"
          fill="none"
          stroke="#707070"
          stroke-width="1"
          opacity="0">
          <Rect width="28" height="28" stroke="none" />
          <Rect x="0.5" y="0.5" width="27" height="27" fill="none" />
        </G>
        <G id="question-mark" transform="translate(2 2)">
          <G id="Group_309" data-name="Group 309">
            <Path
              id="Path_1483"
              data-name="Path 1483"
              d="M12.292,0A12.292,12.292,0,1,0,24.584,12.292,12.34,12.34,0,0,0,12.292,0Zm0,20.935a1.44,1.44,0,1,1,1.44-1.44A1.44,1.44,0,0,1,12.292,20.935Zm2.552-9.478a2.472,2.472,0,0,0-1.112,1.9v.379a1.44,1.44,0,0,1-2.881,0v-.379A5.273,5.273,0,0,1,13.14,9.134a1.44,1.44,0,1,0-2.289-1.163,1.44,1.44,0,1,1-2.881,0,4.321,4.321,0,1,1,6.874,3.486Z"
              fill="#3f8f22"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}
