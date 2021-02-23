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
      xmlns="http://www.w3.org/2000/svg"
      width="20.951"
      height="24.097"
      viewBox="0 0 20.951 24.097">
      <Path
        id="Location"
        d="M22.225,28.6a.787.787,0,0,1-.4-.107C21.428,28.256,12,22.671,12,15.225a10.225,10.225,0,0,1,20.451,0c0,7.445-9.428,13.03-9.829,13.265A.787.787,0,0,1,22.225,28.6Zm0-22.024a8.662,8.662,0,0,0-8.652,8.652c0,5.742,6.906,10.538,8.652,11.659,1.746-1.121,8.652-5.917,8.652-11.659A8.662,8.662,0,0,0,22.225,6.573Zm0,13.372a4.719,4.719,0,1,1,4.719-4.719A4.725,4.725,0,0,1,22.225,19.945Zm0-7.866a3.146,3.146,0,1,0,3.146,3.146A3.15,3.15,0,0,0,22.225,12.079Z"
        transform="translate(-11.75 -4.75)"
        fill="#3f8f22"
        stroke="#3f8f22"
        stroke-width="0.5"
      />
    </Svg>
  );
}
