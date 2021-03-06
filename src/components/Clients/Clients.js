import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClientBox from './ClientBox'
import EditBox from './EditClient'
import "../../styles/clientBox.css"


class Clients extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editStatus: false
        }
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
            let surName = fullName[1]
            return (<ClientBox key={client._id} id={client._id} firstName={firstName} surName={surName} mailType={client.emailType} sold={client.sold ? "V" : "-"} owner={client.owner} first={client.firstContact} country={client.country} changeEditStatus={this.changeEditStatus} />)
        })
    }

    changeEditStatus = (properties) => {
        this.setState({ editStatus: true, currentEdit: properties })
    }

    showEditDialog = () => {
        if (this.state.editStatus) {
            return <EditBox userDetails={this.state.currentEdit} hideEditDialog={this.hideEditDialog} updateClientDetails={this.updateClientDetails} />
        }
        return
    }

    updateClientDetails = (updatedClient) => {   
        
        let clientList = this.props.data
        const newData =  clientList.map(client => {
            if (client._id === updatedClient.id) {                                
                return {
                    ...client,
                    name: updatedClient.firstName.concat(' ', updatedClient.surName),
                    country: updatedClient.country
                }
            }
            return client
        })
        // this.setState({ data: newData })
        this.props.updateClientDetails(newData)
    }

    hideEditDialog = (properties) =>
        this.setState({ editStatus: false })


    render() {


        return (

            <div className="Clients">
                <div className="divTable">
                    {this.showEditDialog()}
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
                    {/* {this.editClientDetails()} */}
                    {/* <EditBox className={this.state.editStatus ? "window" : "window hide"} /> */}
                </div>
            </div>


        )
    }
}


export default Clients