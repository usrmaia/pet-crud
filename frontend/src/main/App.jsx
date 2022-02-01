import "./App.css"
import Footer from "./../components/tamplate/Footer"
import Logo from "./../components/tamplate/Logo"
import Nav from "./../components/tamplate/Nav"
import Home from "./../components/home/Home"
import UserCRUD from "../components/user/UserCrud"
//import {HashRouter} from 'react-router-dom'
import Routes from "./Routes"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

const props = () => (
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>
)

export default props