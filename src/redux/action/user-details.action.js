/** **************************** Import Types ****************************** */
import {
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAILURE,
    USER_DETAILS_REQUEST,
  } from "../types/user-details.types";
  import { GetUserDetails } from "../../api/list";
  import {CreateUserDetails} from "../../api/create"
  import { ViewUserDetails } from "../../api/update";
  import { DeleteUserDetails } from "../../api/delete";
  
  export const userRequest = () => ({
    type: USER_DETAILS_REQUEST,
  });
  export const userSuccess = (users) => ({
    type: USER_DETAILS_SUCCESS,
    payload: users,
  });
  export const userFailure = (error) => ({
    type: USER_DETAILS_FAILURE,
    payload: error,
  });

  export const CreateUser = (params) =>
  async function (dispatch) {
    dispatch(userRequest());
    return CreateUserDetails(params)
      .then((res) => {
        if (res) {
          dispatch(userSuccess(res));
          return res;
        }
        dispatch(userFailure(res?.message));
        return res?.message;
      })
      .catch((err) => {
        console.log(err)
        
      });
  };
  
  export const ListingUser = (params) =>
    async function (dispatch) {
      dispatch(userRequest());
      return GetUserDetails(params)
        .then((res) => {
          if (res) {
            dispatch(userSuccess(res));
            return res;
          }
          dispatch(userFailure(res?.message));
          return res?.message;
        })
        .catch((err) => {
          console.log(err)
          
        });
    };
  
  export const UpdateUser = (data, userId) =>
    async function (dispatch) {
      dispatch(userRequest());
      return ViewUserDetails(data, userId)
        .then((res) => {
          if (!res.code && !res.error) {
            dispatch(userSuccess({ responseStatus: "success" }));
            return res;
          }
          dispatch(userFailure(res.error));
          return res?.message || res.error;
        })
        .catch((err) => console.log("Catch Error:", err));
    };
  
  
  export const DeleteUser = (userId) =>
    async function (dispatch) {
      dispatch(userRequest());
      return DeleteUserDetails(userId)
        .then((res) => {
          if (res) {
            dispatch(userSuccess(res));
            return res;
          }
          dispatch(userFailure(res.message));
          return res.message;
        })
        .catch((err) => console.log("Catch Error:", err));
    };