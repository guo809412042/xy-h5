import React from "react";
import styles from "./index.less";

function Index(props) {
  const { title, showBtn, list, setShowModelView = null } = props;
  return (
    <div className={styles.threeRowList}>
      <header className={styles.listHeader}>
        <div className={styles.title}>{title}</div>
        {showBtn ? (
          <button
            className={styles.xyButton}
            onClick={() => {
              setShowModelView(list);
              console.log(list);
            }}
          >
            GET
          </button>
        ) : (
          ""
        )}
      </header>
      {props.children}
    </div>
  );
}

export default Index;
