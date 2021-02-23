import * as React from 'react';
import Svg, {
  Circle,
  Rect,
  Path,
  Ellipse,
  Defs,
  Stop,
  RadialGradient,
  LinearGradient,
  G,
} from 'react-native-svg';

export default function Secure() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="18.365"
      height="21.006"
      viewBox="0 0 18.365 21.006">
      <Defs>
        <LinearGradient
          id="linear-gradient"
          x1="0.267"
          y1="0.267"
          x2="0.749"
          y2="0.749"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stop-color="#b9dd39" />
          <Stop offset="1" stop-color="#90cc1c" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-2"
          x1="0.947"
          y1="0.751"
          x2="0.738"
          y2="0.522"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stop-color="#6b0" stop-opacity="0" />
          <Stop offset="1" stop-color="#6b0" />
        </LinearGradient>
      </Defs>
      <G id="shield" transform="translate(-32.071 0)">
        <G
          id="Group_1254"
          data-name="Group 1254"
          transform="translate(32.071 0)">
          <Path
            id="Path_28141"
            data-name="Path 28141"
            d="M49.127,2.8A10.066,10.066,0,0,1,42.775.541a2.411,2.411,0,0,0-3.043,0A10.065,10.065,0,0,1,33.379,2.8a1.308,1.308,0,0,0-1.308,1.308V7.614a14.949,14.949,0,0,0,5.515,11.6l1.077.876a4.1,4.1,0,0,0,5.181,0l1.077-.876a14.95,14.95,0,0,0,5.515-11.6V4.107A1.308,1.308,0,0,0,49.127,2.8Z"
            transform="translate(-32.071 -0.001)"
            fill="#3f8f22"
          />
          <Path
            id="Path_28142"
            data-name="Path 28142"
            d="M78.064,58.122a1.1,1.1,0,0,1-.695-.247L75.309,56.2a13.137,13.137,0,0,1-4.846-10.191V43.226a.651.651,0,0,1,.611-.641,10.912,10.912,0,0,0,6.295-2.424,1.1,1.1,0,0,1,1.389,0,10.912,10.912,0,0,0,6.295,2.425.651.651,0,0,1,.611.641v2.783A13.138,13.138,0,0,1,80.818,56.2l-2.06,1.676A1.1,1.1,0,0,1,78.064,58.122Z"
            transform="translate(-68.882 -38.27)"
            fill="#ffd54f"
          />
          <Path
            id="Path_28143"
            data-name="Path 28143"
            d="M93,75.237a1.011,1.011,0,0,1-.636-.226l-1.886-1.534a12.029,12.029,0,0,1-4.437-9.331V61.6a.6.6,0,0,1,.56-.587,9.991,9.991,0,0,0,5.764-2.22,1.008,1.008,0,0,1,1.272,0,9.991,9.991,0,0,0,5.764,2.22.6.6,0,0,1,.56.586v2.548a12.029,12.029,0,0,1-4.437,9.331l-1.886,1.534a1.01,1.01,0,0,1-.636.226Z"
            transform="translate(-83.813 -56.154)"
            fill="#fff"
          />
        </G>
        <Circle
          id="Ellipse_1097"
          data-name="Ellipse 1097"
          cx="5.437"
          cy="5.437"
          r="5.437"
          transform="translate(35.816 4.941)"
          fill="url(#linear-gradient)"
        />
        <Path
          id="Path_28147"
          data-name="Path 28147"
          d="M168.773,174.1l-4.16,4.16a.677.677,0,0,1-.231.145.2.2,0,0,1-.146-.061l-1.968-1.968a1,1,0,0,0-1.448,0,.956.956,0,0,0-.042,1.406l4.824,4.824a5.438,5.438,0,0,0,3.171-8.507Z"
          transform="translate(-123.129 -166.934)"
          fill="url(#linear-gradient-2)"
        />
        <Path
          id="Path_28148"
          data-name="Path 28148"
          d="M163.91,148.613a2.3,2.3,0,0,1-1.636-.678l-1.968-1.968a1.054,1.054,0,1,1,1.49-1.49l1.968,1.968a.207.207,0,0,0,.292,0l5.218-5.218a1.054,1.054,0,0,1,1.49,1.49l-5.218,5.218a2.3,2.3,0,0,1-1.636.678Z"
          transform="translate(-122.657 -135.113)"
          fill="#ffd54f"
        />
      </G>
    </Svg>
  );
}
