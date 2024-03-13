import {DeleteDataAPI} from "./action";
import URLS from "./urls"

const DeleteUserDetails = (id) => {
    return DeleteDataAPI(URLS.user_details, id)
}

export {DeleteUserDetails}