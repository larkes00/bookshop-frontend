import axios from "axios";
import UserService from "./UserService";
import jwt_decode from "jwt-decode";

const API_URL = "https://book-shop-course.herokuapp.com/api/v1";

class CategoryService {

    getCategories() {
        return axios.get(API_URL + '/categories/');
    }

    getBooksByCategoryId(id) {
        return axios.get(API_URL + '/categories/' + id + '/books/');
    }

    deleteCategory(id) {
        let jwt = localStorage["access_token"];
        UserService.isAuth();
        let decode = jwt_decode(jwt);
        let username = decode["sub"]
        UserService.getUserByUserName(username).then((res) => {
            return axios.delete(API_URL + '/categories/' + id + '/', {
                headers: {
                    Authorization: 'Bearer ' + jwt
                }
            })
        });
    }
}

export default new CategoryService();