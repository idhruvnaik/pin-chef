import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';

const apiHost = "http://52.87.176.237:8080/api"
const registration_endpoint = "/auth/user"
const login_endpoint = "/auth/login"
const otp_endpoint = "/account/verify-otp"

async function make_rest_call(apiURL, method, body, headers){
    let res = await axios(
        {
            url:apiURL,
            method:method,
            headers: headers,
            data: body
        }
    )
    if(res.status == 200){
        return res.data;
    }else{
        return false;
    }
}

function validate_response(response){
    if(response.status == 200){
        return response.data;
    }else{
        return false;
    }
}
async function actual_login(username, password, remember){
    let apiURL= apiHost + login_endpoint;
    var token_details = reactLocalStorage.getObject('token_details');
    if (token_details){
        console.log("token details");
        console.log(token_details);
        if (token_details.user == username){
            var headers = {
                "Authorization": "Bearer " + token_details.token
            }
            var data = {
                "password": password,
                "user_name": username
            }
            await make_rest_call(apiURL, 'POST', data, headers)
                .then(resp => {
                    console.log(resp);
                    if (resp.auth_token){
                        reactLocalStorage.setObject(
                            'token_details', 
                            {'user': resp.user_name, 'token': resp.auth_token, remember: remember }
                        );
                        return true;
                    }else{
                        return false;
                    }
                })
        } else{
            return false;
        }
    }else{
        return false;
    }
}
export const getSettingsAuth=(endpoint, method, body, headers, remember)=>{
    let apiURL= apiHost + endpoint;
    make_rest_call(apiURL, method, body, headers)
        .then(res => {
            let resp = validate_response(res);
            if (resp.auth_token){
                reactLocalStorage.setObject(
                    'token_details', 
                    {'user': resp.user_name, 'token': resp.auth_token, 'remember':remember }
                );
            }
        })
}

export const verifyLogin= async(username, password, remember)=>{
    let apiURL= apiHost + login_endpoint;
    var token_details = reactLocalStorage.getObject('token_details');
    if (token_details && token_details.user == username){
        var headers = {
            "Authorization": "Bearer " + token_details.token
        };
        var data = {
            "password": password,
            "user_name": username
        };
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    } else{
        return {
            status: false,
            message: "User is not registered."
        };
    }
}

// export const registerUser=(data)=>{
//     let apiURL= apiHost + registration_endpoint;
//     make_rest_call(apiURL, 'POST', data, {})
//         .then(res => {
//             let resp = validate_response(res);
//             if (resp.auth_token){
//                 reactLocalStorage.setObject(
//                     'token_details', 
//                     {'user': resp.user_name, 'token': resp.auth_token }
//                 );
//             }
//         })
// }

export const verifyOtp= async(username, otp)=>{
    let apiURL= apiHost + otp_endpoint;
    var token_details = reactLocalStorage.getObject('token_details');
    if (token_details && token_details.user == username){
        var headers = {
            "Authorization": "Bearer " + token_details.token
        };
        var data = {
            "otp": otp,
            "user_name": username
        };
        try{
            let resp = await make_rest_call(apiURL, 'POST', data, headers);
            return resp;
        }
        catch(err){
            return {
                status: false,
                message: err.message
            }
        }
    } else{
        return {
            status: false,
            message: "User is not registered."
        };
    }
}
// export const getSettingsAuth=(referrer,queryFilterString="")=>{
//     let apiURL=queryFilterString!==""?`${apiHost}/settings/${queryFilterString}`:`${apiHost}/settings/`
//     return axios({
//             url:apiURL,
//             method:'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer}
//         })
// }

