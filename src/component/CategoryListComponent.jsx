import React, {Component} from 'react';
import {NavDropdown} from "react-bootstrap";
import CategoryService from "../servies/CategoryService";

class CategoryListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        CategoryService.getCategories().then((res) => {
            this.setState({categories: res.data});
        })
    }

    render() {
        return (
            <NavDropdown title="Категории" id="basic-nav-dropdown">
                {
                    this.state.categories.map(
                        category =>
                            <NavDropdown.Item key={category.categoryId}>
                                <div onClick={this.click}>{category.name}</div>
                            </NavDropdown.Item>
                    )
                }
            </NavDropdown>
        );
    }
}

export default CategoryListComponent;