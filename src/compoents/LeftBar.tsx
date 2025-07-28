import React from "react";
import styles from "../styles/Leftbar.module.css";
import { IoIosArrowDown } from "react-icons/io";

function LeftBar() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.sheet}>
          <div className={styles.icon_wrapper}>
            <IoIosArrowDown className={styles.arrow} />{" "}
            <h4 className={styles.text}>DSA Playlist</h4>
          </div>
          <div className={styles.sheet_item}>
            <p>Striver A2Z Sheet</p>
            <p>Striver SDE Sheet</p>
            <p>Striver 79 Sheet</p>
            <p>Striver 75 Sheet</p>
          </div>
        </div>
        <div className={styles.playlist}>
          <div className={styles.icon_wrapper}>
            <IoIosArrowDown className={styles.arrow} />{" "}
            <h4 className={styles.text}>DSA Playlist</h4>
          </div>

          <div className={styles.playlist_item}>
            <p>Striver A2Z Sheet</p>
            <p>Striver SDE Sheet</p>
            <p>Striver 79 Sheet</p>
            <p>Striver 75 Sheet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
