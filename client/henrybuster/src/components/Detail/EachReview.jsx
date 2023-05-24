import React from 'react'
import style from '../Styles/EachReview.module.css'

const EachReview = (props) => {
    const {rating, UserId, comment} = props
   
    
  return (
    <div className={style.container}>
        <div className={style.container2}>
          <div>
            <p className={style.text}><i className="bi bi-star-fill me-1"></i>{rating?rating:"No info about"}/5</p>
          </div>
          <div>
            <p className={style.text}>{comment?comment:""}</p>
          </div>
        </div>
    </div>
  )
}

export default EachReview