import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import './Auth.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', firstName: '' };
        this.service = new AuthService();
    }

    // handleChange() and handleSubmit() will be added here
    handleFormSubmit = (event) => {
        event.preventDefault();
        // const email = this.state.email;
        // const password = this.state.password;
        // const firstName = this.state.firstName;
        // this is equal:
        const { email, password, firstName } = this.state;

        this.service.signup(email, password, firstName)
            .then(response => {
                this.setState({
                    email: "",
                    password: "",
                    firstName: ""
                });
                this.props.getUser(response)
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            // more code will be added here
            <div className="loginContainer">
                <form onSubmit={this.handleFormSubmit}>
                    <label className="loginLabel">Email:</label>
                    <input className="formInput" type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />

                    <label className="loginLabel">First Name:</label>
                    <input className="formInput" name="firstName" value={this.state.firstName} onChange={e => this.handleChange(e)} />

                    <label className="loginLabel">Password:</label>
                    <input className="formInput" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

                    <input className="button" type="submit" value="Signup" />
                </form>

                <span className="loginspan">Already have account? <Link to={"/login"}> Login</Link></span>
                


            </div>
        )
    }
}

export default Signup;