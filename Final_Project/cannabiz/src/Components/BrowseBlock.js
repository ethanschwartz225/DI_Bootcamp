import React, {Component} from 'react';
import './BrowseBlock.css';

class BrowseBlock extends Component {
    render() {
        return (
            <div className="browser-wrapper">
                <div className={'browse-border'}>
                    <h1 className={'browser-header'}>This is your browser.</h1>
                </div>
            </div>
        );
    }
}

export default BrowseBlock;