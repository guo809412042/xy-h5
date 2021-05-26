import React from "react";
import styles from "./index.less";
function Index(props) {
  return (
    <div className={styles.waterfallWrapp}>
      <div className={styles.imgWrap}>
        <img src={props.url} alt="" />
        <span className={styles.iconWrapper}>USE</span>
      </div>
      <div className={styles.title}>asdasdasd</div>
    </div>
  );
}

export default Index;
