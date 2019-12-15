import axios from 'axios'

export function getToken() {
    return localStorage.getItem("token");
}

export default function() {
    return axios.create({
        baseURL: "https://refu-stories-api.herokuapp.com/",
        headers: {
            Authorization: getToken(),
        },
    })
}