// /**
//  * @param  {string} referrer
//  * @param  {string} queryFilterString=""
//  * @param  {boolean} force=false
//  */
// export const getTenantList=(referrer,queryFilterString="",force=false)=>{
//     return dispatch => {
//         dispatch(startLoader(moduleType.tenants))
//         if(!force)
//             dispatch(clearTenants())
//         let apiURL=`${apiHost}/tenants/${queryFilterString}&force=${force}`
//         axios({
//             url: apiURL,
//             method: 'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer}
//         })
//         .then(res=>{ 
//             console.log(res,"Response")
//             if(res.status===200)
//                 dispatch(setTenantList(res.data))
//             else if(res.status===203)
//                 dispatch(clearTenants())
//             else
//                 dispatch(setResponseTime(res.data))
//             dispatch(stopLoader(moduleType.tenants))
//         })
//         .catch(err =>{
//             if(err.response){
//                 if(err.response.data.message!==undefined)
//                     dispatch(setTenantListErrorResponse(err.response.data.message))
//                 else
//                     dispatch(setTenantListErrorResponse("Something went wrong; Please try again later."))
                
//             }
//             else{
//                 // if(err.message==="Network Error")
//                 //     dispatch(setTenantListErrorResponse("Network Error"))
//                 // else
//                     dispatch(setTenantListErrorResponse("Something went wrong; Please try again later."))
//             }
//             dispatch(stopLoader(moduleType.tenants))
//             console.log(JSON.stringify(err),"API ERROR")
//         });
//     }
// }


// /**
//  * @param  {string} referrer
//  * @param  {string} queryFilterString=""
//  * @param  {object} body
//  */
// export const setSettings=(referrer,body,queryFilterString="")=>{
//     return dispatch => {
//         dispatch(startLoader(moduleType.settings))
//         let apiURL=queryFilterString!==""?`${apiHost}/settings/?${queryFilterString}`:`${apiHost}/settings/`
//         axios({
//             url:apiURL,
//             method:'post',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer},
//             data:body
//         })
//         .then(res=>{ 
//             if(res.status===200){
//                 dispatch(getCurrentSettingResponse(res.data))
//                 dispatch(setSaveSettingsResponseMessage("Saved successfully",res.status))
//             }
//             dispatch(stopLoader(moduleType.settings))            
//         })
//         .catch(err =>{
//             if(err.response){
//                 if(err.response.status===401 || err.response.status===400 || err.response.status===500)
//                     dispatch(setSaveSettingsResponseMessage(err.response?err.response.data.message:err.message,err.response.status))
//                 else{
//                     dispatch(setSaveSettingsResponseMessage(err.message,err.response.status))
//                 }
//             }
//             else{
//                 dispatch(setSaveSettingsResponseMessage(err.message,err.status))
//             }
//             dispatch(stopLoader(moduleType.settings))
//             console.log(err,"API ERROR")
//         });
//     }
// }


// /**
//  * @param  {string} referrer
//  * @param  {string} queryFilterString=""
//  */
// export const getSettings=(referrer,queryFilterString="")=>{
//     return dispatch => {
//         dispatch(startLoader(moduleType.settings))
//         let apiURL=queryFilterString!==""?`${apiHost}/settings/${queryFilterString}`:`${apiHost}/settings/`
//         axios({
//             url:apiURL,
//             method:'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer}
//         })
//         .then(res=>{
//             console.log(res,"GET SETTINGS response")
//             if(res.status===200)
//                 dispatch(getCurrentSettingResponse(res.data))
//             dispatch(stopLoader(moduleType.settings))            
//         })
//         .catch(err =>{
//             if(err.response){
//                 if(err.response.status===401){
//                     console.log(err,"API ERROR RESPONSE")
//                     dispatch(getCurrentSettingErrorResponse(err.response.data))
//                 }
//                 else{
//                     dispatch(getCurrentSettingErrorResponse("Something went wrong; Please try again later."))
//                 }
//             }
//             else{
//                 dispatch(getCurrentSettingErrorResponse(err.message))
//                 console.log(err,"API ERROR")
//             }
//             dispatch(stopLoader(moduleType.settings))
//             console.log(err,"API ERROR")
//         });
//     }
// }


