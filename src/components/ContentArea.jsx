import React from "react";
import styles from "../css/ContentArea.module.css";
import pin from "../assets/pin.png"

const ContentArea = () => {
  return (
    <div className={styles.content_area}>
      <h1 className={styles.hd1}>Hello! I'm Josiah,</h1>
      <h1 className={styles.hd2}>and I love computers!</h1>

      <div className={styles.location}>
        <img className={styles.pin} src={pin} alt="waypoint" />
        <p>Chicago, IL</p>
      </div>

      <div className={styles.bio}>
        <p>I'm an Information Technology connoisseur with a strong passion for hardware repairs, operating systems and driver troubleshooting, printer support, network infrastructure consultations, and most recently, coding! I've been obsessed with technology and the support involved since age 6 and demonstrate exceptional customer service skills with a constant, insatiable hunger for knowledge and is always constantly evolving in the workplace!</p>
      </div>
    </div>
  );
};

export default ContentArea;
