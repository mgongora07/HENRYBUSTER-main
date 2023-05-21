import React from 'react'
import style from '../Styles/EachReview.module.css'

const EachReview = (props) => {
    const {rating, UserId, comment} = props
   
    
  return (
    <div className={style.container}>
        <div className={style.container2}>
            <p className={style.text}><strong className={style.strong}>Usuario</strong> {UserId?UserId:"No info about"}: </p>
            <p className={style.text}> <strong className={style.strong}>Rating:</strong> {rating?rating:"No info about"}</p>
            <p className={style.text}>{comment?comment:""}</p>
        </div>
    </div>
  )
}

export default EachReview