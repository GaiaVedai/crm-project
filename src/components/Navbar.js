import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navBar">
                <Link to="/Clients">
                    <button className="tablinks clients">Clients</button>
                </Link>
                <Link to="/Actions">
                <button className="tablinks actions">Actions</button>
                </Link>
                <Link to="/Analytics">
                <button className="tablinks analytics">Analytics</button>
                </Link>
            </div>




        )
    }
}


export default Navbar