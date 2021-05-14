import React, {Component} from 'react'
import SubNavItem from './SubNavItem/SubNavItem.js'
import styles from './SubNav.module.css'
import {Link, withRouter} from 'react-router-dom'

class SubNav extends Component{
    render(){
        return(
            <div className={styles['sub-nav']}>
                <div>
                    <SubNavItem label='restaurant'/>
                    <SubNavItem label='homeservices'/>
                    <SubNavItem label='auto'/>
                    <SubNavItem label='more'/>
                </div>
            
            <div>
            <button className="button">
            <span className="icon">
            <i className="fa fa-check"></i>
             </span>
            <Link to='/write_review'><span>Write Review</span></Link>
            </button>

            {/* <button className="button">
            <span className="icon">
            <i className="fa fa-github"></i>
             </span>
            <span>Establishments</span>
            </button> */}
            </div>

            </div>

            
        )
    }



}


export default SubNav