import React, {Component} from 'react';
import './AddTask.css'

class AddTask extends Component {
    constructor(props) {
        super(props);
            this.state = {
                taskArray:[]
            }
    }

    addToList = (e) => {
        if(e.key === 'Enter') {
            this.state.taskArray.push(e.target.value)
            this.setState({taskArray:this.state.taskArray})
            console.log(this.state.taskArray)
                e.target.value = '';
        }
    }

    removeTodo(e){
        e.preventDefault();
        e.target.remove();
    }

    componentDidMount(e) {
        this.setState({taskArray: this.state.taskArray})
        console.log(this.state.taskArray)
    }

    render() {
        return (
            <>
                <div className={'taskList'}>
                    {
                        this.state.taskArray.map((item,i) => {
                            return <div className={'task'}
                                        onClick={this.removeTodo}
                                        key={i} >{item}</div>
                        })
                    }
                </div>
                <div className={'container'}>
                    <input className={'taskInput'}
                           onKeyPress={this.addToList}
                           placeholder={'Enter Task'}
                    />
                </div>
            </>
        );
    }
}

export default AddTask