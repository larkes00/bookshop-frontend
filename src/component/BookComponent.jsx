import React, {Component} from 'react';
import BookService from "../servies/BookService";
import {Button, FloatingLabel, Form, Image} from "react-bootstrap";
import UserService from "../servies/UserService";
import CommentService from "../servies/CommentService";

class BookComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: '',
            image: '',
            price: '',
            description: '',
            category: '',
            booksAvailableNumber: '',
            comment: '',
            comments: []
        }

        this.changeCommentHandler = this.changeCommentHandler.bind(this);
    }

    componentDidMount() {
        BookService.getBook(this.state.id).then((res) => {
            this.setState({name: res.data.name});
            this.setState({image: res.data.image});
            this.setState({price: res.data.price});
            this.setState({description: res.data.description});
            this.setState({category: res.data.category});
            this.setState({booksAvailableNumber: res.data.booksAvailableNumber});
        });
        BookService.getBookComments(this.state.id).then((res) => {
            this.setState({comments: res.data});
        });
    }

    changeCommentHandler(event) {
        this.setState({comment: event.target.value});
    }

    setComment = (event) => {
        event.preventDefault();
        CommentService.createComment(this.state.id, this.state.comment);
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="book-name">
                        <h2><b>{this.state.name}</b></h2>
                    </div>
                </div>
                <div className="row" id="book-main">
                    <div className="col-sm-6 w-25 m-1">
                        <Image src={this.state.image} style={{width: '15rem', height: '25rem'}}/>
                    </div>
                    <div className="col-sm-6 w-25 text-right">
                        <Button>
                            Купить
                        </Button>
                        <div><b>{this.state.price}</b></div>
                    </div>
                </div>
                <div className="row" id="book-description">
                    <h4>Описание</h4>
                    <p align="justify">{this.state.description}</p>
                </div>
                <div className="row">
                    <div>
                        {
                            UserService.isAuth() ?
                                <div>
                                    <h4>Оставьте свой комментарий</h4>
                                    <Form>
                                        <FloatingLabel controlId="floatingTextarea2" label="Комментарий"
                                                       id="main-comment-form">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{height: '100px', width: '25rem'}}
                                                onChange={this.changeCommentHandler}/>
                                        </FloatingLabel>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            style={{'margin-top': '1rem', 'margin-bottom': '2rem'}}
                                            onClick={this.setComment}>
                                            Отправить
                                        </Button>
                                    </Form>
                                </div>
                                :
                                <div></div>
                        }
                        {
                            this.state.comments.length === 0 ?
                                <h4>Нету комментариев</h4>
                                :
                                <div>
                                    <h4 style={{'margin-bottom': '2rem'}}>Комментарии</h4>
                                    {
                                        this.state.comments.map(
                                            element =>
                                                <div>
                                                    <h5>{element.userName}</h5>
                                                    <p>{element.content}</p>
                                                </div>
                                        )
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default BookComponent;