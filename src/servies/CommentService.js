import axios from "axios";
import jwt_decode from "jwt-decode";
import UserService from "./UserService";

const API_URL = "https://book-shop-course.herokuapp.com/api/v1";

class CommentService {

    createComment(id, content) {
        let jwt = localStorage["access_token"];
        UserService.isAuth();
        let decode = jwt_decode(jwt);
        let username = decode["sub"]
        UserService.getUserByUserName(username).then((res) => {
            return axios.post(API_URL + '/comments/',
                {
                    "content": content,
                    "book": {"bookId": id},
                    "user": {"userId": res.data.id}
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + jwt
                    }
                });
        });
    }

    getAllComments() {
        return axios.get(API_URL + '/comments/');
    }
}

export default new CommentService();