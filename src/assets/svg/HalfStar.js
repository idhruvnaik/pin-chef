import * as React from "react";
import Svg, { Circle, Rect, Path, Ellipse, Defs, Stop, RadialGradient, G} from 'react-native-svg';

export default function HalfStar () {
    return(
        <Svg width="12.913" height="12.393" viewBox="0 0 12.913 12.393" style={{transform: [{rotateY: '180deg'}]}}>
            <G transform="translate(-0.012 -177.183)">
                <Path stroke="#707070" stroke-width="0.2px" d="M179.2,185.768a1.107,1.107,0,0,1-.431-.087L175.96,184.5l-2.807,1.185a1.109,1.109,0,0,1-1.536-1.116l.26-3.036-1.994-2.3a1.109,1.109,0,0,1,.587-1.806l2.967-.691,1.574-2.608a1.109,1.109,0,0,1,1.9,0l1.574,2.608,2.967.691a1.109,1.109,0,0,1,.587,1.806l-1.994,2.3.26,3.036a1.109,1.109,0,0,1-1.1,1.2Z" transform="translate(-169.491 3.698)"/>
            <Path fill="#ffde46" d="M261.8,178.159a1.109,1.109,0,0,0-.8-.737l-2.968-.691-1.575-2.609a1.109,1.109,0,0,0-.948-.536V184.5l2.806,1.185a1.109,1.109,0,0,0,1.536-1.116l-.26-3.036,1.994-2.3A1.109,1.109,0,0,0,261.8,178.159Z" transform="translate(-249.037 3.695)"/></G>
        </Svg>
    )
}