import './App.css';
import Browse from "./Components/Browse";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Discover from "./Components/Discover";
import Shop from "./Components/Shop";
import Payment from "./Components/Payment";
import Register from "./Components/Register";
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={'/register'} element={<Register />}/>
                <Route path={'/login'} element={<Login />}/>
                <Route path={'/'} element={<Browse />}/>
                <Route path={'/discover'} element={<Discover />}/>
                <Route path={'/shop'} element={<Shop />}/>
                <Route path={'/payment'} element={<Payment />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
