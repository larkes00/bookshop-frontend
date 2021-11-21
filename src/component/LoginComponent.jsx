import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import UserService from "../servies/UserService";
import {Redirect} from "react-router-dom";

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            redirect: false
        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.login = this.login.bind(this);
    }

    login = (event) => {
        event.preventDefault();
        console.log(this.state.username, this.state.password)
        UserService.login(this.state.username, this.state.password).then((res) => {
            this.props.history.push('/');
            window.location.reload(false);
        }).catch(() => {
            alert('Не правильно введено данные');
        });
    }


    changeUserNameHandler(event) {
        this.setState({username: event.target.value})
    }

    changePasswordHandler(event) {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-6 offset-md-3 offset-md-3">
                    <div className="container">
                        <Form>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label>Логин</Form.Label>
                                <Form.Control type="username" placeholder="Введите логин" name="username"
                                              onChange={this.changeUserNameHandler}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль" name="password"
                                              onChange={this.changePasswordHandler}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.login}>
                                Войти
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;