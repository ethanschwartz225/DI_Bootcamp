import React, {Component} from 'react';
import Navbar from "./Navbar";

class Payment extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h1 className={'page-header'}>Payment</h1>
                </div>
            </div>
        );
    }
}

export default Payment;