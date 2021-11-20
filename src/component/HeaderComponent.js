import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function ListCategoryComponent() {
    return null;
}

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">BookShop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="/">Главная</Nav.Link>
                                <ListCategoryComponent/>
                            </Nav>
                            <Nav>
                                <Navbar.Brand href="/login">Вход</Navbar.Brand>
                                <Navbar.Brand href="/register">Регистрация</Navbar.Brand>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default HeaderComponent;