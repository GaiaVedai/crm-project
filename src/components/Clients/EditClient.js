import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../styles/EditClient.css'


class EditClient extends Component {


    render() {

        return (

            <div className="editClient"> Edit Client Details
                <input type="text" className="editFirstname" placeholder={ this.props.firstName} />
                <input type="text" className="editsurname" placeholder={ this.props.surName} />
            </div>


        )
    }
}

export default EditClient