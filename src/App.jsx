import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import styles from "./css/App.module.css";
import ContentArea from "./components/ContentArea";

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
