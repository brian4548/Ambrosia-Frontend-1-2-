import React, {Component} from 'react'
import styles from './SearchResults.module.css'
import SearchResult from './SearchResult/SearchResult.js'
import Spinner from '../../Spinner/Spinner.js';

export default function SearchResults(props) {
    let searchResults = <Spinner/>;
    if(props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>);
    }



    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}