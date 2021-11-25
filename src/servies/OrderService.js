import axios from "axios";
import jwt_decode from 'jwt-decode';
import UserService from "./UserService";

const API_URL = "https://book-shop-course.herokuapp.com/api/v1";

class OrderService {


    addItemToOrder(bookId) {
        let jwt = localStorage["access_token"];
        if (jwt) {
            let decode = jwt_decode(jwt);
            let username = decode["sub"]
            UserService.getUserByUserName(username).then((res) => {
                return axios.post(API_URL + '/orders/',
                    {
                        "userId": res.data.id,
                        "bookId": bookId
                    }).then(() => {
                        alert("Товар добавлен в корзину")
                });
            });
        } else {
            alert('Необходимо залогиниться что бы совершить покупку')
        }
    }

    basketList() {
        let jwt = localStorage["access_token"];
        if (jwt) {
            let decode = jwt_decode(jwt);
            let username = decode["sub"]
            return UserService.getUserByUserName(username).then((res) => {
                return axios.get(API_URL + '/orders/books/user/' + res.data.id + '/');
            });
        }
    }

    getAllOrders() {
        return axios.get(API_URL + '/orders/');
    }

    deleteOrder(id) {
        let jwt = localStorage["access_token"];
        UserService.isAuth();
        let decode = jwt_decode(jwt);
        let username = decode["sub"]
        UserService.getUserByUserName(username).then((res) => {
            return axios.delete(API_URL + '/orders/' + id + '/', {
                headers: {
                    Authorization: 'Bearer ' + jwt
                }
            })
        });
    }

}

export default new OrderService()