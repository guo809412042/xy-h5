import React, { useEffect, createRef } from "react";
import BetterScroll from "better-scroll";
import BaseWrpper from "../BaseWrpper";
import TowColItem from "./components/TowColItem";
import styles from "./index.less";

function Index(props) {
  const { list, showIcon, setShowModelView } = props;
  const { data } = list;
  const listWrapper = createRef();
  const wrapper = createRef();
  const context = createRef();
  const init = () => {
    // 计算padding
    // const paddingLeft = parseFloat(
    //   getComputedStyle(listWrapper.current)["paddingLeft"]
    // );
    // 拿到所有的item元素
    const itemS = context.current.children;
    // 子元素的个数
    const itemCount = itemS.length;
    // 获取一个item的高度
    const item = itemS[0].children[0];
    const itemPadding = parseFloat(getComputedStyle(item)["paddingLeft"]) * 2;
    const itemH =
      itemS.length > 0 ? parseFloat(getComputedStyle(item)["height"]) : 0;
    const itemW =
      itemS.length > 0
        ? parseFloat(getComputedStyle(item)["width"]) + itemPadding
        : 0;

    // 单行的情况
    const baseRowH = itemH;
    // 双行的情况
    const maxRowH = itemH * 2;
    const rowH = itemCount > 2 ? maxRowH : baseRowH;
    //   ${rowH + 0.5}px   +0.5 是因为计算的时候有小数点 然后在超大屏显示的时候 计算出来的结果显示不精确
    context.current.style.height = `${rowH + 0.5}px`;
    context.current.style.width =
      itemCount < 2
        ? `${itemCount * itemW}px`
        : `${Math.ceil(itemCount / 2) * itemW}px`;

    new BetterScroll(wrapper.current, {
      scrollX: true,
      click: true,
      freeScroll: true,
      eventPassthrough: "vertical",
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <BaseWrpper
      title={list.title}
      showBtn={true}
      setShowModelView={setShowModelView}
      list={list}
    >
      <main ref={listWrapper} className={`${styles.itemContext} towColWrapper`}>
        <div className={styles.wrapper} ref={wrapper}>
          <ul className={styles.context} ref={context}>
            {/* <li className={styles.item}></li> */}
            {data.length > 0
              ? data.map((item, index) => (
                  <li className={styles.item} key={index}>
                    <TowColItem itemData={item} showIcon={showIcon} />
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </main>
    </BaseWrpper>
  );
}

export default Index;
