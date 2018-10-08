import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClientBox from './ClientBox'

class Clients extends Component {

    generateClientList = () => {
        //for each client create a new line with info
        console.log(this.props.data)
        let clients = this.props.data
        // clients.map(id, () => {

        // })

    }

    componentDidMount() {
        // console.log(this.props.data)
        // this.generateClientList()
    }

    render() {
        {this.generateClientList()}
        return (

            <div className="Clients">
                
            </div>


        )
    }
}


export default Clients