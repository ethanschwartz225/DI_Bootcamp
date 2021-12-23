import React, {Component} from 'react';
import Navbar from "./Navbar";

class Shop extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h1 className={'page-header'}>Shop</h1>
                </div>
            </div>
        );
    }
}

export default Shop;