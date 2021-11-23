import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./component/HeaderComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BookListComponent from "./component/BookListComponent";
import LoginComponent from "./component/LoginComponent";
import RegistrationComponent from "./component/RegistrationComponent";
import BookComponent from "./component/BookComponent";
import CategoryBookListComponent from "./component/CategoryBookListComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <HeaderComponent/>
                <Switch>
                    <Route exact path="/" component={BookListComponent}/>
                    <Route exact path="/category/:id" component={CategoryBookListComponent}/>
                    <Route exact path="/login" component={LoginComponent}/>
                    <Route exact path="/registration" component={RegistrationComponent}/>
                    <Route path="/book/:id" component={BookComponent}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
