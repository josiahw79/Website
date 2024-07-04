import React from 'react'
import Sidebar from './Sidebar'
import ContentArea from './ContentArea'
import styles from '../css/App.module.css'

const Layout = () => {
  return (
    <div className={styles.mainContainer}>
        <Sidebar />
        <ContentArea />
    </div>
  )
}

export default Layout