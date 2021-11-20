import axios from "axios";

const API_URL = "https://book-shop-course.herokuapp.com/api/v1";

class CategoryService {

    getCategories() {
        return axios.get(API_URL + '/categories/');
    }

    getCategory(id) {
        return axios.get(API_URL + '/categories/' + id);
    }
}

export default new CategoryService();