// /**
//  * @param  {string} referrer
//  * @param  {string} sophosTenantId
//  * @param  {string} queryFilterString=""
//  * @param  {boolean} force=false
//  */
// export const getEndpointList=(referrer,queryFilterString="",force=false)=>{
//     return dispatch => {
//         dispatch(startLoader(moduleType.endpoints))
//         if(!force)
//             dispatch(clearEndpoints())
//         let apiURL=`${apiHost}/endpoints/${queryFilterString}&force=${force}`
//         axios({
//             url: apiURL,
//             method: 'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer}
//         })
//         .then(res=>{ 
//             console.log(res,"Response")
//             if(res.status===200)
//                 dispatch(setEndpointList(res.data))
//             else
//                 dispatch(setResponseTime(res.data))
//             dispatch(stopLoader(moduleType.endpoints))
//         })
//         .catch(err =>{
//             if(err.response){
//                 if(err.response.data.message!==undefined)
//                     dispatch(setEndpointListErrorResponse(err.response.data.message))
//                 else
//                     dispatch(setEndpointListErrorResponse("Something went wrong; Please try again later."))
                    
//             }
//             else{
//                 // if(err.message==="Network Error")
//                 //     dispatch(setEndpointListErrorResponse("Network Error"))
//                 // else
//                     dispatch(setEndpointListErrorResponse("Something went wrong; Please try again later."))
//             }
//             dispatch(stopLoader(moduleType.endpoints))
//             console.log(err,"API ERROR")
//         });
//     }
// }

// /**
//  * 
//  * @param {string} referrer 
//  * @param {string} queryFilterString 
//  */

// export const getAssetList=(referrer,queryFilterString="")=>{
//     return dispatch => {
//         dispatch(startLoader(moduleType.assets))
//         dispatch(clearAssets())
//         let apiURL=`${apiHost}/assets/${queryFilterString}`
//         axios({
//             url: apiURL,
//             method: 'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer}
//         })
//         .then(res=>{ 
//             console.log(res,"Response")
//             if(res.status===200)
//                 dispatch(setAssetList(res.data))
//             dispatch(stopLoader(moduleType.assets))
//         })
//         .catch(err =>{
//             if(err.response){
//                 if(err.response.data.message!==undefined)
//                     dispatch(setAssetListErrorResponse(err.response.data.message))
//                 else
//                     dispatch(setAssetListErrorResponse("Something went wrong; Please try again later."))
                    
//             }
//             else{
//                 // if(err.message==="Network Error")
//                 //     dispatch(setEndpointListErrorResponse("Network Error"))
//                 // else
//                     dispatch(setAssetListErrorResponse("Something went wrong; Please try again later."))
//             }
//             dispatch(stopLoader(moduleType.assets))
//             console.log(err,"API ERROR")
//         });
//     }
// }

// /**
//  * @param  {string} referrer
//  * @param  {string} queryFilterString=""
//  */
// export const getMachinegroupList=(referrer,queryFilterString="")=>{
//     let apiURL=queryFilterString!==""?`${apiHost}/machinegroups/${queryFilterString}`:`${apiHost}/machinegroups/`
//     return axios({
//             url:apiURL,
//             method:'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer},
//         })
// }

// /**
//  * @param  {string} referrer
//  * @param  {string} queryFilterString=""
//  */
// export const getAssetTenantsList=(referrer,queryFilterString="", SophosTenantId="")=>{
//     let apiURL=queryFilterString!==""?`${apiHost}/assets/tenants${queryFilterString}`:`${apiHost}/assets/tenants`
//     return axios({
//             url:apiURL,
//             method:'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer},
//             params: { SophosTenantId }
//         })
// }

