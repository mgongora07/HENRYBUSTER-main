import React from 'react'
import SideBarProfile from './SideBarProfile'
import style from '../Styles/MyOrders.module.css'

const MyOrders = () => {
  return (
    <div className={style.container}>
        <SideBarProfile/>
        <div className={style.body}>
            MyOrders</div>

    </div>
  )
}

export default MyOrders