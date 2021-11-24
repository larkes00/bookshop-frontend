import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import CommentService from "../../servies/CommentService";

class AdminCommentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        CommentService.getAllComments().then((res) => {
            this.setState({comments: res.data})
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="col m-2">
                    <Link class="m-2" to="/admin"><Button>Книги</Button></Link>
                    <Link class="m-2" to="/admin/categories"><Button>Категории</Button></Link>
                    <Link class="m-2" to="/admin/comments"><Button>Комментарии</Button></Link>
                    <Link class="m-2" to="/admin/orders"><Button>Заказы</Button></Link>
                    <Link class="m-2" to="/admin/users"><Button>Пользователи</Button></Link>
                </div>
                <div className="col">
                    <div className="m-3">
                        <Button>Добавить комментарий</Button>
                    </div>
                    <div className="row">
                        <div className="col">ID</div>
                        <div className="col">Содержимое</div>
                        <div className="col">User ID</div>
                        <div className="col">Book ID</div>
                        <div className="col"/>
                    </div>
                    <br/>
                    {this.state.comments.map(
                        comment =>
                            <div className="row">
                                <div className="col">{comment.id}</div>
                                <div className="col">{comment.content}</div>
                                <div className="col">{comment.userId}</div>
                                <div className="col">{comment.bookId}</div>
                                <div className="col">
                                    <Button className="m-l">Удалить</Button>
                                    <Button className="m-1">Изменить</Button>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        );
    }
}

export default AdminCommentComponent;