// /**
//  * @param  {string} referrer
//  * @param  {string} queryFilterString=""
//  */
// export const sendAssetAction=(requestBody,referrer,queryFilterString="")=>{
//     let apiURL=queryFilterString!==""?`${apiHost}/assets/deploy${queryFilterString}`:`${apiHost}/assets/deploy`
//     return axios({
//             url:apiURL,
//             method:'post',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer},
//             data:requestBody
//         })
// }


// /**
//  * @param  {string} referrer
//  * @param  {object} body
//  * @param  {string} queryFilterString=""
//  */
// export const sendRequestEndpointAction=(referrer,body,queryFilterString="")=>{
//     let apiURL=queryFilterString!==""?`${apiHost}/endpoints/action${queryFilterString}`:`${apiHost}/endpoints/action`
//     return axios({
//             url:apiURL,
//             method:'post',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer},
//             data:body
//         })
// }

// /**
//  * @param  {string} referrer
//  * @param  {string} queryFilterString=""
//  */
// export const getAlertsList=(referrer,queryFilterString="")=>{
//     return dispatch => {
//         dispatch(startLoader(moduleType.alerts))
//         dispatch(clearAlerts())
//         let apiURL=`${apiHost}/alerts/${queryFilterString}`
//         axios({
//             url: apiURL,
//             method: 'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer}
//         })
//         .then(res=>{ 
//             console.log(res,"Response")
//             if(res.status===200)
//                 dispatch(setAlertList(res.data))
//             else
//                 dispatch(setResponseTime(res.data))
//             dispatch(stopLoader(moduleType.alerts))
//         })
//         .catch(err =>{
//             if(err.response){
//                 if(err.response.data.message!==undefined)
//                     dispatch(setAlertListErrorResponse(err.response.data.message))    
//                 else
//                     dispatch(setAlertListErrorResponse("Something went wrong; Please try again later."))
                    
//             }
//             else{
//                 // if(err.message==="Network Error")
//                 //     dispatch(setAlertListErrorResponse("Network Error"))
//                 // else    
//                     dispatch(setAlertListErrorResponse("Something went wrong; Please try again later."))
//             }
//             dispatch(stopLoader(moduleType.alerts))
//             console.log(err,"API ERROR")
//         });
//     }
// }

// /**
//  * @param  {string} referrer
//  * @param  {object} body
//  * @param  {string} queryFilterString=""
//  */
// export const sendRequestAlertAction=(referrer,body,queryFilterString="")=>{
//     let apiURL=queryFilterString!==""?`${apiHost}/alerts/action${queryFilterString}`:`${apiHost}/alerts/action`
//     return axios({
//             url:apiURL,
//             method:'post',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer},
//             data:body
//         })
// }

// /**
//  * 
//  * @param {} referrer 
//  * @param {*} queryFilterString 
//  */

// export const getDashboardAlertData=(referrer,queryFilterString="")=>{
//     return dispatch => {
//         dispatch(startLoader(moduleType.dashboard_alert))
//         dispatch(clearDashboardAlert())
//         let apiURL=`${apiHost}/dashboard/alerts${queryFilterString}`
//         axios({
//             url: apiURL,
//             method: 'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer}
//         })
//         .then(res=>{ 
//             console.log(res,"Response")
//             dispatch(setDashboardAlertData(res.data.response))
//             dispatch(stopLoader(moduleType.dashboard_alert))
//         })
//         .catch(err =>{
//             if(err.response){
//                 if(err.response.data.message!==undefined)
//                     dispatch(setDashboardAlertErrorResponse(err.response.data.message))
//                 else
//                     dispatch(setDashboardAlertErrorResponse("Something went wrong; Please try again later."))
                    
//             }
//             else{
//                 // if(err.message==="Network Error")
//                 //     dispatch(setDashboardAlertErrorResponse("Network Error"))
//                 // else    
//                     dispatch(setDashboardAlertErrorResponse("Something went wrong; Please try again later."))
//             }
//             dispatch(stopLoader(moduleType.dashboard_alert))
//             console.log(err,"API ERROR")
//         });
//     }
// }

