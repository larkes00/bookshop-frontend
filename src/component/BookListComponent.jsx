import React, {Component} from 'react';
import BookService from "../servies/BookService";
import {Card, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class BookListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        BookService.getBooks().then((res) => {
            this.setState({books: res.data});
        });
    }

    render() {
        return (
            <div>
                <div className="" style={{margin: '2em 2em 0 10em'}}>
                    <Row xs={1} md={2} className="g-4">
                        {
                            this.state.books.map(
                                books =>
                                    <Card className="m-4 p-3" style={{width: '16rem', height: '36rem'}}>
                                        <Card.Img className="rounded mx-auto d-block" variant="top" src={books.image}
                                                  style={{width: '12.5rem', height: '18rem'}}/>
                                        <Card.Body>
                                            <Card.Title>{books.name}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush text-center">
                                            <ListGroupItem>{books.category}</ListGroupItem>
                                            <ListGroupItem>{books.price} грн</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body className="text-center">
                                            <div className="col p-2">
                                                <Card.Link>
                                                    <Link to={`/book/${books.id}`}>
                                                        Подробности
                                                    </Link>
                                                </Card.Link>
                                            </div>
                                            <div className="col">
                                                <Card.Link href="#">Купить</Card.Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                            )
                        }
                    </Row>
                </div>
            </div>
        );
    }
}

export default BookListComponent;