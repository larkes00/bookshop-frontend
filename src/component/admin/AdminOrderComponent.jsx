import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import OrderService from "../../servies/OrderService";

class AdminOrderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        OrderService.getAllOrders().then((res) => {
            this.setState({orders: res.data})
            console.log(this.state.orders)
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
                        <Button>Добавить заказ</Button>
                    </div>
                    <div className="row">
                        <div className="col">ID</div>
                        <div className="col">Статус</div>
                        <div className="col">Адресс доставки</div>
                        <div className="col">ID товаров</div>
                        <div className="col"/>
                    </div>
                    <br/>
                    {this.state.orders.map(
                        order =>
                            <div className="row">
                                <div className="col">{order.orderId}</div>
                                <div className="col">{order.status}</div>
                                <div className="col">{order.deliveryAddress}</div>
                                <div className="col">{order.books}</div>
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

export default AdminOrderComponent;