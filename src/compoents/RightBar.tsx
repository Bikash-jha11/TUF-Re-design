import React from "react";
import styles from "../styles/RightBar.module.css";
import { IoIosArrowDown } from "react-icons/io";

function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <IoIosArrowDown className={styles.arrow} />
        <h4 className={styles.heading}>All problem</h4>
      </div>

      <div className={styles.main}>
        <p>Array</p>
        <p>Binary Tree</p>
        <p>Dynamic Programming</p>
        <p>Linked List</p>
        <p>Heap</p>
      </div>
    </div>
  );
}

export default RightBar;
