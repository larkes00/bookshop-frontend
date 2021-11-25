import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import UserService from "../../servies/UserService";
import OrderService from "../../servies/OrderService";

class AdminUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }

        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        UserService.getAllUsers().then((res) => {
            this.setState({users: res.data})
        })
    }

    deleteUser = (event) => {
        event.preventDefault();
        let id = event.target.value;
        UserService.deleteUser(id);
        setTimeout(time => {
            window.location.reload(false);
        }, 1500);
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
                        <Button>Добавить пользователя</Button>
                    </div>
                    <div className="row">
                        <div className="col">ID</div>
                        <div className="col">Логин</div>
                        <div className="col">Почта</div>
                        <div className="col">Номер телефона</div>
                        <div className="col"/>
                    </div>
                    <br/>
                    {this.state.users.map(
                        user =>
                            <div className="row">
                                <div className="col">{user.userId}</div>
                                <div className="col">{user.username}</div>
                                <div className="col">{user.email}</div>
                                <div className="col">{user.phoneNumber}</div>
                                <div className="col">
                                    <Button className="m-l" value={user.userId}
                                            onClick={this.deleteUser}>Удалить</Button>
                                    <Button className="m-1">Изменить</Button>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        );
    }
}

export default AdminUserComponent;