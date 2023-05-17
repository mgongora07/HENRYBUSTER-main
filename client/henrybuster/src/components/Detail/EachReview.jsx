import React from 'react'

const EachReview = (props) => {
    const {MovieId} = props
    console.log(MovieId, 'eachreview')
    
  return (
    <div>
        <div>
            <p>Hola test</p>
            <p>{MovieId?MovieId:'No info about'}</p>
        </div>
    </div>
  )
}

export default EachReview