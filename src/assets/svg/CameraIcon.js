import * as React from "react";
import Svg, { Circle, Rect, Path, Ellipse, Defs, Stop, RadialGradient, G} from 'react-native-svg';

export default function CameraIcon () {
    return(
        <Svg width="25" height="24" viewBox="0 0 25 24">
          <G id="Elipse_673" data-name="Elipse 673" fill="#469a09" stroke="#fff" stroke-width="2">
            <Ellipse  cx="12.5" cy="12" rx="12.5" ry="12" stroke="none"/>
            <Ellipse  cx="12.5" cy="12" rx="11.5" ry="11" fill="none"/>
            <Svg width="23.58" height="20.871" viewBox="-1 -2 24.58 21.871">
              <G transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Trazado_16186)">
                <Path id="Trazado_16186-2" data-name="Trazado 16186" d="M9.641,10.28A2.351,2.351,0,1,1,7.29,7.929,2.351,2.351,0,0,1,9.641,10.28ZM14.58,6.941V13.62a1.612,1.612,0,0,1-1.612,1.612H1.612A1.612,1.612,0,0,1,0,13.619V6.94A1.612,1.612,0,0,1,1.612,5.328H3.6V4.771A1.411,1.411,0,0,1,5.006,3.36H9.572a1.411,1.411,0,0,1,1.411,1.411v.558h1.985A1.613,1.613,0,0,1,14.58,6.94ZM10.85,10.28a3.56,3.56,0,1,0-3.56,3.56,3.56,3.56,0,0,0,3.56-3.56Z" transform="translate(4.5 1.14)" fill="#ffd54f"/>
              </G>
            </Svg>
          </G>
        </Svg>
    )
}