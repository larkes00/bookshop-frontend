import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import BookService from "../../../servies/BookService";

class AdminUpdateBookComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            price: '',
            booksAvailableNumber: ''
        }
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeBooksAvailableNumberHandler = this.changeBooksAvailableNumberHandler.bind(this);
        this.update = this.update.bind(this);
    }

    changePriceHandler(event) {
        this.setState({price: event.target.value});
    }

    changeBooksAvailableNumberHandler(event) {
        this.setState({booksAvailableNumber: event.target.value});
    }

    update = (event) => {
        event.preventDefault();
        BookService.updateBook(this.state.id, this.state.price, this.state.booksAvailableNumber).catch(() => {
            alert("Произошла ошибка")
        });
        this.props.history.push("/admin");
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3 offset-md-3">
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Цена</Form.Label>
                        <Form.Control placeholder="Введите цену книги"
                                      onChange={this.changePriceHandler}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Количество</Form.Label>
                        <Form.Control placeholder="Введите доступное количество книг"
                                      onChange={this.changeBooksAvailableNumberHandler}/>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit" onClick={this.update}>
                            Изменить
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default AdminUpdateBookComponent;