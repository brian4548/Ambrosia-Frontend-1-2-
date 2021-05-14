import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './HomePage.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Search from './Search/Search.js'
import Review from './Review/Review.js'
import SeeReview from './Review/SeeReview.js'
import SeePosted from './Review/SeePosted.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }
componentDidMount() {
  this.loginStatus()
}


  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }


  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }


  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
  
  render() {
    return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path='/logged_in' component={() => <HomePage />}/>
            <Route exact path='/' component={() => <Login handleLogin={this.handleLogin}/>}/>
            <Route exact path='/signup' component={() => <Signup handleLogin={this.handleLogin}/>}/>
            <Route exact path='/search' component={() => <Search />}/>
            <Route exact path='/establishment/4' component={() => <SeeReview />} />
            <Route exact path='/establishments/4' component={() => <SeePosted />} />
            <Route exact path='/write_review' component={() => <Review />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;



























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
