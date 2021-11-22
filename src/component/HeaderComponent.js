import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import CategoryListComponent from "./CategoryListComponent";
import UserService from "../servies/UserService";


class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout = () => {
        UserService.logout();
        localStorage.removeItem("isLogin");
        this.props.history.push('/');
    }


    render() {
        if (UserService.isAuth()) {
            return (
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="/">
                                <Navbar.Brand href="/">
                                    <Image src="/book-icon-72-191918.png" style={{width: '1.8rem'}}/>
                                </Navbar.Brand>
                                <Navbar.Brand href="/">
                                    Bookshop
                                </Navbar.Brand>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Главная</Nav.Link>
                                    <CategoryListComponent/>
                                </Nav>
                                <Nav>
                                    <a href="/orders">
                                        <Image
                                            src="/Basket.png"
                                            className="m-2"
                                            style={{width: '1.8rem'}}
                                            href="/orders"
                                        />
                                    </a>
                                    <Nav.Link href="/">Корзина</Nav.Link>
                                    <Nav.Link href="/">Профиль</Nav.Link>
                                    <Nav.Link href="/" onClick={this.logout}>Выход</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            )
        }
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <Navbar.Brand href="/">
                                <Image src="/book-icon-72-191918.png" style={{width: '1.8rem'}}/>
                            </Navbar.Brand>
                            <Navbar.Brand href="/">
                                Bookshop
                            </Navbar.Brand>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="/">Главная</Nav.Link>
                                <CategoryListComponent/>
                            </Nav>
                            <Nav>
                                <Navbar.Brand href="/login">Вход</Navbar.Brand>
                                <Navbar.Brand href="/registration" onClick={this.login}>Регистрация</Navbar.Brand>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default HeaderComponent;