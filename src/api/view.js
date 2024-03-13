import {ViewDataById} from "./action";
import URLS from "./urls"

const ViewUserDetails = (id) => {
    return ViewDataById(URLS.user_details, id)
}

export {ViewUserDetails}