import React from "react";
import Numbers from "./Numbers";
import EditorNav from "./EditorNav";
import styles from "../styles/CodeEditor.module.css";

function CodeEditor() {
  return (
    <div className={styles.container}>
      <EditorNav />
      <div className={styles.body}>
          <Numbers/>
      </div>
    </div>
  );
}

export default CodeEditor;
