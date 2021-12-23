import React, {Component} from 'react';
import {Link} from "react-router-dom";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        // const navigate = useNavigate();
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            username:'',
            password:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, username, password } = this.state;
//INSERT VALIDATION BEFORE HANDLING SUBMIT
        let newUserCredentials = {
            firstName,
            lastName,
            email,
            username,
            password
        }
        await fetch('http://localhost:5000/new_user', {
            method:'POST',
            headers:{
                'accepts':'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUserCredentials)
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="register-form-wrapper">
                <section className={'header-container'}>
                    <h1 className={'register-header'}>Welcome. Please fill out the form to begin registration.</h1>
                </section>
                <form className={'form-wrapper'}>
                    <input type="text" className="register-input" name={'firstName'} placeholder={'First Name'} onChange={this.handleChange} />
                    <input type="text" className="register-input" name={'lastName'} placeholder={'Last Name'} onChange={this.handleChange} />
                    <input type="email" className="register-input" name={'email'} placeholder={'Email'} onChange={this.handleChange} />
                    <input type="text" className="register-input" name={'username'} placeholder={'Username'} onChange={this.handleChange} />
                    <input type="password" className="register-input" name={'password'} placeholder={'Password'} onChange={this.handleChange} />
                    <button className="register-btn" onClick={this.handleSubmit}>Register</button>
                    <Link to={'/login'}>Already a cardholder? Login with your credentials.</Link>
                </form>
            </div>
        );
    }
}

export default RegisterForm;