import React, { Component } from 'react';
import UpdateActions from './Updateactions'
import AddActions from './Addactions'


class Actions extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="Actions">
            <UpdateActions clients={this.props.clients} />
            <AddActions />

            </div>
        )
    }
}

export default Actions;