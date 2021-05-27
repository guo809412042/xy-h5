import React, { useEffect, useState, createRef } from "react";
import styles from "./index.less";

function Index() {
  const [isPlay, setIsPlay] = useState(false);
  const video = createRef();
  useEffect(() => {
    // // 取图片的第一帧 作为图片
    // const video = document.getElementById('video')
    // const canvas = document.createElement('canvas')
    // const ctx = canvas.getContext('2d')
    // video.onloadeddata = function (e){
    //   console.log(this)
    //   canvas.width = 100
    //   canvas.height = 100
    //   const width = this.vidieoWidth;
    //   const heitght = this.vidieoHeight
    //   ctx.drawImage(this,0,0, width,heitght)
    //   console.log(ctx)
    //   const src = canvas.toDataURL('image/jpeg');
    //   seti(src)
    // }

    // 监听是否播放完成
    video.current.addEventListener(
      "ended",
      function () {
        setIsPlay(false);
      },
      false
    );
  }, []);
  const handleClick = () => {
    // setIsPlay(!isPlay);
    const mp4 = video.current;
    // 如果是播放状态的话
    // if (isPlay) {
    //   // 暂停
    //   mp4.pause();
    // } else {
    //   // 继续播放
    //   mp4.play();
    // }
    if (!mp4.paused) {
      setIsPlay(false);
      // 暂停
      mp4.pause();
    } else {
      // 继续播放
      setIsPlay(true);
      mp4.play();
    }
  };
  return (
    <div className={styles.headerVideoViewWrapper}>
      <div className={styles.videoViewWrapper}>
        <div className={styles.videoWrapper} onClick={handleClick}>
          {/* "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200306%2F319d7254fa4545e9abec65a4a0d29790.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624509964&t=971a89e7d2da4faec1cdfc15ded10f70" */}
          <video
            ref={video}
            src="../12321.mp4"
            poster="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200306%2F319d7254fa4545e9abec65a4a0d29790.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624509964&t=971a89e7d2da4faec1cdfc15ded10f70"
            webkit-playsinline="true"
            playsInline={true}
            x5-playsinline=""
          ></video>
          {!isPlay ? (
            <div className={styles.playIcon}>
              <span className="iconfont icon-bofang"></span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.gradientDIV}></div>
      </div>

      <div className={styles.videoTextWrapper}>
        <header className={styles.title}>
          asdasdasdasdasd🌞asdasdasdsd sdasdasdsd
        </header>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          consequatur saepe fugiat voluptates. Accusamus sint quia in voluptatem
          quo? Dolorem eaque cupiditate vero modi ab laboriosam corrupti cum,
          quos illum.
        </div>
      </div>
    </div>
  );
}

export default Index;
