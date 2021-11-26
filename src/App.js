import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./component/HeaderComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BookListComponent from "./component/BookListComponent";
import LoginComponent from "./component/LoginComponent";
import RegistrationComponent from "./component/RegistrationComponent";
import BookComponent from "./component/BookComponent";
import CategoryBookListComponent from "./component/CategoryBookListComponent";
import CardComponent from "./component/CardComponent"
import ProfileComponent from "./component/ProfileComponent";
import AdminBooksComponent from "./component/admin/AdminBooksComponent";
import AdminCategoriesComponent from "./component/admin/AdminCategoriesComponent";
import AdminCommentComponent from "./component/admin/AdminCommentComponent";
import AdminOrderComponent from "./component/admin/AdminOrderComponent";
import AdminUserComponent from "./component/admin/AdminUserComponent";
import AdminCreateCategoryComponent from "./component/admin/creation/AdminCreateCategoryComponent";
import AdminCreateBookComponent from "./component/admin/creation/AdminCreateBookComponent";

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
                    <Route exact path="/card" component={CardComponent}/>
                    <Route exact path="/profile" component={ProfileComponent}/>
                    <Route exact path="/admin" component={AdminBooksComponent}/>
                    <Route exact path="/admin/categories" component={AdminCategoriesComponent}/>
                    <Route exact path="/admin/comments" component={AdminCommentComponent}/>
                    <Route exact path="/admin/orders" component={AdminOrderComponent}/>
                    <Route exact path="/admin/users" component={AdminUserComponent}/>
                    <Route exact path="/admin/category/create" component={AdminCreateCategoryComponent}/>
                    <Route exact path="/admin/book/create" component={AdminCreateBookComponent}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
