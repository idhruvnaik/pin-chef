import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
 
export default class otps extends Component {
    constructor(props){
        super(props);
        this.state = {
            otp: '' 
        };
    
        this.handleChange = otp => {
            this.setState({ otp });
            this.props.onOtpChange(otp);
        };
    }

    render() {
        return (
            <OtpInput
                value={this.state.otp}
                onChange={this.handleChange}
                numInputs={6}
                containerStyle={"each_otp_container"}
                inputStyle={{width: "3em"}}
                placeholder={"______"}
                isInputNum={true}
            />
        );
    }
}