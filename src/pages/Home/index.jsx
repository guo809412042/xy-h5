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
  // ???????????????
  const setShowModelView = (data) => {
    setIsShowModel(!isShowModel);
    // ?????????????????????????????????
    setModelData(data);
  };
  const init = () => {
    // // ?????????????????????????????????
    // const footerBtn = document.querySelector(".footerBth").children[0];
    // const footerBtnH = footerBtn.offsetHeight;
    // /** ???????????????????????????????????? */
    // const items = document.querySelectorAll(".itemView");
    // window.onscroll = function (e) {
    //   // ?????????????????????
    //   const h = window.innerHeight;
    //   // ????????????????????? bottom????????????
    //   const btnBottom = h - footerBtnH;
    //   // ??????DOM??????
    //   const res = [...items].find((item) => {
    //     console.log(item.getBoundingClientRect().top, "---------");
    //     // ?????????????????? ??????????????????????????????
    //     // ????????????item??????????????? top??????
    //     if (item.getBoundingClientRect().top > btnBottom) {
    //       return item;
    //     }
    //   });
    //   console.log(res);
    // };
    // ?????????????????? ????????????
    const targetDOM = document.querySelector(".footerBth").children[0];
    // ???????????????????????????
    let targetH = parseFloat(getComputedStyle(targetDOM)["height"]);
    // ?????? ???????????????????????????
    let winH = window.innerHeight;
    // ?????? ??????????????????????????????
    targetDOM.style.top = `${winH - targetH}px`;
    // ??????????????????????????? ????????????????????????
    window.onscroll = function () {
      targetH = parseFloat(getComputedStyle(targetDOM)["height"]);
      winH = window.innerHeight;
      targetDOM.style.top = `${winH - targetH}px`;
      // ?????? ?????????????????????
      // const mainPageWidth = parseFloat(getComputedStyle(main.current).height);
      // ????????????????????????????????? ???????????? ?????????????????????  (????????????????????????????????????????????????)
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
      {/* ??????????????????div ?????????  ????????????????????????????????? */}
      <div className="footerBth">
        <FooterButtonView main={main} />
      </div>
    </div>
  );
}

export default Index;
