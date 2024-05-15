import axios from "axios"
const baseUrl = 'https://dataneouron.onrender.com/api';
const setAxiosDefaultConfig = () => {
    axios.defaults.baseURL = baseUrl;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}
const custom = (config={},timeOut=2000) => {
    return axios(config)
}

export const HttpClient = {
    setAxiosDefaultConfig,
    custom,
}