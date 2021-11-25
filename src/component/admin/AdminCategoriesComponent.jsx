import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import CategoryService from "../../servies/CategoryService";

class AdminCategoriesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    componentDidMount() {
        CategoryService.getCategories().then((res) => {
            this.setState({categories: res.data})
        })
    }

    deleteCategory = (event) => {
        event.preventDefault();
        let id = event.target.value;
        CategoryService.deleteCategory(id);
        setTimeout(time => {
            window.location.reload(false);
        }, 1500);
    }

    render() {
        return (
            <div className="container">
                <div className="col m-2">
                    <Link class="m-2" to="/admin"><Button>Книги</Button></Link>
                    <Link class="m-2" to="/admin/categories"><Button>Категории</Button></Link>
                    <Link class="m-2" to="/admin/comments"><Button>Комментарии</Button></Link>
                    <Link class="m-2" to="/admin/orders"><Button>Заказы</Button></Link>
                    <Link class="m-2" to="/admin/users"><Button>Пользователи</Button></Link>
                </div>
                <div className="col">
                    <div className="m-3">
                        <Button>Добавить категорию</Button>
                    </div>
                    <div className="row">
                        <div className="col">ID</div>
                        <div className="col">Категория</div>
                        <div className="col"/>
                    </div>
                    <br/>
                    {this.state.categories.map(
                        category =>
                            <div className="row">
                                <div className="col">{category.categoryId}</div>
                                <div className="col">{category.name}</div>
                                <div className="col">
                                    <Button className="m-l" value={category.categoryId}
                                            onClick={this.deleteCategory}>Удалить</Button>
                                    <Button className="m-1">Изменить</Button>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        );
    }
}

export default AdminCategoriesComponent;