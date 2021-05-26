import React, { createRef, useEffect } from "react";
import styles from "./index.less";

function Index(props) {
  // 包裹整个页面的DOM 元素
  const { main } = props;
  const getButton = createRef();
  const init = () => {
    // 页面最下方的 按钮组件
    const { current: targetDOM } = getButton;
    // 获取按钮组件的高度
    let targetH = parseFloat(getComputedStyle(targetDOM)["height"]);
    // 拿到 屏幕显示区域的高度
    let winH = window.innerHeight;
    // 设置 按钮组件应该在的位置
    targetDOM.style.top = `${winH - targetH}px`;
    // 页面发送滚动的时候 也要重新计算一下
    window.onscroll = function () {
      targetH = parseFloat(getComputedStyle(targetDOM)["height"]);
      winH = window.innerHeight;
      targetDOM.style.top = `${winH - targetH}px`;
    };
    // 获取 整个页面的高度
    // const mainPageWidth = parseFloat(getComputedStyle(main.current).height);
    // 给包裹的整个页面的标签 增加一个 按钮组件的高度  (目的是不让按钮组件遮盖其他的标签)
    main.current.style.paddingBottom = `${targetH}px`;
  };
  useEffect(() => {
    init();
  });
  return (
    <div className={styles.wrapper} ref={getButton}>
      <button className={styles.button}>GET</button>
    </div>
  );
}

export default Index;
