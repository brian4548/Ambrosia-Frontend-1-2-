import React, {Component} from 'react'
import logo from '../assets/LogoMakr-2632Ej.png';
import styles from './NavBar.module.css'
import SearchBar from '../SearchBar.js'

class NavBar extends Component{
    render(){
        return(
            <div className={styles["nav-bar"]}>
                <img src={logo} className={styles.logo}  alt="logo"/>
                <SearchBar small term={this.props.term} location={this.props.location} search={this.props.search}/>
            </div>
        )
    }

}

export default NavBar