import axios from "axios";
import UserService from "./UserService";

const API_URL = "https://book-shop-course.herokuapp.com/api/v1";

class BookService {

    getBooks() {
        return axios.get(API_URL + '/books/');
    }

    getBook(id) {
        return axios.get(API_URL + '/books/' + id + '/');
    }


    createBook(name, description, price, booksAvailableNumber, categoryId, image) {
        let jwt = localStorage["access_token"];
        UserService.isAuth();
        return axios.post(API_URL + '/books/',
            {
                "name": name,
                "description": description,
                "image": image,
                "price": price,
                "booksAvailableNumber": booksAvailableNumber,
                "category": {"categoryId": categoryId}
            },
            {
                headers: {
                    Authorization: 'Bearer ' + jwt
                }
            });
    }

    deleteBook(id) {
        let jwt = localStorage["access_token"];
        UserService.isAuth();
        return axios.delete(API_URL + '/books/' + id + '/', {
            headers: {
                Authorization: 'Bearer ' + jwt
            }
        });
    }

    getBookComments(id) {
        return axios.get(API_URL + '/books/' + id + '/comments/');
    }

    updateBook(id, price, booksAvailableNumber) {
        const formData = new FormData();
        formData.append('price', price);
        formData.append("booksAvailableNumber", booksAvailableNumber)
        let jwt = localStorage["access_token"];
        UserService.isAuth();
        return axios.patch(API_URL + '/books/' + id + '/', formData,
            {
                headers: {
                    Authorization: 'Bearer ' + jwt
                }
            });
    }

}

export default new BookService()