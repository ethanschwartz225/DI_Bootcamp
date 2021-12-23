import React, {Component} from 'react';
import Navbar from "./Navbar";
import './Browse.css';
import BrowseBlock from "./BrowseBlock";

class Browse extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <BrowseBlock />
                </div>
            </div>
        );
    }
}

export default Browse;