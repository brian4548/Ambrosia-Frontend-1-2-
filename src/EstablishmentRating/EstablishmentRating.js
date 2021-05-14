import { Component } from "react"
import styles from './EstablishmentRating.module.css'
import Rating from 'react-rating'
import {Link, withRouter} from 'react-router-dom'

class EstablishmentRating extends Component{
    render(){
        return(
            <div className={styles.rating}>
                <Rating
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    fractions={2}
                    readonly
                    initialRating={this.props.rating}
                />
                <Link to='/establishments/4'className='subtitle'><p>Reviews</p></Link>
            </div>
        )
    }

}

export default EstablishmentRating