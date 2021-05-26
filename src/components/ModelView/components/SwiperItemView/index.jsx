import React, { useEffect, createRef, useState } from "react";
import styles from "./index.less";

function Index() {
  const [isPlay, setIsPlay] = useState(false);
  const mediaWrapper = createRef();
  const video = createRef();
  const img = createRef();
  // 初始化
  const init = async () => {
    // 设置视频尺寸
    if (video.current !== null) {
      // 监听是否播放完成
      video.current.addEventListener(
        "ended",
        function () {
          setIsPlay(false);
        },
        false
      );

      const videoW = video.current.offsetWidth;
      const videoH = video.current.offsetHeight;
      // 比例大于 一比一
      if (videoH / videoW > 1) {
        console.log(1111);
        video.current.style.height = `${videoH * 0.7}px`;
        video.current.style.width = `${videoW * 0.7}px`;
        console.log(video.current.style.height, video.current.style.width);
        // 比例小于 一比一
      } else if (videoH / videoW < 1) {
        console.log(22222);
        // video.current.style.height = `${videoH * 0.7}px`;
        video.current.style.width = `${window.innerWidth - 32}px`;
        // mediaWrapper.current.style.padding = "0 16px 0 16px";

        // 比例等于一比一
      } else if (videoH / videoW === 1) {
        console.log(33333);
        video.current.style.height = `328px`;
        video.current.style.width = `328px`;
      }
    }

    // 设置图片尺寸
    if (img.current !== null) {
      const imgDom = img.current;
      // const media = mediaWrapper.current;
      // 获取图片的尺寸
      const { imgW, imgH } = await getImageSize(img.current);
      // 比例大于 一比一
      if (imgH / imgW > 1) {
        console.log(333);
        // imgDom.style.height = `${imgH * 0.7}px`;
        imgDom.style.width = `${imgW * 0.7}px`;
      } else if (imgH / imgW < 1) {
        console.log(2222);
        // media.style.width = `${window.innerWidth - 32}px`;
        imgDom.style.width = `${window.innerWidth - 32}px`;
        // mediaWrapper.current.style.padding = "0 16px 0 16px";
      } else if (imgH / imgW === 1) {
        imgDom.style.height = `328px`;
        imgDom.style.width = `328px`;
      }
    }
  };
  const getImageSize = (DOM) => {
    return new Promise((resolve) => {
      const img_obj = new Image();
      img_obj.src = DOM.src;
      img_obj.onload = function () {
        resolve({
          imgW: this.width,
          imgH: this.height,
        });
      };
    });
  };
  // 播放和暂停
  const handleClick = () => {
    if (video.current !== null) {
      setIsPlay(!isPlay);
      const mp4 = video.current;
      // 如果是播放状态的话
      if (isPlay) {
        // 暂停
        mp4.pause();
      } else {
        // 继续播放
        mp4.play();
      }
    }
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div className={styles.medieWrapper} ref={mediaWrapper}>
      {/* 加入判断条件 是图片还是视频 */}
      {true ? (
        <div className={styles.videoWrapper} onClick={handleClick}>
          <video
            ref={video}
            src="../12321.mp4"
            // 默认显示图片
            // poster="../logo512.png"
            webkit-playsinline="true"
            playsInline={true}
            x5-playsinline=""
          ></video>
          {isPlay ? (
            ""
          ) : (
            <div className={styles.playIcon}>
              <span className="iconfont icon-bofang"></span>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.imageWrapper}>
          <img
            ref={img}
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.play.cn%2Ff%2Fpkg%2Fph%2Fview%2Fsmall%2F000%2F003%2F735%2F27f28abbh38feabf.jpg&refer=http%3A%2F%2Fcdn.play.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624604958&t=725dcd47e1fa68b0c7936a2534a68175"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default Index;
