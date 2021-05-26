import React, { useEffect, useState, createRef } from "react";
import moment from "moment";
import styles from "./index.less";
function Index(props) {
  const { itemData } = props;
  const [timer, setTimer] = useState();
  const [isPlay, setIsPlay] = useState(false);
  const audio = createRef();
  useEffect(() => {
    // 预加载  尽量不用 首屏加载很慢
    // audio.current.load();
    // 当媒体加载完成的时候
    audio.current.addEventListener("canplay", function (e) {
      // e.target.load();
      // // 获取当前音乐的总时长
      const time = e.target.duration * 1000;
      // 转为指定的时间格式
      const timeStr = moment(time).format("mm:ss");
      // 设置时间字符串
      setTimer(timeStr);
    });
    audio.current.addEventListener(
      "ended",
      function () {
        setIsPlay(false);
      },
      false
    );

    // console.log(audio.current.duration);
  });

  // 播放 暂停的功能
  const handleClick = () => {
    setIsPlay(!isPlay);
    // 如果是播放状态的话
    if (isPlay) {
      // 暂停
      audio.current.pause();
    } else {
      // 继续播放
      audio.current.play();
    }
  };
  return (
    <div className={styles.musicItemWrapper}>
      <div className={styles.itemLeftView}>
        <div className={styles.audioWrapper}>
          <div>
            {/* 可以设置音乐区域的背景图片 */}
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftva4.sinaimg.cn%2Flarge%2F006yt1Omgy1gd554s88yoj30nm0xc46p.jpg&refer=http%3A%2F%2Ftva4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624509964&t=c9a4c3bfad8ba6e031457ca23904b156"
              alt=""
            />
            <audio
              ref={audio}
              controls
              // preload="true"
              style={{ display: "none" }}
            >
              <source src="../41813.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div className={styles.play} onClick={handleClick}>
            <span
              className={
                isPlay ? "iconfont icon-zhengzaibofang" : "iconfont icon-bofang"
              }
            ></span>
          </div>
        </div>
      </div>
      <div className={styles.itemRightView}>
        <div className={styles.title}>1111111</div>
        <div className={styles.text}>asdasd · {timer}</div>
      </div>
    </div>
  );
}
// icon-zanting
export default Index;
