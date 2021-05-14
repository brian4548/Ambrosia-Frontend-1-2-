import React, { Component } from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import logo from './assets/LogoMakr-2632Ej.png';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };


  handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
.then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.props.history.push('/')
  }




render() {
    const {username, email, password, password_confirmation} = this.state
return (
    <section className="hero-is-fullheight">
  <div className="hero-body has-text-centered">
    <div className="login">
      <img src={logo} alt="logo" width="325px" />
      <form onSubmit={this.handleSubmit}>
      
      <div className="field">
          <div className="control">
            <input 
            className="input is-medium is-rounded" 
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange} 
            placeholder="username" 
            autoComplete="username" 
            required 
            />
          </div>
        </div>
      
        
        <div className="field">
          <div className="control">
            <input 
            className="input is-medium is-rounded" 
            type="text" 
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="hello@example.com" 
            autoComplete="username" 
            required 
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input 
            className="input is-medium is-rounded" 
            type="password" 
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="**********" 
            autoComplete="current-password" 
            required 
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input 
            className="input is-medium is-rounded" 
            type="password" 
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
            placeholder="**********" 
            autoComplete="current-password" 
            required 
            />
          </div>
        </div>
        <br />
        <button className="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
          Sign Up
        </button>
      </form>
      <br />
      <nav className="level">
        {/* <div className="level-item has-text-centered">
          <div>
            <a href="#">Create an Account</a>
          </div>
        </div> */}
      </nav>
    </div>
  </div>
</section>

    );
  }
}
export default withRouter(Signup);