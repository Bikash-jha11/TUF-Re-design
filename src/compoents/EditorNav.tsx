import React from 'react'
import styles from '../styles/Editornav.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { BsMagic } from "react-icons/bs";
import { TbBoxMultiple } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";


function EditorNav() {
  return (
    <div className={styles.container}>
        <div className={styles.left_part}>
            <IoIosArrowDown style={{"margin-top":"5px"}}/>
            <h4>CPP</h4>
        </div>
        <div className={styles.right_part}>
               <BsMagic />
               <TbBoxMultiple />
               <button className={styles.btn}>
                  <FaPlay />
                 <h4> Run</h4>
               </button>

        </div>
    </div>
  )
}

export default EditorNav