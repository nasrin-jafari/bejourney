// float video(home page)
const video = document.getElementById("iframe-container");
const coverIframe = document.getElementById("cover-iframe");
function showVideo() {
  video.style.display = "flex";
  video.style.zIndex = "30";
  coverIframe.style.display = "flex";
}
function closeIframe() {
  video.style.display = "none";
  coverIframe.style.display = "none";
}
