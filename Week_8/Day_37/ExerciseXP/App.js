import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from "./Component/BootstrapCard";
import Jumbotron from "./Component/Jumbotron";

let stuff = {
    title: "McCartney",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
    description: "Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."
}

const PrintHello = ( ) => {
    return <h1>I'm a React Component</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrintHello />
          <BootstrapCard data={stuff} />
                <Jumbotron
                    title="Welcome to react"
                    description="React is the most popular rendering library in the world"
                    buttonLabel="Go to the official website"
                    buttonURL="https://reactjs.org/"
                />
      </header>
    </div>
  );
}

export default App;
