import React, {Component} from 'react'
import styles from './SubNavItem.module.css'

class SubNavItem extends Component{
    render(){
        return(
            <div className="dropdown is-hoverable">
  <div className="dropdown-trigger">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
      <span>{this.props.label}</span>
      <span className="icon is-small">
        <i className="fa fa-angle-down" aria-hidden="true" />
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu4" role="menu">
    <div className="dropdown-content">
      <div className="dropdown-item">
        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
      </div>
    </div>
  </div>
</div>

        )
    }



}


export default SubNavItem