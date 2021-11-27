import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import UserService from "../servies/UserService";

class ChangeUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            secondName: '',
            patronymic: '',
            phoneNumber: ''
        }

        this.changeSecondNameHandler = this.changeSecondNameHandler.bind(this);
        this.changeFirstnameHandler = this.changeFirstnameHandler.bind(this);
        this.changePatronymicHandler = this.changePatronymicHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    }

    changeSecondNameHandler(event) {
        this.setState({secondName: event.target.value})
    }

    changeFirstnameHandler(event) {
        this.setState({firstName: event.target.value})
    }

    changePatronymicHandler(event) {
        this.setState({patronymic: event.target.value})
    }

    changePhoneNumberHandler(event) {
        this.setState({phoneNumber: event.target.value})
    }

    update = (event) => {
        event.preventDefault();
        UserService.update(
            this.state.id, this.state.firstName, this.state.secondName, this.state.patronymic, this.state.phoneNumber)
            .then((res) => {
                this.props.history.push('/')
            }).catch((res) => {
                alert("Данные введены не правильно");
        });
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3 offset-md-3">
                <Form>
                    <Form.Group className="mb-3" controlId="formSecondName">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" placeholder="Фамилия" onChange={this.changeSecondNameHandler}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Имя" onChange={this.changeFirstnameHandler}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPatronymic">
                        <Form.Label>Оттчество</Form.Label>
                        <Form.Control type="text" placeholder="Оттчество" onChange={this.changePatronymicHandler}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Label>Номер телефона</Form.Label>
                        <Form.Control type="text" placeholder="Номер телефона"
                                      onChange={this.changePhoneNumberHandler}/>
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

export default ChangeUserComponent;