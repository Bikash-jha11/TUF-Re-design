import React from 'react'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import Main from './Main'

import styles from '../styles/Banner.module.css'


function Banner() {
  return (
    <div className={styles.container}>
     <LeftBar/>
     <Main/>
     <RightBar/>
    </div>
  )
}

export default Banner