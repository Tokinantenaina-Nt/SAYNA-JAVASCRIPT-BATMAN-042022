// -------------- general JS --------------------

window.onload = () => {
  document.querySelector(".textIntro").classList.add("init1");
  // document.querySelector(".textIntro").style.cssText = `
  // margin: 50px;
  // border-left: 1px solid var(--color-3);
  // border-right: 1px solid var(--color-3);
  // `;
  window.addEventListener("scroll", (e) => {
    console.log(scrollY);
    // -------- menu à côté --------------
    if (scrollY > 120) {
      document.querySelector("#scrollMenu").style.top =
        window.scrollY + 200 + "px";
    }
    // ----------- 1st paragraph --------
    if (scrollY > 92) {
      document.querySelector(".batmanAuCinema").classList.add("init1");
    }
    // ------------ photos zoom ------------
    if (scrollY > 350) {
      document.querySelector(".zoom00").classList.add("zoom1");
      document.querySelector(".zoom01").classList.add("zoom1");
      document.querySelector(".zoom02").classList.add("zoom1");
    }
    if (scrollY > 1700) {
      document.querySelector(".zoom03").classList.add("zoom1");
      document.querySelector(".zoom04").classList.add("zoom1");
      document.querySelector(".zoom05").classList.add("zoom1");
    }
    if (scrollY > 2856) {
      document.querySelector("#bandeAnnonce img").classList.add("zoom1");
    }
    // ----------- 2nd paragraph --------
    if (scrollY > 1500) {
      document.querySelector(".nemesis").classList.add("init1");
    }
    if (scrollY > 2172) {
      document.querySelector(".multimedia h4").classList.add("init1");
    }
  });

  // --------------slide automatique Batman illustraation ----------------
  let slideIndex = 0;
  slideShow();
  function slideShow() {
    let slide = document.querySelectorAll(".slides");
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.cssText =
        "display: none; opacity: 0; transition: 2s ease; ";
    }
    slideIndex++;
    if (slideIndex > slide.length) {
      slideIndex = 1;
    }
    slide[slideIndex - 1].style.cssText =
      "display: block; opacity: 1;transition: 2s ease; ";
    setTimeout(slideShow, 2000);
  }
  let slideIndexText = 0;
  slideShowText();
  function slideShowText() {
    let slideText = document.querySelectorAll(".citationText");
    for (let i = 0; i < slideText.length; i++) {
      slideText[i].style.cssText = "display: none;";
    }
    slideIndexText++;
    if (slideIndexText > slideText.length) {
      slideIndexText = 1;
    }
    slideText[slideIndexText - 1].style.cssText = slideText[
      slideIndexText - 1
    ].style.cssText = "display: block; transition: 2s ease; ";
    setTimeout(slideShowText, 2000);
  }

  // --------------------- Hover Bathome ---------------
  const batHome11 = document.querySelector("#batHome11");
  const batHome111 = document.querySelector("#batHome111");
  const batHome12 = document.querySelector("#batHome12");
  const batHome121 = document.querySelector("#batHome121");
  const batHome13 = document.querySelector("#batHom13");
  const batHome131 = document.querySelector("#batHome131");
  const figCaptionBatHome1 = document.querySelector("#figCaptionBatHome1");
  const figCaptionBatHome2 = document.querySelector("#figCaptionBatHome2");
  const figCaptionBatHome3 = document.querySelector("#figCaptionBatHome3");

  const batHome21 = document.querySelector("#batHome21");
  const batHome22 = document.querySelector("#batHome22");
  const batHome23 = document.querySelector("#batHome23");
  const batHome211 = document.querySelector("#batHome211");
  const batHome221 = document.querySelector("#batHom221");
  const batHome231 = document.querySelector("#batHome231");
  const figCaptionBatHome4 = document.querySelector("#figCaptionBatHome4");
  const figCaptionBatHome5 = document.querySelector("#figCaptionBatHome5");
  const figCaptionBatHome6 = document.querySelector("#figCaptionBatHome6");

  batHome11.addEventListener("mouseenter", () => {
    figCaptionBatHome1.style.opacity = "1";
    batHome111.style.opacity = "0.5";
  });
  batHome11.addEventListener("mouseout", () => {
    figCaptionBatHome1.style.opacity = "0";
    batHome111.style.opacity = "0";
  });

  batHome12.addEventListener("mouseenter", () => {
    figCaptionBatHome2.style.opacity = "1";
    batHome121.style.opacity = "0.5";
  });
  batHome12.addEventListener("mouseout", () => {
    figCaptionBatHome2.style.opacity = "0";
    batHome121.style.opacity = "0";
  });

  batHome13.addEventListener("mouseenter", () => {
    figCaptionBatHome3.style.opacity = "1";
    batHome131.style.opacity = "0.5";
  });
  batHome13.addEventListener("mouseout", () => {
    figCaptionBatHome3.style.opacity = "0";
    batHome131.style.opacity = "0";
  });

  batHome21.addEventListener("mouseenter", () => {
    console.log("entrer !!!");
    // figCaptionBatHome4.style.opacity = "1";
    // batHome211.style.opacity = "0.5";
  });
  batHome21.addEventListener("mouseout", () => {
    figCaptionBatHome4.style.opacity = "0";
    batHome211.style.opacity = "0";
  });

  batHome22.addEventListener("mouseenter", () => {
    figCaptionBatHome5.style.opacity = "1";
    batHome221.style.opacity = "0.5";
  });
  batHome22.addEventListener("mouseout", () => {
    figCaptionBatHome5.style.opacity = "0";
    batHome221.style.opacity = "0";
  });

  batHome23.addEventListener("mouseenter", () => {
    figCaptionBatHome6.style.opacity = "1";
    batHome231.style.opacity = "0.5";
  });
  batHome23.addEventListener("mouseout", () => {
    figCaptionBatHome6.style.opacity = "0";
    batHome231.style.opacity = "0";
  });
};
