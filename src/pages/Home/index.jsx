import React, { useState, createRef, useEffect } from "react";
import HeaderBar from "../../components/HeaderBar";
import HeaderVideoView from "../../components/HeaderVideoView";
import TowColList from "../../components/TowColList";
import ThreeColList from "../../components/ThreeColList";
import ThreeRowList from "../../components/ThreeRowList";
import WaterfallLits from "../../components/WaterfallLits";
import ModelView from "../../components/ModelView";
import FooterButtonView from "../../components/FooterButtonView";

function Index() {
  const [isShowModel, setIsShowModel] = useState(false);
  const [modelData, setModelData] = useState();
  const main = createRef();

  const list = {
    title: "Theme",
    data: [
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
    ],
  };
  const list1 = {
    title: "Music",
    data: [
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
    ],
  };
  const list2 = {
    title: "Sticker",
    data: [
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
    ],
  };
  const list3 = {
    title: "Text",
    data: [
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
    ],
  };
  const list4 = {
    title: "Transition",
    data: [
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
    ],
  };
  const list5 = {
    title: "Filter",
    data: [
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
    ],
  };
  const list6 = {
    title: "FX",
    data: [
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
    ],
  };
  const list7 = {
    title: "Template",
    data: [
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
    ],
  };
  // 显示弹出框
  const setShowModelView = (data) => {
    setIsShowModel(!isShowModel);
    // 传入弹出框要显示的数据
    setModelData(data);
  };
  const init = () => {
    // // 等到下面按钮容器的高度
    // const footerBtn = document.querySelector(".footerBth").children[0];
    // const footerBtnH = footerBtn.offsetHeight;
    // /** 控制滚轮跳滚到某一个位置 */
    // const items = document.querySelectorAll(".itemView");
    // window.onscroll = function (e) {
    //   // 当前屏幕的高度
    //   const h = window.innerHeight;
    //   // 获取下方按钮的 bottom的偏移量
    //   const btnBottom = h - footerBtnH;
    //   // 查找DOM节点
    //   const res = [...items].find((item) => {
    //     console.log(item.getBoundingClientRect().top, "---------");
    //     // 逻辑上有问题 需要在加上次一层判断
    //     // 如果当前item的在屏幕的 top位置
    //     if (item.getBoundingClientRect().top > btnBottom) {
    //       return item;
    //     }
    //   });
    //   console.log(res);
    // };
    // 页面最下方的 按钮组件
    const targetDOM = document.querySelector(".footerBth").children[0];
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
      // 获取 整个页面的高度
      // const mainPageWidth = parseFloat(getComputedStyle(main.current).height);
      // 给包裹的整个页面的标签 增加一个 按钮组件的高度  (目的是不让按钮组件遮盖其他的标签)
      main.current.style.paddingBottom = `${targetH}px`;
    };
  };
  useEffect(() => {
    init();
  });
  return (
    <div style={{ position: "relative" }} ref={main}>
      <HeaderBar />
      <HeaderVideoView />
      <div className="itemView" data-index="1">
        <TowColList
          list={list}
          showIcon={true}
          setShowModelView={setShowModelView}
        />
      </div>
      <div className="itemView" data-index="2">
        <ThreeRowList list={list1} setShowModelView={setShowModelView} />
      </div>
      <div className="itemView" data-index="3">
        <ThreeColList list={list2} setShowModelView={setShowModelView} />
      </div>
      <div className="itemView" data-index="4">
        <ThreeColList list={list3} setShowModelView={setShowModelView} />
      </div>
      <div className="itemView" data-index="5">
        <ThreeColList
          list={list4}
          type={1}
          setShowModelView={setShowModelView}
        />
      </div>
      <div className="itemView" data-index="6">
        <TowColList
          list={list5}
          showIcon={false}
          setShowModelView={setShowModelView}
        />
      </div>

      <div className="itemView" data-index="7">
        <ThreeColList list={list6} setShowModelView={setShowModelView} />
      </div>

      <WaterfallLits list={list7} />
      {isShowModel ? (
        <ModelView setIsShowModel={setIsShowModel} data={modelData} />
      ) : (
        ""
      )}
      {/* 讲主要主题的div 传过去  用来计算整个页面的高度 */}
      <div className="footerBth">
        <FooterButtonView main={main} />
      </div>
    </div>
  );
}

export default Index;
