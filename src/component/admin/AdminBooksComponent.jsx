import React, {Component} from 'react';
import BookService from "../../servies/BookService";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

class AdminBooksComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        BookService.getBooks().then((res) => {
            let result = res.data.sort(res.data.id);
            this.setState({books: result});
        });
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
                        <Button>Добавить книгу</Button>
                    </div>
                    <div className="row">
                        <div className="col">ID</div>
                        <div className="col">Имя</div>
                        <div className="col">Категория</div>
                        <div className="col"/>
                    </div>
                    <br/>
                    {this.state.books.map(
                        book =>
                            <div className="row">
                                <div className="col">{book.id}</div>
                                <div className="col">{book.name}</div>
                                <div className="col">{book.category}</div>
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

export default AdminBooksComponent;