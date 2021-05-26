import React, { useEffect, createRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperItemView from "./components/SwiperItemView";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// Import Swiper styles
import styles from "./index.less";

function Index(props) {
  const { setIsShowModel, data } = props;
  const [page, setPage] = useState("");
  const share = createRef();
  const swiperWrapper = createRef();
  const foote = createRef();
  const swiper = createRef();
  // 初始化 设置弹出层的高度
  const init = () => {
    // setButtonViewHeight();
    const WinW = window.innerHeight;
    share.current.style.height = `${WinW}px`;
    // 获取要展示数据的数量
    const itemCount = data.data.length;
    // 设置初始要显示的值
    setPage(`1/${itemCount}`);

    // swiperWrapper.current.ontouchstart = e => {
    //   e.preventDefault();
    // }
    // 取消默认事件
    share.current.ontouchmove = (e) => {
      e.preventDefault();
    };
  };
  // const setButtonViewHeight = () => {
  //   // swiperWrapper 滑动轮播的高度
  //   const swiperWrapperH = parseFloat(
  //     getComputedStyle(swiperWrapper.current).height
  //   );
  //   const swiperWrapperTop = swiperWrapper.current.getBoundingClientRect().top;
  //   const pointY = swiperWrapperTop + swiperWrapperH + 40;
  //   console.log(swiperWrapperH);
  //   console.log(swiperWrapper.current.getBoundingClientRect());
  //   console.log(pointY);
  //   foote.current.style.top = `${pointY}px`;
  // };
  useEffect(() => {
    init();
  }, []);

  // 点击空白区域的回调
  const close = (e) => {
    console.log(e.target === share.current);
    if (e.target === share.current) {
      setIsShowModel(false);
    }
  };
  // 当轮播图滑动的回调
  const onSlideChange = (e) => {
    const currentIndex = e.realIndex + 1;
    setPage(`${currentIndex}/${data.data.length}`);
  };
  return (
    <div ref={share} className={styles.shareWrapper} onClick={(e) => close(e)}>
      <div className={styles.swiperWrapper} ref={swiperWrapper}>
        <Swiper
          className="aaa"
          spaceBetween={30}
          ref={swiper}
          onSlideChange={(e) => onSlideChange(e)}
        >
          <SwiperSlide className={styles.item}>
            <SwiperItemView />
          </SwiperSlide>
          <SwiperSlide className={styles.item}>
            <SwiperItemView />
          </SwiperSlide>
          {data.data.length > 0
            ? data.data.map((item, index) => (
                <SwiperSlide key={index} className={styles.item}>
                  Slide {index}
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
        <div className={styles.footer} ref={foote}>
          <button className={styles.button}>GET</button>
          <h2 className={styles.pageIndex}>{page}</h2>
        </div>
      </div>
    </div>
  );
}

export default Index;
