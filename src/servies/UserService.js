import axios from "axios";

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

    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    }
}

export default new UserService()