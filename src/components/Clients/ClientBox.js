import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ClientBox extends Component {

    

       
    render() {
        return (
            <table className="ClientBox">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Country</th>
                            <th>First Contacted</th>
                            <th>e-mail</th>
                            <th>Sols</th>
                            <th>Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>577854</td>
                            <td>577855</td>
                        </tr>
                        <tr>
                            <td>Jack</td>
                            <td>577856</td>
                            <td>577857</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>&nbsp;</td>
                            <td>Personal</td>
                            <td>Office</td>
                        </tr>
                    </tfoot>
                </table>


        )
    }
}


export default ClientBox