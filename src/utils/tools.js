export const cloesAllMedia = () => {
    let medias;
    const videos = document.querySelectorAll("video");
    const audios = document.querySelectorAll("audio");
    medias = [...videos, ...audios];
    medias.forEach((media) => {
      // 滑动轮播的时候 暂停所有的媒体播放
      // 有个BUG  暂停的媒体 目前没有想到好的办法显示 再次播放的图标
      media.pause();
      console.log(media.dataset.isstop);
      
    });
}