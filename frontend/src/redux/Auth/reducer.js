import { LOGINREQUEST, LOGINREQUESTFAILURE, LOGINREQUESTSUCCESS } from "../actionType";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  token: "",
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGINREQUEST: {
      return { ...state, isSuccess:false,isError:false,isLoading:true};
    }
    case LOGINREQUESTSUCCESS:{
        console.log("success")
        return {...state,isLoading:false,isError:false,isSuccess:true,token:payload}
    }
    case LOGINREQUESTFAILURE:{
        return {...state,isLoading:false,isError:true,isSuccess:false}
    }

    default:
      return state;
  }
};
