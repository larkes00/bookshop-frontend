import React, {Component} from 'react';
import UserService from "../servies/UserService";
import jwt_decode from "jwt-decode";
import {Button, Table} from "react-bootstrap";
import OrderService from "../servies/OrderService";
import {Link} from "react-router-dom";

class ProfileComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            username: '',
            firstName: '',
            secondName: '',
            patronymic: '',
            email: '',
            phoneNumber: '',
            orders: []
        }
    }

    componentDidMount() {
        let jwt = localStorage["access_token"];
        let decode = jwt_decode(jwt);
        UserService.getUserByUserName(decode["sub"]).then((res) => {
            this.setState({username: res.data.username});
            this.setState({firstName: res.data.firstName});
            this.setState({secondName: res.data.secondName});
            this.setState({patronymic: res.data.patronymic});
            this.setState({email: res.data.email});
            this.setState({phoneNumber: res.data.phoneNumber});
            this.setState({id: res.data.id});
            OrderService.getUserOrders(res.data.id).then((res) => {
                this.setState({orders: res.data});
                console.log(res.data)
            })
        })

    }

    render() {
        return (
            <div>
                <div className="row m-5">
                    <Table borderless size="sm">
                        <thead>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{width: '10vw'}}>Логин:</td>
                            <td>{this.state.username}</td>
                        </tr>
                        <tr>
                            <td>Фамилия:</td>
                            <td>{this.state.secondName}</td>
                        </tr>
                        <tr>
                            <td>Имя:</td>
                            <td>{this.state.firstName}</td>
                        </tr>
                        <tr>
                            <td>Отчество:</td>
                            <td>{this.state.patronymic}</td>
                        </tr>
                        <tr>
                            <td>Почта:</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td>Номер телефона:</td>
                            <td>{this.state.phoneNumber}</td>
                        </tr>
                        </tbody>
                    </Table>
                    <div className="row">
                        <Link to={`/profile/${this.state.id}/change`}>
                            <Button>Изменить</Button>
                        </Link>
                    </div>
                </div>
                <div className="row" style={{width: '95vw'}}>
                    <h4 style={{"margin-left": '2rem'}}>Заказы</h4>
                    {this.state.orders.map(
                        order =>
                            <div className="row m-3">
                                <div className="row">
                                    <div className="col"><b>Номер заказа</b></div>
                                    <div className="col"><b>Статус заказа</b></div>
                                    <div className="col"><b>Адресс дсотавки</b></div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {order.orderId}
                                    </div>
                                    <div className="col">
                                        {order.status}
                                    </div>
                                    <div className="col">
                                        {order.deliveryAddress}
                                    </div>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ProfileComponent;