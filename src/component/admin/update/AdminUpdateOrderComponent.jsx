import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import OrderService from "../../../servies/OrderService";

class AdminUpdateOrderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            status: ''
        }

        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.update = this.update.bind(this);
    }

    changeStatusHandler(event) {
        this.setState({status: event.target.value})
    }

    update = (event) => {
        event.preventDefault();
        OrderService.setDestinationAddress(this.state.id, "", this.state.status).catch(() => {
            alert("Произошла ошибка")
        });
        this.props.history.push('/admin')
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3 offset-md-3">
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Статус</Form.Label>
                        <Form.Control placeholder="Введите статус заказа"
                                      onChange={this.changeStatusHandler}/>
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

export default AdminUpdateOrderComponent;