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
      width="20.608"
      height="20.608"
      viewBox="0 0 20.608 20.608">
      <Path
        id="email"
        d="M10.3,0a10.3,10.3,0,1,0,5.153,19.229L14.168,17A7.729,7.729,0,1,1,18.032,10.3v1.122a1.333,1.333,0,0,1-1.288,1.454,1.29,1.29,0,0,1-1.288-1.288V6.44h-1.78a5.147,5.147,0,1,0,.125,7.625,3.84,3.84,0,0,0,2.944,1.391,3.908,3.908,0,0,0,3.864-4.03V10.3A10.316,10.316,0,0,0,10.3,0Zm0,12.88A2.576,2.576,0,1,1,12.88,10.3,2.579,2.579,0,0,1,10.3,12.88Z"
        fill="#469a09"
      />
    </Svg>
  );
}
