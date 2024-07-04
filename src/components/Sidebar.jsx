import React, { useState } from "react";
import styles from "../css/Sidebar.module.css";
import pfp from "../assets/pfp.jpg"
import Button from "./Button";
import { useLocation } from "react-router-dom";
const buttons = ["Homepage", "projects", "about", "blog", "contact" ];


const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className={styles.sidebar}>
      <img className={styles.pfp} src={pfp} alt="profile pic" />
      <p className={styles.name}>Josiah Williams</p>
      <p className={styles.title}>Aspiring IT Support Professional</p>
  
       <div className={styles.social}>
          <div className={styles.ln_box}>
            <i className="fa-brands fa-linkedin-in" style={{color: 'white'}}></i>
          </div>

          <div className={styles.ln_box}>
            <i className="fa-brands fa-github" style={{color: 'white'}}></i>
          </div>
       </div>

       <div className={styles.links}>
         {
          buttons.map(buttonName => <Button isActive={buttonName.includes()} width={'100%'} key={buttonName}>{buttonName}</Button>)
         }
       </div>
    </div>
  );
  
};

export default Sidebar;
