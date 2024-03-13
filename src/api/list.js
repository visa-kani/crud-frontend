import {getListByAPI} from "./action";
import URLS from "./urls"

const GetUserDetails = (params) => {
    return getListByAPI(URLS.user_details, params)
}

export {GetUserDetails}