import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8f36c27d-c62b-4873-a4aa-af81d0e7d3b3'
    },
    withCredentials: true
})
export const api = {
    getUsers(currentPage, count) {
        return  instance.get(`users?page=${currentPage}&count=${count}`)
            .then(response => response.data)
    },
    isLoggedIn() {
        return  instance.get(`auth/me`)
            .then(response => response.data)
    },
    getProfile(userId) {
        return  instance.get(`/profile/${userId}`)
            .then(response => response.data)
    }
}