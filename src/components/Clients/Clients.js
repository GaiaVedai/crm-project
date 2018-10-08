import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClientBox from './ClientBox'
import '../../styles/clientBox.css'


class Clients extends Component {

    generateClientList = () => {
        //for each client create a new line with info
        let clients = this.props.data
        // console.log(clients)
        return clients.map(client => {
            return (<ClientBox key={client._id} name={client.name} mailType={client.emailType} sold={client.sold ? "V":"-"} owner={client.owner} first={client.firstContact} country={client.country} />)
        })

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
                </div>
            </div>


        )
    }
}


export default Clients