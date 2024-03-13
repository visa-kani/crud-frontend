import {PutDataAPI} from "./action";
import URLS from "./urls"

const ViewUserDetails = (params, id) => {
    return PutDataAPI(URLS.user_details, params, id)
}

export {ViewUserDetails}