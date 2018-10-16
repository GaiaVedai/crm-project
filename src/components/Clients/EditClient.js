import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../styles/EditClient.css'


class EditClient extends Component {

    changeDetails = () => {
        console.log('hi')
    }


    render() {
        const { firstName, surName, country } = this.props.userDetails
        return (
            <div className="editClient">
                <form className="form-window">
                <h3>Edit Client Details</h3>
                    <label htmlFor="first-name">First Name: </label> <input type="text" id="first-name" onChange={this.changeDetails} className="edit firstname" value={firstName || ""} /> <br />
                    <label htmlFor="surname">Surname: </label> <input type="text" id="surname" className="edit surname" value={surName || ""} /> <br />
                    <label htmlFor="country">Country: </label> <input type="text" id="country" className="edit country" value={country || ""} /> <br />
                    <button type="cancel" className="edit button">Cancel</button>
                    <button type="submit" className="submit button">Change</button>
                </form>
            </div>


        )
    }
}

export default EditClient