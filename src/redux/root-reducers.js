/** **************************** Import Libs ****************************** */
import { combineReducers } from "redux";
/** **************************** Import Reducers ****************************** */
import userDetailsReducer from "./reducer/user-details.reducer";


const rootReducer = combineReducers({
  userData: userDetailsReducer,

});

export default rootReducer;