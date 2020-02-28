import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/login">Login<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/login/register">Register<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link"  to="/login/cart"><ion-icon name="basket"></ion-icon><span className="sr-only">(current)</span></Link>
            </li>
           
            
            

            </ul></nav>
    )}
    export default Navbar;