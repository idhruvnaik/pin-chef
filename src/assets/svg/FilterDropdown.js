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
      width="11"
      height="9"
      viewBox="0 0 11 9">
      <Path
        id="Polygon_1"
        data-name="Polygon 1"
        d="M5.5,0,11,9H0Z"
        transform="translate(11 9) rotate(180)"
        fill="#fff"
      />
    </Svg>
  );
}
