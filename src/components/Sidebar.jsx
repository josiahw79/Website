import React from "react";
import styles from "../css/Sidebar.module.css";
import pfp from "../assets/pfp.jpg"
import Button from "./Button";


const Sidebar = () => {
  const buttons = ["Homepage", "Projects", "About", "Blog", "Contact" ];
  return (
    <div className={styles.sidebar}>
      <img className={styles.pfp} src={pfp} alt="profile pic" />
      <p className={styles.name}>Josiah Williams</p>
      <p className={styles.title}>Aspiring IT Support Professional</p>
      {/* <img src={ln} alt="linked incon" />
       */}

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
          buttons.map( buttonName => <Button key={buttonName}>{buttonName}</Button>)
         }
       </div>
    </div>
  );
  
};

export default Sidebar;
