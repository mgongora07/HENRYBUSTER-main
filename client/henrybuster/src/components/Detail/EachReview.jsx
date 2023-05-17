import React from 'react'

const EachReview = (props) => {
    const {rating, UserId, comment} = props
   
    
  return (
    <div>
        <div>
            <p>Usuario {UserId?UserId:"No info about"}: </p>
            <p>Rating: {rating?rating:"No info about"}</p>
            <p>{comment?comment:""}</p>
            
        </div>
    </div>
  )
}

export default EachReview