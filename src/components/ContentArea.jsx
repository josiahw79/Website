import React from "react";
import styles from "../css/ContentArea.module.css";
import { Outlet } from "react-router-dom";

const ContentArea = () => {
  return (
    <div className={styles.content_area}>
        <Outlet/>
    </div>
  );
};

export default ContentArea;
