import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <div className="register-form-wrapper">
                    <section className={'header-container'}>
                        <h1 className={'register-header'}>Hey there. Login to view your account.</h1>
                    </section>
                    <form className={'form-wrapper'}>
                        <input type="text" className="register-input" name={'username'} placeholder={'Username'} onChange={this.handleChange} />
                        <input type="password" className="register-input" name={'password'} placeholder={'Password'} onChange={this.handleChange} />
                        <button className="register-btn" onClick={this.handleSubmit}>Login</button>
                        <Link to={'/register'}>Not a cardholder? Register here!.</Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;