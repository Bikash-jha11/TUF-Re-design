import React from "react";
import styles from "../styles/Main.module.css";
import { MdLocalFireDepartment } from "react-icons/md";
import CodeEditor from "./CodeEditor";

function Main() {
  return (
    <>
    <div className={styles.container}>
        
      <div className={styles.main}>
        <div className={styles.transparent}>
          <MdLocalFireDepartment className={styles.fire_logo} />
          <p className={styles.text}>Creafted by Top Engineers</p>
        </div>
        <div className={styles.tagline}>
          <p className={styles.big_text}>UpSkill youself with just</p>
          <p className={styles.big_text}>One Subscription</p>
        </div>
        <div className={styles.quotation}>
          <p className={styles.small_text}>
            The one stop platform for tech-interview-with curated
            syllabi,company specific
          </p>
          <p className={styles.small_text}>prep,premium-question,all in one place.</p>
        </div>
        <div className={styles.btn_group}>
          <button className={styles.buy_now}>Buy Now</button>
          <button className={styles.explore}>Explore Now</button>
        </div>
      </div>
       <CodeEditor/>
    </div>

   
    </>
  );
}

export default Main;
