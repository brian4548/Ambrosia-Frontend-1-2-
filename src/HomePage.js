import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Cards from './cards/Card.js'
import TopNav from './TopNav'
import logo from './assets/LogoMakr-2632Ej.png';
import styles from './HomePage.module.css'
import SearchBar from './SearchBar.js'
import SearchSuggestions from './SearchSuggestions.js';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import useReactRouter from 'use-react-router';

export default function LandingPage() {
  const { history } = useReactRouter();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }

  return (
    <div className={styles.landing}>
      <div className={styles['search-area']}>
        <TopNav />
        <img src={logo} className={styles.logo} alt="logo" />
        <SearchBar search={search} />
        <SearchSuggestions />
      </div>
    </div>
  );
}













































// class HomePage extends Component{



//   render(){
//     return (
//       <div>
//           <div className={styles["search-area"]}>
//             <TopNav />
//             <img src={logo} className={styles.logo} alt='logo'/>
//             <SearchBar />
//             <SearchSuggestions />
//           </div>
//       </div>

//     );

//   }
  
// };
// export default HomePage;
