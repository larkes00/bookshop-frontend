import axios from "axios";
import UserService from "./UserService";

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
        return axios.delete(API_URL + '/categories/' + id + '/', {
            headers: {
                Authorization: 'Bearer ' + jwt
            }
        });
    }

    createCategory(name) {
        let jwt = localStorage["access_token"];
        UserService.isAuth();
        return axios.post(API_URL + '/categories/',
            {
                "name": name
            },
            {
                headers: {
                    Authorization: 'Bearer ' + jwt
                }
            });
    }

    updateCategory(id, name) {
        let jwt = localStorage["access_token"];
        UserService.isAuth();
        return axios.put(API_URL + '/categories/' + id + '/', {
                "name": name
            },
            {
                headers: {
                    Authorization: 'Bearer ' + jwt
                }
            });
    }
}

export default new CategoryService();