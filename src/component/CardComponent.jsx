import React, {Component} from 'react';
import OrderService from "../servies/OrderService";
import {Button, Image, Table} from "react-bootstrap";

class CardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            fullPrice: ''
        }
    }

    componentDidMount() {
        OrderService.basketList().then((res) => {
            this.setState({items: res.data.books})
            let price = 0;
            res.data.books.map(book => price += book.price)
            this.setState({fullPrice: price});
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
                    <Button className="text-center" style={{width: '7rem', 'font-size': '1.2rem'}}>Заказать</Button>
                </div>
            </div>
        );
    }
}

export default CardComponent;