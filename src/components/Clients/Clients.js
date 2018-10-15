import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClientBox from './ClientBox'
import EditBox from './EditClient'
import '../../styles/clientBox.css'


class Clients extends Component {
    constructor() {
        super()
        this.state = this.Data
    }
    splitName = (client) => {
        return client.name.split(' ');

    }
    generateClientList = () => {
        //for each client create a new line with info
        let clients = this.props.data
        return clients.map(client => {
            let fullName = this.splitName(client);
            let firstName = fullName[0]
            let sureName = fullName[1]
            return (<ClientBox key={client._id} firstName={firstName} sureName={sureName} mailType={client.emailType} sold={client.sold ? "V" : "-"} owner={client.owner} first={client.firstContact} country={client.country} editStatus={false} changeEditStatus={this.changeEditStatus} />)
        })
    }

    changeEditStatus = (props) => {
        console.log(this.props)``
        return this.props({ editStatus: true })``
        // console.log(props)

    }

    editClientDetails = () => {
        console.log(this.state)
        // if (this.editStatus = true) {
        //     return <EditBox props={this.state} />
        // }
    }

    componentDidMount() {
        // console.log(this.props.data)
        // this.generateClientList()
    }

    render() {
        return (

            <div className="Clients">
                <div className="divTable">
                    <div className="divTableHeading">
                        <div className="divTableHead">Name</div>
                        <div className="divTableHead">Surname</div>
                        <div className="divTableHead">Country</div>
                        <div className="divTableHead">First Contacted</div>
                        <div className="divTableHead">e-mail</div>
                        <div className="divTableHead">Sold</div>
                        <div className="divTableHead">Owner</div>
                    </div>
                    {this.generateClientList()}
                    {this.editClientDetails()}
                </div>
            </div>


        )
    }
}


export default Clients