import * as React from "react";
import Svg, { Circle, Rect, Path, Ellipse, Defs, Stop, RadialGradient, G } from 'react-native-svg';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default function AddLink() {
    return (
        // <Svg xmlns="http://www.w3.org/2000/svg" width="22.141" height="19.55" viewBox="0 0 24.141 18.55">
        <Svg xmlns="http://www.w3.org/2000/svg" width={wp(4)} height={hp(2)} viewBox="0 0 24.141 18.55">
            <G id="vip-3" transform="translate(31.652 244.015)">
                <G id="Group_966" data-name="Group 966" transform="translate(-31.652 -244.015)">
                    <G id="Group_965" data-name="Group 965" transform="translate(0 0)">
                        <Path id="Path_26862" data-name="Path 26862" d="M133.089,70.753a1.018,1.018,0,0,0-1.018,1.018.968.968,0,0,0,.1.439c.013.027.033.06.047.087a.85.85,0,0,0,.153.193.731.731,0,0,0,.073.067.14.14,0,0,0,.04.027l-2.33,2.676L128.5,68.976a1.379,1.379,0,0,0,.233-.08c.027-.013.06-.033.087-.047a.85.85,0,0,0,.193-.153,1.007,1.007,0,0,0,.173-.233.237.237,0,0,0,.027-.06,1.018,1.018,0,1,0-1.944-.426,1,1,0,0,0,.093.426c.007.02.02.04.027.06a1.007,1.007,0,0,0,.173.233,1.09,1.09,0,0,0,.193.153l.04.02-2.523,5.125-2.989-7.921c.027-.013.053-.02.08-.033a1.015,1.015,0,0,0,.479-.479.989.989,0,0,0,.1-.439,1.018,1.018,0,1,0-2.037,0,.968.968,0,0,0,.1.439,1.015,1.015,0,0,0,.479.479.412.412,0,0,0,.08.033l-2.9,7.7-2.416-4.912.04-.02a.85.85,0,0,0,.193-.153,1.007,1.007,0,0,0,.173-.233.238.238,0,0,0,.027-.06,1.018,1.018,0,1,0-1.944-.426,1,1,0,0,0,.093.426c.007.02.02.04.027.06a1.007,1.007,0,0,0,.173.233,1.09,1.09,0,0,0,.193.153.542.542,0,0,0,.087.047,1.366,1.366,0,0,0,.233.08l-1.631,6.29L111.6,72.59c.013-.007.027-.02.04-.027a.664.664,0,0,0,.073-.067,1.091,1.091,0,0,0,.153-.193.544.544,0,0,0,.047-.087.989.989,0,0,0,.1-.439,1.018,1.018,0,1,0-2.037,0,.968.968,0,0,0,.1.439c.013.027.033.06.047.087a.85.85,0,0,0,.153.193.728.728,0,0,0,.073.067,1,1,0,0,0,.646.233h.047a13.837,13.837,0,0,1,.686,4.007h-.865a.432.432,0,0,0-.433.433v.047l.02.1c.007.013.013.033.02.047s.033.053.047.08c0,.007.007.007.007.013a.438.438,0,0,0,.333.153h.646v3.182h-.646a.432.432,0,0,0-.433.433v.047l.02.1c.007.013.013.033.02.047s.033.053.047.08c0,.007.007.007.007.013a.438.438,0,0,0,.333.153h22.171a.434.434,0,0,0,.433-.393v-.047a.432.432,0,0,0-.433-.433h-.646V77.675h.646a.434.434,0,0,0,.433-.393v-.047a.432.432,0,0,0-.433-.433h-.666a13.838,13.838,0,0,1,.686-4.007h.047a1,1,0,0,0,.646-.233.664.664,0,0,0,.073-.067,1.089,1.089,0,0,0,.153-.193.542.542,0,0,0,.047-.087.989.989,0,0,0,.1-.439A1.013,1.013,0,0,0,133.089,70.753Z" transform="translate(-109.966 -63.179)" fill="#bf2612" />
                        <G id="Group_964" data-name="Group 964" transform="translate(0 0)">
                            <Rect id="Rectangle_1664" data-name="Rectangle 1664" width="20.879" height="4.053" transform="translate(1.531 13.119)" fill="#ffc733" />
                            <Rect id="Rectangle_1665" data-name="Rectangle 1665" width="14.956" height="4.053" transform="translate(4.499 13.119)" fill="#fede3a" />
                            <G id="Group_955" data-name="Group 955" transform="translate(7.248)">
                                <G id="Group_953" data-name="Group 953" transform="translate(0 1.018)">
                                    <Path id="Path_26863" data-name="Path 26863" d="M170.409,64.819l-4.726,12.533h9.451Z" transform="translate(-165.683 -64.819)" fill="#ffc733" />
                                    <Path id="Path_26864" data-name="Path 26864" d="M184.262,64.819l-2.656,12.533h5.311Z" transform="translate(-179.536 -64.819)" fill="#fede3a" />
                                </G>
                                <G id="Group_954" data-name="Group 954" transform="translate(3.707)">
                                    <Ellipse id="Ellipse_828" data-name="Ellipse 828" cx="1.018" cy="1.018" rx="1.018" ry="1.018" fill="#fede3a" />
                                    <Path id="Path_26865" data-name="Path 26865" d="M195.219,63.993a1.02,1.02,0,0,1-1-.812,1.09,1.09,0,0,0-.02.206,1.018,1.018,0,1,0,2.017-.206A1.02,1.02,0,0,1,195.219,63.993Z" transform="translate(-194.201 -62.376)" fill="#ffc733" />
                                </G>
                            </G>
                            <G id="Group_959" data-name="Group 959" transform="translate(0 2.849)">
                                <G id="Group_956" data-name="Group 956" transform="translate(0.486 1.018)">
                                    <Path id="Path_26866" data-name="Path 26866" d="M113.664,112.026a13.966,13.966,0,0,1,1.251,6.39h4.293Z" transform="translate(-113.664 -108.738)" fill="#ffc733" />
                                    <Path id="Path_26867" data-name="Path 26867" d="M137.967,86.733l-2.543,9.684h7.3Z" transform="translate(-132.595 -86.733)" fill="#ffc733" />
                                    <Path id="Path_26868" data-name="Path 26868" d="M149.949,86.733l-.752,9.684h5.511Z" transform="translate(-144.578 -86.733)" fill="#fede3a" />
                                    <Path id="Path_26869" data-name="Path 26869" d="M113.664,112.026c1.085,2.283,2.489,6.39,2.489,6.39h3.062Z" transform="translate(-113.664 -108.738)" fill="#fede3a" />
                                </G>
                                <G id="Group_957" data-name="Group 957" transform="translate(4.786)">
                                    <Ellipse id="Ellipse_829" data-name="Ellipse 829" cx="1.018" cy="1.018" rx="1.018" ry="1.018" fill="#fede3a" />
                                    <Path id="Path_26870" data-name="Path 26870" d="M147.757,85.958a1.02,1.02,0,0,1-1-.812,1.088,1.088,0,0,0-.02.206,1.018,1.018,0,1,0,2.017-.206A1.022,1.022,0,0,1,147.757,85.958Z" transform="translate(-146.739 -84.334)" fill="#ffc733" />
                                </G>
                                <G id="Group_958" data-name="Group 958" transform="translate(0 3.794)">
                                    <Ellipse id="Ellipse_830" data-name="Ellipse 830" cx="1.018" cy="1.018" rx="1.018" ry="1.018" fill="#fede3a" />
                                    <Path id="Path_26871" data-name="Path 26871" d="M110.944,115.142a1.02,1.02,0,0,1-1-.812,1.088,1.088,0,0,0-.02.206,1.018,1.018,0,1,0,2.017-.206A1.027,1.027,0,0,1,110.944,115.142Z" transform="translate(-109.926 -113.518)" fill="#ffc733" />
                                </G>
                            </G>
                            <G id="Group_963" data-name="Group 963" transform="translate(13.518 2.849)">
                                <G id="Group_960" data-name="Group 960" transform="translate(0 1.018)">
                                    <Path id="Path_26872" data-name="Path 26872" d="M254.785,112.026a13.965,13.965,0,0,0-1.251,6.39h-4.293Z" transform="translate(-244.649 -108.738)" fill="#ffc733" />
                                    <Path id="Path_26873" data-name="Path 26873" d="M218.673,86.733l2.543,9.684h-7.3Z" transform="translate(-213.914 -86.733)" fill="#ffc733" />
                                    <Path id="Path_26874" data-name="Path 26874" d="M218.673,86.733l.752,9.684h-5.511Z" transform="translate(-213.914 -86.733)" fill="#fede3a" />
                                    <Path id="Path_26875" data-name="Path 26875" d="M254.741,112.026c-1.085,2.283-2.489,6.39-2.489,6.39H249.19Z" transform="translate(-244.604 -108.738)" fill="#fede3a" />
                                </G>
                                <G id="Group_961" data-name="Group 961" transform="translate(3.794)">
                                    <Ellipse id="Ellipse_831" data-name="Ellipse 831" cx="1.018" cy="1.018" rx="1.018" ry="1.018" transform="translate(0)" fill="#fede3a" />
                                    <Path id="Path_26876" data-name="Path 26876" d="M244.115,85.958a1.02,1.02,0,0,0,1-.812,1.086,1.086,0,0,1,.02.206,1.018,1.018,0,1,1-2.037,0,1.029,1.029,0,0,1,.02-.206A1.022,1.022,0,0,0,244.115,85.958Z" transform="translate(-243.097 -84.334)" fill="#ffc733" />
                                </G>
                                <G id="Group_962" data-name="Group 962" transform="translate(8.586 3.794)">
                                    <Ellipse id="Ellipse_832" data-name="Ellipse 832" cx="1.018" cy="1.018" rx="1.018" ry="1.018" transform="translate(0)" fill="#fede3a" />
                                    <Path id="Path_26877" data-name="Path 26877" d="M280.979,115.142a1.02,1.02,0,0,0,1-.812,1.086,1.086,0,0,1,.02.206,1.018,1.018,0,0,1-2.037,0,1.031,1.031,0,0,1,.02-.206A1.022,1.022,0,0,0,280.979,115.142Z" transform="translate(-279.961 -113.518)" fill="#ffc733" />
                                </G>
                            </G>
                            <Path id="Path_26878" data-name="Path 26878" d="M136.011,155.438H113.841a.432.432,0,0,1-.433-.433h0a.432.432,0,0,1,.433-.433h22.171a.432.432,0,0,1,.433.433h0A.428.428,0,0,1,136.011,155.438Z" transform="translate(-112.955 -141.887)" fill="#fede3a" />
                            <Path id="Path_26879" data-name="Path 26879" d="M113.841,158.334h22.171a.432.432,0,0,0,.433-.433H113.408A.432.432,0,0,0,113.841,158.334Z" transform="translate(-112.955 -144.782)" fill="#e7ad27" />
                            <Path id="Path_26880" data-name="Path 26880" d="M136.011,186.619H113.841a.432.432,0,0,1-.433-.433h0a.432.432,0,0,1,.433-.433h22.171a.432.432,0,0,1,.433.433h0A.432.432,0,0,1,136.011,186.619Z" transform="translate(-112.955 -169.014)" fill="#fede3a" />
                            <Path id="Path_26881" data-name="Path 26881" d="M113.841,189.515h22.171a.432.432,0,0,0,.433-.433H113.408A.436.436,0,0,0,113.841,189.515Z" transform="translate(-112.955 -171.91)" fill="#e7ad27" />
                        </G>
                        <Rect id="Rectangle_1666" data-name="Rectangle 1666" width="20.879" height="0.399" transform="translate(1.531 13.552)" fill="#d1d3d4" />
                    </G>
                </G>
            </G>
        </Svg>

    )
}