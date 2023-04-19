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


// contact page script


var emailInput = document.getElementById("email-input");
var nameInput = document.getElementById("name-input");
var errorIconEmail = document.getElementById("error-icon__email");
var errorIconName = document.getElementById("error-icon__name");
const nameErrorMessage = document.getElementById("error-message");

emailInput.addEventListener("input", function (event) {
  if (emailInput.checkValidity()) {
    errorIconEmail.style.display = "none";
  }
});
nameInput.addEventListener("input", function (event) {
  if (nameInput.value.trim() !== "") {
    errorIconName.style.display = "none";
  }
});
document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    if (!emailInput.checkValidity()) {
      errorIconEmail.style.display = "block";
      nameErrorMessage.style.display = "block";
    } else {
      document.getElementById("contact-from").submit();
      errorIconEmail.style.display = "none";
      nameErrorMessage.style.display = "none";
    }
  });
document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    if (nameInput.value === "") {
      errorIconName.style.display = "block";
      nameErrorMessage.style.display = "block";
    } else {
      document.getElementById("contact-from").submit();
      errorIconName.style.display = "none";
      nameErrorMessage.style.display = "none";
    }
  });

// var emailInput = document.getElementById("name_input");
//       emailInput.addEventListener("input", function (event) {
//         var errorIcon = document.getElementById("error-icon__container");
//         if (emailInput.checkValidity()) {
//           // مخفی کردن آیکون خطا در صورت اصلاح ایمیل
//           errorIcon.style.display = "none";
//         }
//       });
//       document
//         .getElementById("submit-btn")
//         .addEventListener("click", function (event) {
//           if (!emailInput.checkValidity()) {
//             // نمایش خطا یا آیکون خطا
//             var errorIcon = document.getElementById("error-icon__container");
//             errorIcon.style.display = "block";
//           } else {
//             // ارسال فرم
//             document.getElementById("form__email").submit();
//           }
//         });
(function (document) {
  var animation = false,
    animationstring = "animation",
    keyframeprefix = "",
    domPrefixes = "Webkit Moz O ms Khtml".split(" "),
    pfx = "",
    docElement = document.documentElement,
    modElem = document.createElement("modernizr");

  if (modElem.style.animationName !== undefined) {
    animation = true;
  }

  if (animation === false) {
    for (var i = 0; i < domPrefixes.length; i++) {
      if (modElem.style[domPrefixes[i] + "AnimationName"] !== undefined) {
        pfx = domPrefixes[i];
        animationstring = pfx + "Animation";
        keyframeprefix = "-" + pfx.toLowerCase() + "-";
        animation = true;
        break;
      }
    }
  }
  docElement.className += " " + (animation ? "" : "no-") + "cssanimations";
})(document);
