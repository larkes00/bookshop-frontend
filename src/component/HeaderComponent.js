import React, {Component} from 'react';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import CategoryListComponent from "./CategoryListComponent";
import UserService from "../servies/UserService";
import {Link} from "react-router-dom";


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
                            <Navbar.Brand href="/">BookShop</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
                                <Nav>
                                    <Nav.Link href="/">Главная</Nav.Link>
                                    <CategoryListComponent/>
                                </Nav>
                                <Nav className="position-relative">
                                    <div>
                                        <Navbar.Brand href="/orders" className="">
                                            <Image src="/Basket.png" className="m-2" style={{width: '1.8rem'}}/>Корзина
                                        </Navbar.Brand>
                                        <Navbar.Brand href="/" onClick={this.logout}>Выход</Navbar.Brand>
                                    </div>
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
                        <Navbar.Brand href="#home">BookShop</Navbar.Brand>
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