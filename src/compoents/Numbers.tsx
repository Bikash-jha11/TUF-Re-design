import React from 'react'
import styles from "../styles/CodeEditor.module.css";

function Numbers() {
  return (
    <div className={styles.numbers}>
        <div className={styles.codes}>
             <h4>1.</h4>
             <h6>Class solution</h6>
      </div>
       <div className={styles.codes}>
             <h4>2.</h4>
             {/* //text indent not working */}
             <h6>&nbsp; &nbsp; &nbsp;public:</h6>
      </div>
       <div className={styles.codes}>
             <h4>3.</h4>
             <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vector<int/> arr</h6>
      </div>
    </div>
  )
}

export default Numbers