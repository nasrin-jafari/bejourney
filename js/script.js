const header = document.querySelector(".header");
const headerPlaceholder = document.querySelector(".header-placeholder");
const headerHeight = header.offsetHeight;

function openNav() {
  document.getElementById("mySidebar").style.right = "0";
  header.classList.add("sticky");
  headerPlaceholder.style.display = "block";
  headerPlaceholder.style.height = `${headerHeight}px`;
  document.querySelector(".overlay").classList.add("active");
}

function closeNav() {
  document.getElementById("mySidebar").style.right = "-250px";
  if (window.pageYOffset < headerHeight) {
    header.classList.remove("sticky");
    headerPlaceholder.style.display = "none";
    headerPlaceholder.style.height = "0";
  }
  document.querySelector(".overlay").classList.remove("active");
}

// Sticky Menu
window.addEventListener("scroll", function () {
  if (!document.getElementById("mySidebar").classList.contains("active")) {
    if (window.pageYOffset >= headerHeight) {
      header.classList.add("sticky");
      headerPlaceholder.style.display = "block";
      headerPlaceholder.style.height = `${headerHeight}px`;
    } else {
      header.classList.remove("sticky");
      headerPlaceholder.style.display = "none";
      headerPlaceholder.style.height = "0";
    }
  }
});
