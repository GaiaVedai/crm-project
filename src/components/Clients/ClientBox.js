import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../styles/clientBox.css'


class ClientBox extends Component {

    editClient = () => {
        // const active = this.state.active ? 'show' : 'hide' 
        // this.setState({active: true})
        this.props.changeEditStatus(this.props)
    }

    render() {
        return (
                <div className="divTableRow" onClick={this.editClient}>
                    <div className="first-name divTableCell">{this.props.firstName}</div>
                    <div className="last-name divTableCell">{this.props.surName}</div>
                    <div className="country divTableCell">{this.props.country}</div>
                    <div className="divTableCell">{this.props.first}</div>
                    <div className="divTableCell">{this.props.mailType}</div>
                    <div className="divTableCell">{this.props.sold}</div>
                    <div className="divTableCell">{this.props.owner}</div>
                </div>


        )
    }
}

export default ClientBox