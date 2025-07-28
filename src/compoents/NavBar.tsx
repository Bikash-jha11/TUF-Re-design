import React from 'react'
import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.jpg'

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
       <div className={styles.left_section}>
        <img className = {styles.logo} src = {logo}/>
       </div>
       <div className={styles.middle_section}>
           <h5>Home</h5>
           <h5>Pricing</h5>
           <h5>Resources</h5>
       </div>
       <div className={styles.right_section}>
         <button className={styles.login_btn}>Login</button>
       </div>
      </div>
    </div>
  )
}

export default NavBar