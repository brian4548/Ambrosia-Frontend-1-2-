import React from 'react'
import NavBar from '../NavBar/NavBar.js'
import SearchBar from '../SearchBar.js'
import SubNav from '../SubNav/SubNav.js'
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary.js'
import SearchResults from './SearchResults/SearchResults.js'
import useReactRouter from 'use-react-router'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';

export default function Search() {
    let {location, history} = useReactRouter();
    let params = new URLSearchParams(location.search);
    let term = params.get('find_desc');
    let locationParam = params.get('find_loc');
    let [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);

    if (!term || !locationParam) {
        history.push('/');
    }

    function search(term, location) {
        let encodedTerm = encodeURI(term);
        let encodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
        performSearch({term, location});
    }

    return (
        <div>
            <NavBar term={term} location={locationParam} search={search}/>
            <SubNav/>
            <SearchResultsSummary term={searchParams.term}
                                  location={searchParams.location}
                                  amountResults={amountResults}
                                  shownResults={businesses ? businesses.length : 0}
            />
            <SearchResults businesses={businesses}/>
        </div>
    );
}
        
    


