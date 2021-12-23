import './App.css';
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskArray:[],
        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                    <AddTask />
                </div>
            );
    }
}

export default App;
