import React, { useState } from 'react'
import styles from '../css/Button.module.css'
import { useLocation } from 'react-router-dom'

const Button = ({children, width, textColor, backgroundColor, isActive}) => {
  return (
    <button style={{width: width}} className={`${styles.button} ${isActive && styles.button_active}`}>{children}</button>
  )
}

export default Button