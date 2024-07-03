import { useState } from "react";
import Sidebar from "./components/Sidebar";
import styles from "./css/App.module.css";
import ContentArea from "./components/ContentArea"

function App() {
  return (
    <>
      <div className={styles.mainContainer}>
        <Sidebar />
        <ContentArea />
      </div>
    </>
  );
}

export default App;
