"use strict";
var root = document.querySelector(":root");
var rootStyles = getComputedStyle(root);
var navbarDarkColor = rootStyles.getPropertyValue("--color4");
// NAVBAR BACKGROUND CHANGE ON SCROLL
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// // NAVBAR FADE
// const handleHover = function (e) {
//   if (e.target.classList.contains("span")) {
//     const link = e.target;
//     const siblings = link.closest(".navbar").querySelectorAll(".span");
//     const logo_name = document.querySelector(".name");
//     const theme_button = document.querySelector(".theme");
//     siblings.forEach((el) => {
//       if (el !== e.target) {
//         el.style.opacity = this;
//       }
//     });
//     logo_name.style.opacity = this;
//     theme_button.style.opacity = this;
//   }
// };
// navbar.addEventListener("mouseover", handleHover.bind(0.5));

// navbar.addEventListener("mouseout", handleHover.bind(1));

// Dark Light Theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// SCROLL LINK ACTIVE
const sections = document.querySelectorAll("section[id]");
console.log(sections[0]);
// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute("id");
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding nav_row link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_row .nav_item a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav_row .nav_item a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

//********************************** Animation on scroll ****************************************

// --------------- left --------------

const leftAnimation = document.querySelectorAll(".left");
// console.log(leftAnimation)
const revealSectionLeft = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    // entry.target.classList.remove("show-left");
    return;
  } else {
    entry.target.classList.add("show-left");
  }
};

const leftObs = new IntersectionObserver(revealSectionLeft, {
  root: null,
  threshold: 0.1,
});

leftAnimation.forEach((lefty) => {
  leftObs.observe(lefty);
});

// ------------------ right -------------------

const rightAnimation = document.querySelectorAll(".right");
// console.log(leftAnimation)
const revealSectionRight = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
  // entry.target.classList.remove("show-right");
  return;
  } else {
  entry.target.classList.add("show-right");
  }
};

const rightObs = new IntersectionObserver(revealSectionRight, {
  root: null,
  threshold: .1,
});

rightAnimation.forEach((righty) => {
  rightObs.observe(righty);
});

// ------------------- bottom -----------------

const bottomAnimation = document.querySelectorAll(".bottomToUp");
// console.log(leftAnimation)
const revealSectionBottom = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
  // entry.target.classList.remove("show-right");
  return;
  } else {
  entry.target.classList.add("show-bottom");
  }
};

const bottomObs = new IntersectionObserver(revealSectionBottom, {
  root: null,
  threshold: .1,
});

bottomAnimation.forEach((bottom) => {
  bottomObs.observe(bottom);
});