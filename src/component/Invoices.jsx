import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Invoices extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Invoices</h1>
                <Link to="/">Volver</Link>
            </div>
        );
    }
}

export default Invoices;