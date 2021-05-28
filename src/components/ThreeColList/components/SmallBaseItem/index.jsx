import React from "react";
import styles from "./index.less";
function Index() {
  return (
    <div className={styles.itemContextWrapper}>
      <div className={styles.itemWrapper}>
        <div className={styles.imgWrapper}>
          <img
            src={
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201206%2F16%2F20120616174342_ycsye.thumb.700_0.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624250410&t=b29d42f11549698d799686309859caa2"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
