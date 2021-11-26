import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import BookService from "../../../servies/BookService";

class AdminCreateBookComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            price: '',
            booksAvailableNumber: '',
            categoryId: '',
            image: ''
        }
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeBooksAvailableNumberHandler = this.changeBooksAvailableNumberHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
    }

    changeImageHandler(event) {
        this.setState({image: event.target.value})
    }

    changeNameHandler(event) {
        this.setState({name: event.target.value})
    }

    changeDescriptionHandler(event) {
        this.setState({description: event.target.value})
    }

    changePriceHandler(event) {
        this.setState({price: event.target.value})
    }

    changeBooksAvailableNumberHandler(event) {
        this.setState({booksAvailableNumber: event.target.value})
    }

    changeCategoryHandler(event) {
        this.setState({categoryId: event.target.value})
    }

    create = (event) => {
        event.preventDefault();
        BookService.createBook(this.state.name,
            this.state.description,
            this.state.price,
            this.state.booksAvailableNumber,
            this.state.categoryId,
            this.state.image);
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3 offset-md-3">
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Название книги</Form.Label>
                        <Form.Control placeholder="Введите название книги"
                                      onChange={this.changeNameHandler}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control placeholder="Введите описание книги"
                                      onChange={this.changeDescriptionHandler}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Стоимость</Form.Label>
                        <Form.Control placeholder="Введите стоимость книги"
                                      onChange={this.changePriceHandler}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Количество</Form.Label>
                        <Form.Control placeholder="Введите количество книг"
                                      onChange={this.changeBooksAvailableNumberHandler}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Картинка</Form.Label>
                        <Form.Control placeholder="Введите ссылку картинки"
                                      onChange={this.changeImageHandler}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Категория</Form.Label>
                        <Form.Control placeholder="Введите ID категории"
                                      onChange={this.changeCategoryHandler}/>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit" onClick={this.create}>
                            Создать
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default AdminCreateBookComponent;