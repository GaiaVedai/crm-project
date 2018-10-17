import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../styles/EditClient.css'


class EditClient extends Component {

    constructor(props) {
        super(props);
        const { firstName, surName, country } = this.props.userDetails
        this.state = {
            firstName: firstName,
            surName: surName,
            country: country
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    updateClientDetails =() => {

    }

    hideEditDialog = () => {
        this.props.hideEditDialog()
    }


    render() {
        console.log(this.props.userDetails)
        return (
            <div className="editClient">
                <form className="form-window">
                    <h3>Edit Client Details</h3>
                    <label htmlFor="first-name">First Name: </label>
                    <input type="text" name="firstName" onChange={this.handleInputChange} className="edit firstname" value={this.state.firstName} /> <br />
                    <label htmlFor="surname">Surname: </label>
                    <input type="text" name="surName" className="edit surname" value={this.state.surName} onChange={this.handleInputChange} /> <br />
                    <label htmlFor="country">Country: </label>
                    <input type="text" name="country" className="edit country" value={this.state.country} onChange={this.handleInputChange} /> <br />
                    <button type="button" className="submit button" onClick={updateClientDetails}>Change</button>
                    <button type="button" className="cancel button" onClick={this.hideEditDialog}>Cancel</button>
                </form>
            </div>


        )
    }
}

export default EditClient