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
      <G id="Rate_icon" data-name="Rate icon" transform="translate(0 0.168)">
        <G id="star" transform="translate(2.42 3)">
          <Path
            id="Path_392"
            data-name="Path 392"
            d="M22.822,18.591a1.985,1.985,0,0,0-1.915-1.39H15.18l-1.8-5.477a1.984,1.984,0,0,0-1.913-1.385h-.009a1.985,1.985,0,0,0-1.911,1.4L7.794,17.2H2.019a2.015,2.015,0,0,0-1.18,3.647l4.672,3.377-1.8,5.462a1.984,1.984,0,0,0,.724,2.256,1.984,1.984,0,0,0,2.37.007l4.68-3.383,4.625,3.377A2.015,2.015,0,0,0,19.218,29.7l-1.756-5.477L22.1,20.843a1.985,1.985,0,0,0,.727-2.252Z"
            transform="translate(0 -10.34)"
            fill="#facb78"
            stroke="#facb78"
            stroke-width="1"
          />
        </G>
        <G
          id="Rectangle_1510"
          data-name="Rectangle 1510"
          transform="translate(0 -0.168)"
          fill="none"
          stroke="#707070"
          stroke-width="1"
          opacity="0">
          <Rect width="28" height="28" stroke="none" />
          <Rect x="0.5" y="0.5" width="27" height="27" fill="none" />
        </G>
      </G>
    </Svg>
  );
}
