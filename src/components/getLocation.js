import React from "react";
import { geolocated } from "react-geolocated";
class GetLocation extends React.Component {
    constructor(props) {
        super(props);
        this.extract_location = this.extract_location.bind(this);
        // this.state = {
        //     email_popup_flag: false,
        //     current_email: null
        // };
        // this.extract_location();
        // this.handleChange = otp => {
        //     this.setState({ otp });
        //     this.props.onOtpChange(otp);
        // };
    }

    extract_location(){
        return this.props;
    }

    render() {
        return (
            null //!this.props.isGeolocationAvailable ? (
        //     <div>Your browser does not support Geolocation</div>
        // ) : !this.props.isGeolocationEnabled ? (
        //     <div>Geolocation is not enabled</div>
        // ) : this.props.coords ? (
        //     <table>
        //         <tbody>
        //             <tr>
        //                 <td>latitude</td>
        //                 <td>{this.props.coords.latitude}</td>
        //             </tr>
        //             <tr>
        //                 <td>longitude</td>
        //                 <td>{this.props.coords.longitude}</td>
        //             </tr>
        //             <tr>
        //                 <td>altitude</td>
        //                 <td>{this.props.coords.altitude}</td>
        //             </tr>
        //             <tr>
        //                 <td>heading</td>
        //                 <td>{this.props.coords.heading}</td>
        //             </tr>
        //             <tr>
        //                 <td>speed</td>
        //                 <td>{this.props.coords.speed}</td>
        //             </tr>
        //         </tbody>
        //     </table>
        // ) : (
        //     <div>Getting the location data&hellip; </div>
        );
    }
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GetLocation);