import React from 'react';
import { getSettingsAuth } from '../services/apiOperations';
import { connect } from "react-redux";
import { addToken, donotAddToken } from "../services/actions";


const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({
    addToken: () => dispatch(addToken),
    donotAddToken: () => dispatch(donotAddToken)
});

function UserReg(props) {
  
  function start_flow() {
    console.log("to shuru kare");
    console.log(props);
    
    getSettingsAuth(
        "/auth/login", 
        'post', 
        {"password": "12345678","user_name":"dhaval_123"},
        {
            "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJkaGF2YWxfMTIzIiwiaWF0IjoxNjE1MDI2MDk5LCJleHAiOjE2NDY1NjIwOTl9.yNES4EIwDDiexyspU6nbkEZ5cpMKEi_QLHy2EZZcxPI',
            "Access-Control-Allow-Origin": "*"
        }
    )
        // .then(res => {
        //     console.log("resp");
        //     console.log(res)
        //     if(res.status===200){
        //         console.log(res.data);
        //     }
        // })
    // return (
    //   <Router>
    //     <Switch>
    //       <Route path='/Homepage' component={()=><UserFeeds/>} />
    //     </Switch>
    //   </Router>
    // );
    // props.history.push({
    //   pathname:"/Homepage",
    // });
  };
  return (
    <div className="outer-layout" style={{backgroundColor: "#555", backgroundImage: "none" }}>
        <div className="start">
            <button type="button" onClick={start_flow}>START</button>
        </div>
        {/* <div class="confirm-container">
            <h1>Help<button class="close" onclick="close_help_dialogue_box()"></button></h1>
            <div class="content">
                <ul class="switch-content">
                    <li onclick="make_active(this)" class="active">Information</li>
                    <li onclick="make_active(this)" class="">Test help</li>
                    <li onclick="make_active(this)" class="">Task help</li>
                </ul>
                <div class="info-container" style="visibility: visible;">
                    <p><b>INSTRUCTIONS TO CANDIDATES</b></p>
                    <ul>
                        <li>Answer <b>all</b> the questions.</li>
                        <li>You can change your answers at any time during the test.</li>
                    </ul>
                    <p><b>INFORMATION FOR CANDIDATES</b></p>
                    <ul>
                        <li>There are 40 questions in this test.</li>
                        <li>Each question carries one mark.</li>
                        <li>There are four parts to the test.</li>
                        <li>Please note you will only hear each part once in your actual test. However for familiarisation and practice purposes, this familiarisation test will allow you to listen to each recording multiple times.</li><li>For each part of the test there will be time for you to look through the questions and time for you to check your answers.</li>
                    </ul>
                </div>
                <button class="close_help_box" onclick="close_help_dialogue_box()">OK</button>
            </div>
        </div> */}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserReg)