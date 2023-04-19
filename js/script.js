const desktopLinks = document.querySelector(".desktop__links");
const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header__logo__img");
const headerPlaceholder = document.querySelector(".header-placeholder");
const headerHeight = header.offsetHeight;
const navLinksColor = document.querySelector(".nav-link");

function openNav() {
  document.getElementById("mySidebar").style.right = "0";
  header.classList.add("sticky");
  headerPlaceholder.style.display = "block";
  headerPlaceholder.style.height = `${headerHeight}px`;
  document.querySelector(".overlay").classList.add("active");
  navLinksColor.classList.toggle("sidebarColor");
}
function closeNav() {
  document.getElementById("mySidebar").style.right = "-250px";
  if (window.pageYOffset < headerHeight) {
    header.classList.remove("sticky");
    headerPlaceholder.style.display = "none";
    headerPlaceholder.style.height = "0";
  }
  document.querySelector(".overlay").classList.remove("active");
  document.querySelector(".nav-link").classList.remove("sidebarColor");
}

// Sticky Menu
window.addEventListener("scroll", function () {
  if (!document.getElementById("mySidebar").classList.contains("active")) {
    if (window.pageYOffset >= headerHeight) {
      header.classList.add("sticky");
      headerLogo.classList.add("sticky");
      headerPlaceholder.style.display = "block";
      headerPlaceholder.style.height = `${headerHeight}px`;
      desktopLinks.classList.add("sticky"); 
    } else {
      header.classList.remove("sticky");
      headerLogo.classList.remove("sticky");
      headerPlaceholder.style.display = "none";
      headerPlaceholder.style.height = "0";
      desktopLinks.classList.remove("sticky");
    }
  }
});

//change color of links onclick

var currentPageUrl = window.location.href;
var navLinks = document.querySelectorAll(".nav-link");

for (var i = 0; i < navLinks.length; i++) {
  var linkUrl = navLinks[i].getAttribute("href");

  if (linkUrl == currentPageUrl) {
    navLinks[i].classList.add("active");
  }
}
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

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
