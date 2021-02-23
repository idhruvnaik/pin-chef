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
      width="30"
      height="30"
      viewBox="0 0 30 30">
      <G
        id="Description_icon"
        data-name="Description icon"
        transform="translate(-0.056)">
        <G
          id="Padding_box"
          data-name="Padding box"
          transform="translate(0.056)"
          fill="none"
          stroke="#707070"
          stroke-width="1"
          opacity="0">
          <Rect width="30" height="30" stroke="none" />
          <Rect x="0.5" y="0.5" width="29" height="29" fill="none" />
        </G>
        <G
          id="description_icon-2"
          data-name="description icon"
          transform="translate(4 4)">
          <Path
            id="Path_316"
            data-name="Path 316"
            d="M20.305,50.835a.549.549,0,0,0-.548.551v4.889a1.65,1.65,0,0,1-1.644,1.652H2.74A1.65,1.65,0,0,1,1.1,56.275V41.925A1.65,1.65,0,0,1,2.74,40.273H7.6a.551.551,0,0,0,0-1.1H2.74A2.75,2.75,0,0,0,0,41.925v14.35a2.75,2.75,0,0,0,2.74,2.753H18.113a2.75,2.75,0,0,0,2.74-2.753v-4.89A.549.549,0,0,0,20.305,50.835Zm0,0"
            transform="translate(0 -37.029)"
            fill="#469a09"
            stroke="#3f8f22"
            stroke-width="0.8"
          />
          <Path
            id="Path_317"
            data-name="Path 317"
            d="M122.9.987a2.457,2.457,0,0,0-3.487,0l-9.775,9.825a.551.551,0,0,0-.141.242l-1.285,4.664a.552.552,0,0,0,.14.536.546.546,0,0,0,.534.141l4.641-1.292a.547.547,0,0,0,.241-.141l9.775-9.825a2.49,2.49,0,0,0,0-3.5ZM110.83,11.169l8-8.041,2.58,2.593-8,8.041Zm-.515,1.039,2.061,2.072-2.851.794Zm12.452-7.85-.581.584L119.6,2.349l.581-.584a1.365,1.365,0,0,1,1.937,0l.643.646A1.384,1.384,0,0,1,122.766,4.359Zm0,0"
            transform="translate(-102.262 -0.261)"
            fill="#469a09"
            stroke="#3f8f22"
            stroke-width="0.8"
          />
        </G>
      </G>
    </Svg>
  );
}
