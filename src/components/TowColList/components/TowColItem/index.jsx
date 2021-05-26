import React from "react";
import styles from "./index.less";
function Index(propr) {
  const { itemData, showIcon } = propr;
  return (
    <div className={styles.towColItem}>
      {/* 图片部分 */}
      <div className={styles.itemWraper}>
        {/* 图片容器 */}
        <div className={styles.item}>
          {/* 图片 */}
          <img src={itemData.url} alt="" />
          {/* 字体图标 */}
          {showIcon ? (
            <div className={styles.enlargeButtonWrapp}>
              <span className="iconfont icon-fangda">{/* 字体图标 */}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* 文字部分 */}
      <div className={styles.text}>
        <span>{itemData.title}</span>
      </div>
    </div>
  );
}

export default Index;
