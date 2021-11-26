import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import CategoryService from "../../../servies/CategoryService";

class AdminCreateCategoryComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

        this.changeCategoryNameHandler = this.changeCategoryNameHandler.bind(this);
    }

    changeCategoryNameHandler(event) {
        this.setState({name: event.target.value})
    }

    create = (event) => {
        event.preventDefault();
        CategoryService.createCategory(this.state.name);
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3 offset-md-3">
                <Form>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Название категории</Form.Label>
                        <Form.Control placeholder="Введите название категории"
                                      onChange={this.changeCategoryNameHandler}/>
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

export default AdminCreateCategoryComponent;