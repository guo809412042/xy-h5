import React from "react";
import styles from "./index.less";
function Index(props) {
  // const { setShowShare } = props
  return (
    <div className={styles.xyHeaderBar}>
      <header className={styles.headerWrapper}>
        <div className={styles.leftIconWrapper}>
          <span className="iconfont icon-ic_close"></span>
        </div>
        <div className={styles.rightIconWrapper}>
          <span className="iconfont icon-fenxiang"></span>
        </div>
      </header>
    </div>
  );
}

export default Index;
