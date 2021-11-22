import axios from "axios";
import jwt_decode from 'jwt-decode';

const API_URL = "https://book-shop-course.herokuapp.com/api/v1";

class UserService {

    login(username, password) {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        return axios.post(API_URL + '/login', formData).then(response => {
            localStorage.setItem("access_token", response.data["access_token"])
            localStorage.setItem("refresh_token", response.data["refresh_token"])
            return response.data;
        });
    }

    registration(user) {
        return axios.post(API_URL + '/users/', user);
    }

    isAuth() {
        let jwt = localStorage["access_token"];
        if (jwt) {
            let decode = jwt_decode(jwt);
            let tokenTime = decode["exp"]
            let time = new Date();
            if (tokenTime > time) {
                this.refreshAccessToken();
            }
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        return true;
    }

    refreshAccessToken() {
        let refreshToken = localStorage["refresh_token"];
        axios.get(API_URL + '/token/refresh/', {
            headers: {
                Authorization: 'Bearer ' + refreshToken
            }
        }).then((res) => {
            localStorage.setItem("access_token", res.data["access_token"])
            localStorage.setItem("refresh_token", res.data["refresh_token"])
        }).catch(() => {
            this.logout();
        });
    }

    getUserByUserName(username) {
        return axios.get(API_URL + '/users/' + username + '/');
    }
}

export default new UserService()