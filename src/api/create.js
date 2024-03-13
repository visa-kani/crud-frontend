import {PostDataAPI} from "./action";
import URLS from "./urls"

const CreateUserDetails = (params) => {
    return PostDataAPI(URLS.user_details, params)
}

export {CreateUserDetails}