import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import '../../styles/clientBox.css'


class ClientBox extends Component {
    splitName = () => {
        return this.props.name.split(' ');
        // console.log(fullName[0])

    }

    render() {
        let fullName = this.splitName();
        let firstName = fullName[0]
        let sureName = fullName[1]
        return (

            
                    <div className="divTableRow">
                        <div className="first-name divTableCell" >{ firstName }</div>
                        <div className="last-name divTableCell">{ sureName }</div>
                        <div className="country divTableCell">{ this.props.country }</div>
                        <div className="divTableCell">{ this.props.first }</div>
                        <div className="divTableCell">{ this.props.mailType}</div>
                        <div className="divTableCell">{ this.props.sold }</div>
                        <div className="divTableCell">{ this.props.owner }</div>
                    </div>
            

        )
    }
}

export default ClientBox