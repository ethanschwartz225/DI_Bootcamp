import React, {Component} from 'react';
import { connect } from 'react-redux'
import {PLUS, MINUS} from '../Redux/action';

class Counter extends Component {
    render() {
        const { counter, plus, minus } = this.props;
        return (
            <div>
                <h1>{counter}</h1>
                    <button onClick={plus} >+1</button>
                    <button onClick={minus} >–1</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        plus : () => dispatch(PLUS()),
        minus : () => dispatch(MINUS())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

