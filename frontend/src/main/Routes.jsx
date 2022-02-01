import React from "react"
import {Switch, Route, Redirect} from 'react-router';
import Home from "./../components/home/Home"
import UserCRUD from "../components/user/UserCrud"

const props = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCRUD}/>
        <Redirect from='*' to='/'/>
    </Switch>
)
export default props