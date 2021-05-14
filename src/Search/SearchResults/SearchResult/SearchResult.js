import { Component } from "react"
import EstablishmentRating from "../../../EstablishmentRating/EstablishmentRating"
import styles from './SearchResult.module.css'
import {Link, withRouter} from 'react-router-dom'

function SearchResult(props){

    const b = props.business;
    if (!b) {
        return (<div/>);
    }
    
    const tags = b.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={b.id + category.title}>{category.title}</span>));
        return(
            <div className={styles['search-result']}>
                <img src={props.business.image_url} alt='image' className={styles['business-image']}/>
                <div className={styles['business-info']}>
                    <Link to='/establishment/4'class="subtitle">{props.business.name}</Link>
                    <EstablishmentRating reviewCount={props.business.review_count} rating={props.business.rating}/>
                    <p> {props.business.price} {tags}</p>
                </div>
                <div className={styles['contact-info']}>
                    <p>{props.business.display_phone}</p>
                    <p>{props.business.location.address1}</p>
                    <p> {props.business.location.zip_code} </p>
                </div>
            </div>
        )
    

}

export default SearchResult