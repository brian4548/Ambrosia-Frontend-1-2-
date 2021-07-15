import React, { Component } from 'react';
import styles from './TopNav.module.css'
import {Link} from 'react-router-dom'


class TopNav extends Component{
    render(){
        return(
            <div className={styles['top-nav']}>
                <div className={styles.left}>
                </div>
                <div className={styles.right}>
                    <p>Welcome, Anna</p>
                </div>
            </div>

        )
    }


}

export default TopNav