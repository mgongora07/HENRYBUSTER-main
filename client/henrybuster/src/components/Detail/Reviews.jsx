import React, { useEffect, useContext } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useParams, Link } from 'react-router-dom'
import { getRankingMovie, cleanRatings } from '../../redux/actions'
import EachReview from './EachReview'


const Reviews = (props) => {
    const dispatch = useDispatch()
    const{id} = props
    const ratings = useSelector(state=> state.ratings)

    console.log(ratings, 'de Reviews')
    

    useEffect(() => {
     
        dispatch(getRankingMovie(id))
          
        return () => {
          dispatch(cleanRatings())
        }
    
        }, [id])
  return (
    <div>
        <div>Reviews of this product</div>
        <div>
        {ratings.map((rating) => (
  <EachReview
    key={rating.MovieId}
    MovieId={rating.MovieId}
  />
))}
            
        </div>

    </div>

    
  )
}

export default Reviews