import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import './Auth.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.service.login(email, password)
    .then( response => {
        this.setState({ email: "", password: "" });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    return(
      <div className="loginContainer">
        <form onSubmit={this.handleFormSubmit}>
          <label className="loginLabel">Email:</label>
          <input className="formInput" type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
          <label className="loginLabel">Password:</label>
          <input className="formInput" type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          <input className="button" type="submit" value="Login" />
        </form>
        <span className="loginspan">Don't have account?  <Link to={"/signup"}> Sign up</Link></span>
            
        
      </div>
    )
  }
}

export default Login;