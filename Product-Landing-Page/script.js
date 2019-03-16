var video = document.getElementById('video');

window.addEventListener("load", resize);
window.addEventListener("resize", resize);

function resize() {
  //console.log(window.innerWidth);
  if (window.innerWidth < 575) {
    //let width = video.width;
    video.width = window.innerWidth * 0.90;
    video.height = ((9*video.width)/16);
  }
  //console.log(video.width/video.height);
}
