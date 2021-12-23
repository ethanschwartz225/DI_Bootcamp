import React, {Component} from 'react';
import Navbar from "./Navbar";

class Discover extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h1 className={'page-header'}>Discover</h1>
                </div>
            </div>
        );
    }
}

export default Discover;