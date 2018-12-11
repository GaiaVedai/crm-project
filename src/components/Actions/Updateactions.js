import React, { Component } from 'react';



class UpdateActions extends Component {
    constructor(props) {
        super(props)
        this.clients = this.props.clients
    }

    render() {
        return (

            <div className="updateActions">
                <h1>Update</h1>
                <label htmlFor="clientNameInput">Client</label>
                <input list="clientNameInput" placeholder="Client name" /> <br />
                <datalist id="clientNameInput">
                    {this.clients.map(client => {
                        return <option value={client.name} />
                    })}
                </datalist>
                <label htmlFor="transferOwnership">Transfer Ownership</label>
                <input className="transferOwnership" list="transferOwnershipList" placeholder="Owner" />
                <datalist id="transferOwnershipList">
                    {this.clients.map(client => {
                        return <option value={client.owner} />
                    })}
                </datalist>
                <button type="button" className="transferbutton" >Transfer</button>

            </div>
        )
    }
}

export default UpdateActions;