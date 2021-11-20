import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import UserService from "../servies/UserService";

class RegistrationComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            secondName: '',
            firstName: '',
            patronymic: '',
            userName: '',
            password: '',
            emailAddress: '',
            phoneNumber: ''
        }

        this.changeSecondNameHandler = this.changeSecondNameHandler.bind(this);
        this.changeFirstnameHandler = this.changeFirstnameHandler.bind(this);
        this.changePatronymicHandler = this.changePatronymicHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.registration = this.registration.bind(this);
    }

    registration = (event) => {
        event.preventDefault();
        let user = {
            secondName: this.state.secondName,
            firstName: this.state.firstName,
            patronymic: this.state.patronymic,
            userName: this.state.userName,
            password: this.state.password,
            emailAddress: this.state.emailAddress,
            phoneNumber: this.state.phoneNumber
        }
        UserService.registration(user).then((res) => {
            if (res.status === 200) {
                this.props.history.push('/login');
                console.log(res)
            } else {
                alert('Не правильно введенные данные')
            }
        })
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

    changeUserNameHandler(event) {
        this.setState({userName: event.target.value})
    }

    changePasswordHandler(event) {
        this.setState({password: event.target.value})
    }

    changeEmailAddressHandler(event) {
        this.setState({emailAddress: event.target.value})
    }

    changePhoneNumberHandler(event) {
        this.setState({phoneNumber: event.target.value})
    }

    render() {
        return (
            <div className="container">
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
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Логин</Form.Label>
                            <Form.Control type="text" placeholder="Логин" onChange={this.changeUserNameHandler}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="Пароль" onChange={this.changePasswordHandler}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmailAddress">
                            <Form.Label>Почта</Form.Label>
                            <Form.Control type="email" placeholder="Почта" onChange={this.changeEmailAddressHandler}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control type="text" placeholder="Номер телефона"
                                          onChange={this.changePhoneNumberHandler}/>
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="primary" type="submit" onClick={this.registration}>
                                Регистрироваться
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default RegistrationComponent;