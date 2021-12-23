import React, {Component} from 'react';
import './Register.css';
import RegisterForm from "./RegisterForm";

class Register extends Component {
    render() {
        return (
            <div className={'register-container'}>
                <RegisterForm />
            </div>
        );
    }
}

export default Register;