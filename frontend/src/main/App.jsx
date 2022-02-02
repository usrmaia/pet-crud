import "./App.css"
import Footer from "./../components/tamplate/Footer"
import Logo from "./../components/tamplate/Logo"
import Nav from "./../components/tamplate/Nav"
import Home from "./../components/home/Home"
import UserCRUD from "../components/user/UserCrud"
import {BrowserRouter} from 'react-router-dom'
import Routes from "./Routes"
import Contacts from "../components/contact/InformContact"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

const props = () => (
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
)

export default props