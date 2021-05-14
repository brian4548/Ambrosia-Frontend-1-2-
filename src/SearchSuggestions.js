import React, {Component} from 'react'
import styles from './SearchSuggestions.module.css'


class SearchSuggestions extends Component{
    render(){
        return(
            <div className={styles.suggestions}>
                <span className="icon is-small"><i className="fa fa-truck"></i></span><span className={styles.suggestion}>Restaurants</span>
                <span className="icon is-small"><i className="fa fa-truck"></i></span><span className={styles.suggestion}>Barbers</span>
                <span className="icon is-small"><i className="fa fa-truck"></i></span><span className={styles.suggestion}>Mechanics</span>
                <span className="icon is-small"><i className="fa fa-truck"></i></span><span className={styles.suggestion}>plumbers</span>
            </div>
        )
    }

}


export default SearchSuggestions