import React from "react"
import Home from "./../components/home/Home"
import UserCRUD from "../components/user/UserCrud"
import Contacts from "../components/contact/InformContact";
import { Navigate, Route, Routes } from "react-router-dom";

const props = () => (
    <Routes>    
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<UserCRUD />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='*' element={<Navigate replace to="/"/>}/>
    </Routes>
)
export default props