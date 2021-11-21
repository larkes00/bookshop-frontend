import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import UserService from "../servies/UserService";

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.registration = this.registration.bind(this);
    }

    registration = (event) => {
        event.preventDefault();
        console.log(this.state.username, this.state.password)
        UserService.login(this.state.username, this.state.password).then((res) => {
            this.props.history.push('/');
        }).catch((res) => {
            console.log(res)
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
                            <Button variant="primary" type="submit" onClick={this.registration}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;