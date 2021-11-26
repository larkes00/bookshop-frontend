import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import CategoryService from "../../../servies/CategoryService";

class AdminUpdateCategoryComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: ''
        }

        this.changeCategoryNameHandler = this.changeCategoryNameHandler.bind(this);
    }

    changeCategoryNameHandler(event) {
        this.setState({name: event.target.value})
    }

    update = (event) => {
        event.preventDefault();
        CategoryService.updateCategory(this.state.id, this.state.name).then((res) => {
            console.log(res.data)
        });
        this.props.history.push('/admin');
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
                        <Button variant="primary" type="submit" onClick={this.update}>
                            Создать
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default AdminUpdateCategoryComponent;