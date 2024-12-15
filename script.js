document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".filter-btn").forEach((eachBtn) => {
    eachBtn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((eachBtnNotActive) => {
        eachBtnNotActive.classList.remove("active");
      });
      eachBtn.classList.add("active");
    });
  });

  // Toggle Nav
  document.querySelector(".open-nav").addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.add("toggleNav");
  });
  document.querySelector(".close-nav").addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.remove("toggleNav");
  });

  document.querySelectorAll("nav ul li a").forEach((eachNavLink) => {
    eachNavLink.addEventListener("click", () => {
      const nav = document.querySelector("nav");
      nav.classList.remove("toggleNav");
    });
  });
  // /Toggle Nav

  let switchTheme = true;
  document.querySelector(".theme-btn").addEventListener("click", () => {
    switchTheme = !switchTheme;

    const circle = document.querySelector(".theme-btn .circle");
    const stylesheet = document.querySelector("#stylesheet");

    circle.style.marginLeft = switchTheme ? "21px" : "2px";
    circle.style.backgroundColor = switchTheme ? "white" : "var(--dark-color)";
    stylesheet.href = switchTheme ? "index.css" : "lightMode.css";

    localStorage.setItem("circleMl", circle.style.marginLeft);
    localStorage.setItem("circleBg", circle.style.backgroundColor);
    localStorage.setItem("css", stylesheet.href);

    // Change Mobile Nav Bg
    const mediaQuery = window.matchMedia(
      "(min-width: 320px) and (max-width: 599px)"
    );
    const nav = document.querySelector("nav");

    function handleMediaQueryChange(e) {
      if (e.matches) {
        nav.style.backgroundColor = switchTheme ? "black" : "white";
        localStorage.setItem("MobileNavBg", nav.style.backgroundColor);
      } else {
      }
    }
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // /Change Mobile Nav Bg
  });

  const savedCircleMl = localStorage.getItem("circleMl");
  const savedCircleBg = localStorage.getItem("circleBg");
  const savedCss = localStorage.getItem("css");
  const savedMobileNavBg = localStorage.getItem("MobileNavBg");

  if (savedCircleMl && savedCircleBg && savedCss && savedMobileNavBg) {
    const circle = document.querySelector(".theme-btn .circle");
    const stylesheet = document.querySelector("#stylesheet");
    const nav = document.querySelector("nav");

    circle.style.marginLeft = savedCircleMl;
    circle.style.backgroundColor = savedCircleBg;
    stylesheet.href = savedCss;
    nav.style.backgroundColor = savedMobileNavBg;
  }
});

function filterBtn(target) {
  document.querySelectorAll(".food-single-card").forEach((singleDishe) => {
    const DishData = singleDishe.getAttribute("data-type");
    singleDishe.style.display = "none";
    if (DishData == target.textContent) {
      singleDishe.style.display = "flex";
    }
  });
}
function filterBtnAll() {
  document.querySelectorAll(".food-single-card").forEach((singleDishe) => {
    singleDishe.style.display = "flex";
  });
}
