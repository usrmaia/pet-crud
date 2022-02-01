import React from "react"
import {Switch, Route, Redirect} from 'react-router';
import Home from "./../components/home/Home"
import UserCRUD from "../components/user/UserCrud"
import Contact from "../components/contact/InformContact";

const props = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCRUD}/>
        <Route peth="/contacts" component={Contact}/>
        <Redirect from='*' to='/'/>
    </Switch>
)
export default props