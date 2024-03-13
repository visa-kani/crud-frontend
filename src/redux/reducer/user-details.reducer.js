/** **************************** Import Types ****************************** */
import {
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAILURE,
    USER_DETAILS_REQUEST,
  } from "../types/user-details.types";

const initialState = {
    userResponse: "",
    error: "",
    loading: false,
};
const userDetailsReducer = (state = initialState, action) => {

    switch (action.type) {
        case  USER_DETAILS_REQUEST:
          
            return {
              
                ...state,
                userResponse: "",
                loading: true,
            };
        case USER_DETAILS_SUCCESS:
            
            return {
                ...state,
                userResponse: action.payload,
                loading: false,
            };
        case USER_DETAILS_FAILURE:
          
            return {
                userResponse: "error",
                error: action.payload,
                loading: false,
            };
        default:
          
            return state;
    }
};
export default userDetailsReducer;