// /**
//  * @param {*} referrer 
//  * @param {*} queryFilterString 
//  */
// export const getDashboardEndpointData=(referrer,queryFilterString="")=>{
//     return dispatch => {
//         dispatch(startLoader(moduleType.dashboard_endpoint))
//         dispatch(clearDashboardEndpoint())
//         let apiURL=`${apiHost}/dashboard/endpoints${queryFilterString}`
//         axios({
//             url: apiURL,
//             method: 'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer}
//         })
//         .then(res=>{ 
//             console.log(res,"Response")
//             dispatch(setDashboardEndpointData(res.data.response))
//             dispatch(stopLoader(moduleType.dashboard_endpoint))
//         })
//         .catch(err =>{
//             if(err.response){
//                 if(err.response.data.message!==undefined)
//                     dispatch(setDashboardEndpointErrorResponse(err.response.data.message))
//                 else
//                     dispatch(setDashboardEndpointErrorResponse("Something went wrong; Please try again later."))
                    
//             }
//             else{
//                 // if(err.message==="Network Error")
//                 //     dispatch(setDashboardEndpointErrorResponse("Network Error"))
//                 // else    
//                     dispatch(setDashboardEndpointErrorResponse("Something went wrong; Please try again later."))
//             }
//             dispatch(stopLoader(moduleType.dashboard_endpoint))
//             console.log(err,"API ERROR")
//         });
//     }
// }


// /**
//  * @param {*} referrer 
//  * @param {*} queryFilterString 
//  */
// export const getAuditlogList=(referrer,queryFilterString="")=>{
//     return dispatch => {
//         dispatch(startLoader(moduleType.audit_log))
//         dispatch(clearAuditLogData())
//         let apiURL=`${apiHost}/auditlogs/${queryFilterString}`
//         console.log(apiURL)
//         axios({
//             url: apiURL,
//             method: 'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer}
//         })
//         .then(res=>{ 
//             console.log(res,"Response")
//             dispatch(setAuditLogData(res.data.response))
//             dispatch(stopLoader(moduleType.audit_log))
//         })
//         .catch(err =>{
//             console.log(err,"Response")
//             if(err.response){
//                 if(err.response.data.message!==undefined)
//                     dispatch(setAuditLogErrorResponse(err.response.data.message))
//                 else
//                     dispatch(setAuditLogErrorResponse("Something went wrong; Please try again later."))
                    
//             }
//             else{
//                 // if(err.message==="Network Error")
//                 //     dispatch(setDashboardEndpointErrorResponse("Network Error"))
//                 // else   
//                     dispatch(setAuditLogErrorResponse("Something went wrong; Please try again later."))
//             }
//             dispatch(stopLoader(moduleType.audit_log))
//             console.log(err,"API ERROR")
//         });
//     }
// }


// /**
//  * @param  {string} queryFilterString=""
//  */
// export const senduploadCSVData=(referrer,type,requestBody,queryFilterString="")=>{
//     let apiURL=queryFilterString!==""?`${apiHost}/deployment/upload${queryFilterString}&type=${type}`:`${apiHost}/deployment/upload?type=${type}`
//     return axios({
//             url:apiURL,
//             method:'post',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer},
//             data:requestBody
//     })
// }

// /**
//  * @param  {object} reqestBody
//  * @param  {string} referrer
//  * @param  {string} queryFilterString=""
//  */
// export const sendDeploymentSettings=(reqestBody,referrer,queryFilterString="")=>{
//     let apiURL=queryFilterString!==""?`${apiHost}/deployment/${queryFilterString}`:`${apiHost}/deployment/`
//     return axios({
//             url:apiURL,
//             method:'post',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer},
//             data:reqestBody
//         })
// }

