import { HttpClient } from "./HttpClient"

export const createComponent = (data) => {
    const apiData = {
        method:"POST",
        url:"/dashboard",
        data:data
    }
    return HttpClient.custom(apiData)
}



export const getComponent = (data) => {
    const apiData = {
        method:"GET",
        url:"/dashboard",
    }
    return HttpClient.custom(apiData)
}


export const updateComponet = (data) => {
    const apiData = {
        method:"PUT",
        url:"/dashboard",
        data:data
    }
    return HttpClient.custom(apiData)
    
}

export const deleteComponent = (id) => {
    const apiData = {
        method:"DELETE",
        url:`/dashboard/${id}`,
    }
    return HttpClient.custom(apiData)
    
}