import React, { Component } from 'react';
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom'
import './Login.module.css'
import logo from './assets/LogoMakr-2632Ej.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
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
    const {username, email, password} = this.state 
    
    let user = {
      username: username,
      email: email,
      password: password
    }
    
axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
.then(response => {
      if (response.data.logged_in) {
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
    this.props.history.push('/logged_in')
  }



  handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };



  render() {
    const {username, email, password} = this.state
    return (
        <>
        {/* Hello world */}
        <section className="container">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2 register">
              <div className="columns">
                <div className="column left">
                  <h1 className="title is-1">Welcome to Ambrosia</h1>
                    <h2 className="subtitle colored is-4">A website to find and Review establishments in your area!</h2>
                    <p>Sign up and Log in to see all the establishments in your area. </p>
                    <img src={logo}/>
                </div>
                <div className="column right has-text-centered">
                  <h1 className="title is-4">Sign up today</h1>
                  <p className="description">Log in with email and username</p>
                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <input 
                        className="input is-medium" 
                        type="text" 
                        placeholder="Name" 
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input 
                        className="input is-medium" 
                        placeholder="Email" 
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input 
                        className="input is-medium" 
                        type="password" 
                        placeholder="password" 
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <button className="button is-block is-primary is-fullwidth is-medium" type="submit">Sign In</button>
                    <br />
                    <div>
                    or <Link to='/signup'>sign up</Link>
                     </div>
                    <small><em></em></small>
                  </form>
                </div>
              </div>
            </div>
            <div className="column is-8 is-offset-2">
              <br />
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <span className="icon">
                      <i className="fa fa-twitter" />
                    </span>  
                    <span className="icon">
                      <i className="fa fa-facebook" />
                    </span>  
                    <span className="icon">
                      <i className="fa fa-instagram" />
                    </span>  
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>  
                    <span className="icon">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                </div>
                <div className="level-right">
                  <small className="level-item" style={{color: 'var(--textLight)'}}>
                    © Ambrosia. All Rights Reserved.
                  </small>
                </div>
              </nav>
            </div>
          </div>
        </section>
        {/* <p>Enter your HTML here</p> */}
      </>
      
    );
  }
}
export default withRouter(Login);

