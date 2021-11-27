import React, {Component} from 'react';
import OrderService from "../servies/OrderService";
import {Button, Form, Image, Table} from "react-bootstrap";

class CardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderId: '',
            items: [],
            fullPrice: '',
            address: ''
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.changeDestinationAddressHandler = this.changeDestinationAddressHandler.bind(this);
    }

    componentDidMount() {
        OrderService.basketList().then((res) => {
            this.setState({items: res.data[0].books})
            let price = 0;
            res.data[0].books.map(book => price += book.price)
            this.setState({fullPrice: price});
            this.setState({orderId: res.data[1].orderId})
        });
    }

    changeDestinationAddressHandler(event) {
        this.setState({address: event.target.value});
    }

    deleteItem = (event) => {
        OrderService.deleteItemFromOrder(this.state.orderId, event.target.value);
        window.location.reload();
    }

    orderedItems = (event) => {
        event.preventDefault();
        if (!this.state.address) {
            alert("Не установлено адресс доставки");
        }
        if (this.state.items.length === 0) {
            alert("Нет товаров для заказа");
        }
        OrderService.setDestinationAddress(this.state.orderId, this.state.address, "Обрабатывается")
            .then((res) => {
                alert('Заказ создан');
                this.props.history.goBack();
            }).catch((res) => {
            alert('Произошла ошибка');
        });
    }

    render() {
        return (
            <div className="container">
                <Table striped bordered hover className="text-center m-3">
                    <thead>
                    <tr>
                        <th>Изображение</th>
                        <th>Название товара</th>
                        <th>Цена</th>
                    </tr>
                    </thead>
                    {
                        this.state.items.map(
                            item =>
                                <tbody>
                                <tr class="text-center">
                                    <td>
                                        <Image
                                            src={item.image}
                                            style={{width: '7rem'}}
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td style={{width: '2rem'}}>
                                        <Button value={item.bookId} onClick={this.deleteItem}>Удалить</Button>
                                    </td>
                                </tr>
                                </tbody>
                        )
                    }
                    <tr className="text-center">
                        <td colSpan="1" style={{'font-size': '1.2rem'}}><b>Итоговая цена: </b></td>
                        <td></td>
                        <td colSpan="1" style={{'font-size': '1.2rem'}}><b>{this.state.fullPrice} грн</b>
                        </td>
                    </tr>
                </Table>
                <div className="col text-center m-3">
                    <Form className="col-md-6 offset-md-3 offset-md-3">
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Адресс доставки</Form.Label>
                            <Form.Control type="username" placeholder="Введите адресс доставки"
                                          onChange={this.changeDestinationAddressHandler}/>
                        </Form.Group>
                        <Button className="text-center" style={{width: '7rem', 'font-size': '1.2rem'}}
                                onClick={this.orderedItems}>Заказать</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default CardComponent;