// /**
//  * @param  {string} referrer
//  * @param  {string} queryFilterString=""
//  */
// export const checkDeploymentExist=(referrer,type,queryFilterString="")=>{
//     let apiURL=queryFilterString!==""?`${apiHost}/deployment/upload${queryFilterString}&type=${type}`:`${apiHost}/deployment/upload?type=${type}`
//     return axios({
//             url:apiURL,
//             method:'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer},
//         })
// }

// /**
//  * @param  {string} referrer
//  * @param  {string} queryFilterString=""
//  */
// export const sendRequestTenantTokenEdit = (referrer,body,queryFilterString="")=>{
//     let apiURL=queryFilterString!==""?`${apiHost}/tenants/${queryFilterString}`:`${apiHost}/tenants/`
//     return axios({
//             url:apiURL,
//             method:'put',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer},
//             data:body
//         })
// }

// /**
//  * @param  {string} referrer
//  * @param  {string} queryFilterString=""
//  */
// export const getDeploymentData=(referrer,queryFilterString="")=>{
//     let apiURL=queryFilterString!==""?`${apiHost}/deployment/${queryFilterString}`:`${apiHost}/deployment/`
//     return axios({
//             url:apiURL,
//             method:'get',
//             headers: {Pragma: 'no-cache','X-CUSTOM-REFERRER':referrer},
//         })
// }

// /**
//  * Below are operations for resetting redux store variables
//  */
// export const clearSettingsResponseMessage=()=>{
//     return dispatch =>{
//         dispatch(clearSettingsResponse())
//     }
// }

// export const clearNextPossibleResponseMessage=()=>{
//     return dispatch =>{
//         dispatch(clearResponseTime())
//     }
// }

// export const clearTenantErrorResponseMessage=()=>{
//     return dispatch =>{
//         dispatch(clearTenantErrorResponse())
//     }
// }

// export const clearEndpointErrorResponseMessage=()=>{
//     return dispatch =>{
//         dispatch(clearEndpointErrorResponse())
//     }
// }


// export const clearAssetErrorResponseMessage=()=>{
//     return dispatch =>{
//         dispatch(clearAssetErrorResponse())
//     }
// }

// export const clearAlertsErrorResponseMessage=()=>{
//     return dispatch =>{
//         dispatch(clearAlertsErrorResponse())
//     }
// }

// export const setTenantListErrorResponseMessage=(message)=>{
//     return dispatch =>{
//         dispatch(setTenantListErrorResponse(message))
//     }
// }

// export const clearDashboardAlertErrorResponseMessage=()=>{
//     return dispatch =>{
//         dispatch(clearDashboardAlertErrorResponse())
//     }
// }

// export const clearDashboardEndpointErrorResponseMessage=()=>{
//     return dispatch =>{
//         dispatch(clearDashboardEndpointErrorResponse())
//     }
// }


// export const clearAuditLogListErrorResponseMessage=()=>{
//     return dispatch => {
//         dispatch(clearAuditLogErrorResponse())
//     }
// }

// export const setAuditLogListErrorResponseMessage=(message)=>{
//     return dispatch=>{
//         dispatch(setAuditLogErrorResponse(message))
//     }
// }

// export const clearEndpointsTable=()=>{
//     return dispatch =>{
//         dispatch(clearEndpoints())
//     }
// }

// export const clearAssetsTable=()=>{
//     return dispatch =>{
//         dispatch(clearAssets())
//     }
// }

// export const clearAlertsTable=()=>{
//     return dispatch =>{
//         dispatch(clearAlerts())
//     }
// }

// export const clearDashboardAlertData=()=>{
//     return dispatch =>{
//         dispatch(clearDashboardAlert())
//     }
// }

// export const clearDashboardEndpointData=()=>{
//     return dispatch =>{
//         dispatch(clearDashboardEndpoint())
//     }
// }

// export const setSettingsData=(data)=>{
//     return dispatch =>{
//         dispatch(getCurrentSettingResponse(data))
//     }
// }