import axios from "axios";

const API_URL = "https://book-shop-course.herokuapp.com/api/v1";

class BookService {

    getBooks() {
        return axios.get(API_URL + '/books/');
    }

    getBook(id) {
        return axios.get(API_URL + '/books/' + id + '/');
    }


    createBook() {
        return axios.post(API_URL + '/books/');
    }

    deleteBook(id) {
        return axios.delete(API_URL + '/books/' + id)
    }

}

export default new BookService()