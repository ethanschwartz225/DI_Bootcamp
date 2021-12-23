import './App.css';
import React from "react";
import Counter from "./Components/Counter";

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Counter />
                </header>
            </div>
        );
    }
}

export default App;
