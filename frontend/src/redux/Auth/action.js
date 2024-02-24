import { LOGINREQUEST, LOGINREQUESTFAILURE, LOGINREQUESTSUCCESS } from "../actionType";

export const loginRequest = () => {
  return { type: LOGINREQUEST };
};

export const loginRequestSuccess=(payload)=>{
    return {type:LOGINREQUESTSUCCESS,payload}
}

export const loginRequestFailure=()=>{
    return {type:LOGINREQUESTFAILURE}
}
