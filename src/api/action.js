import config from "../config";

const responseHandler = (response) => {
    if (response.status === 401) {
        console.log("401")
    } else if (response.status === 200) {
        return response;
    } else {
        return false;
    }
}

const errorHandler = () => {
    return false;
}

const getListByAPI = (requestUrl, params) => {
    let getParams = "?";
    const token = "token";

    if (params?.limit && params?.limit && params?.limit !== undefined) {
        getParams += `&limit=${params?.limit}`
    }

    if (token) {
        return fetch(
            `${config.ApiUrl}${requestUrl}${getParams}`,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer" + token,
                }
            }
        ).then((response) => {
            return responseHandler(response);
        }).then((result) => {
            return result.json()
        }).catch((error) => {
            errorHandler(error)
        })
    }
}

const ViewDataById = (requestUrl, dataId, params) => {
    let getParams = "?";
    const token = "token";

    if (params?.limit && params?.limit && params?.limit !== undefined) {
        getParams += `&limit=${params?.limit}`
    }

    if (token) {
        return fetch(
            `${config.ApiUrl}${requestUrl}/${dataId}${getParams}`,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer" + token,
                }
            }
        ).then((response) => {
            return responseHandler(response);
        }).then((result) => {
            return result.json()
        }).catch((error) => {
            errorHandler(error)
        })
    }
}


const PostDataAPI = (requestUrl, params) => {
    let getParams = "?";
    // const token = "token";

    // if (token) {
        return fetch(
            `${config.ApiUrl}${requestUrl}`,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer" ,
                },
                body: JSON.stringify(params)
            }
        ).then((response) => {
            return responseHandler(response);
        }).then((result) => {
            return result.json()
        }).catch((error) => {
            errorHandler(error)
        })
    }
// }


const PutDataAPI = (requestUrl, params, id) => {
    let getParams = "?";
    const token = "token";

    if (token) {
        return fetch(
            `${config.ApiUrl}${requestUrl}/${id}${getParams}`,
            {
                method: "PUT",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer" + token,
                },
                body: JSON.stringify(params)
            }
        ).then((response) => {
            return responseHandler(response);
        }).then((result) => {
            return result.json()
        }).catch((error) => {
            errorHandler(error)
        })
    }
}

const DeleteDataAPI = (requestUrl, id) => {
    let getParams = "?";
    const token = "token";

    if (token) {
        return fetch(
            `${config.ApiUrl}${requestUrl}/${id}`,
            {
                method: "DELETE",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer" + token,
                },
            }
        ).then((response) => {
            return responseHandler(response);
        }).then((result) => {
            return result.json()
        }).catch((error) => {
            errorHandler(error)
        })
    }
}

export { getListByAPI, ViewDataById, PostDataAPI, PutDataAPI, DeleteDataAPI }