import React, {Component} from 'react';
import BookService from "../servies/BookService";
import {Button, Card, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import OrderService from "../servies/OrderService";

class BookListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
        this.buy = this.buy.bind(this);
    }

    componentDidMount() {
        BookService.getBooks().then((res) => {
            this.setState({books: res.data});
        });
    }

    buy(event) {
        OrderService.addItemToOrder(event.target.value);
    }

    render() {
        return (
            <div>
                <div className="" style={{margin: '2em 2em 0 10em'}}>
                    <Row xs={1} md={2} className="g-4">
                        {
                            this.state.books.map(
                                books =>
                                    <Card className="m-4 p-3" style={{width: '16rem'}}>
                                        <div style={{transform: "rotate(0)"}}>
                                            <Card.Img className="rounded mx-auto d-block" variant="top"
                                                      src={books.image}
                                                      style={{width: '12.5rem', height: '18rem'}}/>
                                            <Card.Body>
                                                <Card.Title className="text-truncate">{books.name}</Card.Title>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush text-center">
                                                <ListGroupItem>{books.category}</ListGroupItem>
                                                <ListGroupItem>{books.price} грн</ListGroupItem>
                                            </ListGroup>
                                            <Link className="stretched-link" to={`/book/${books.id}`}/>
                                        </div>
                                        <Card.Body className="text-center">
                                            <div className="col">
                                                <Button variant="primary" value={books.id} type="submit" onClick={this.buy}>
                                                    Купить
                                                </Button>
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