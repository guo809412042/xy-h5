import React, { createRef, useEffect } from "react";
import WaterfallItem from "./components/WaterfallItem";
import styles from "./index.less";
function Index(props) {
  const { list } = props;
  const WaterfallList = createRef();
  const context = createRef();
  const wrapper = createRef();
  const init = () => {
    const items = context.current.children;
    const pageW = parseFloat(getComputedStyle(WaterfallList.current)["width"]);
    const padding =
      parseFloat(getComputedStyle(WaterfallList.current)["paddingLeft"]) * 2;
    const itemWidth = parseFloat(getComputedStyle(items[0])["width"]);
    // 瀑布流的列数
    const columns = parseInt(pageW / itemWidth);
    // 保存所有item的高度的数组
    const heightArr = [];
    for (let i = 0; i < items.length; i++) {
      if (i < columns) {
        items[i].style.top = 0;
        items[i].style.left = `${itemWidth * i}px`;
        heightArr.push(parseFloat(getComputedStyle(items[i])["height"]));
      } else {
        const minHeight = Math.min(...heightArr);
        const index = heightArr.indexOf(minHeight);
        items[i].style.top = `${heightArr[index]}px`;
        items[i].style.left = `${items[index].offsetLeft}px`;
        heightArr[index] =
          heightArr[index] +
          Math.ceil(parseFloat(getComputedStyle(items[i])["height"]));
      }
    }
    context.current.style.height = `${Math.ceil(Math.max(...heightArr))}px`;
    context.current.style.width = `${pageW - padding}px`;
  };

  useEffect(() => {
    window.onload = function () {
      init();
    };
  });
  return (
    <div className={styles.WaterfallList} ref={WaterfallList}>
      <header className={styles.listHeader}>
        <div className={styles.title}>{list.title}</div>
      </header>
      <main className={styles.wrapper} ref={wrapper}>
        <ul className={styles.context} ref={context}>
          <li className="item">
            <WaterfallItem
              url={
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2961974070,137066290&fm=26&gp=0.jpg"
              }
            />
          </li>
          <li className="item">
            <WaterfallItem
              url={
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201206%2F16%2F20120616174342_ycsye.thumb.700_0.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624266506&t=cc5dccf4a73c47e9d181c295d94de32e"
              }
            />
          </li>
          <li className="item">
            <WaterfallItem
              url={
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs6.sinaimg.cn%2Fbmiddle%2F612e9ecfh6f1f93cbc685%26690&refer=http%3A%2F%2Fs6.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624266506&t=9f04b791e0d360e32c8342347c4098fa"
              }
            />
          </li>
          <li className="item">
            <WaterfallItem
              url={
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201206%2F16%2F20120616174342_ycsye.thumb.700_0.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624266506&t=cc5dccf4a73c47e9d181c295d94de32e"
              }
            />
          </li>
          <li className="item">
            <WaterfallItem
              url={
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs6.sinaimg.cn%2Fbmiddle%2F612e9ecfh6f1f93cbc685%26690&refer=http%3A%2F%2Fs6.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624266506&t=9f04b791e0d360e32c8342347c4098fa"
              }
            />
          </li>
          <li className="item">
            <WaterfallItem
              url={
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355464299,584008140&fm=26&gp=0.jpg"
              }
            />
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Index;
