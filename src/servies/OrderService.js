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
}

export default new OrderService()