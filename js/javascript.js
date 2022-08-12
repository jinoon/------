//design
let fullHeight = window.innerHeight;

window.document.getElementById("wrapper").style.height = fullHeight + "px";
window.addEventListener("resize", function () {
  fullHeight = window.innerHeight;
  window.document.getElementById("wrapper").style.height = fullHeight + "px";
});

//functions
let pageNum = 0;
const page = window.document.getElementById("page");
const searchNum = window.document.getElementById("search-number");

//language variables
let lang = "ko";
let pageUrl = "/pages/ko/US";
let lastPage = 105;

//chage languege
const langBtn = window.document.getElementsByClassName("lang");
for (let i = 0; i < langBtn.length; i++) {
  langBtn[i].addEventListener("click", function () {
    if (pageNum == 0) {
      lang = this.dataset.lang;
      if (lang == "ko") {
        pageUrl = "/pages/ko/US";
        lastPage = 105;
      } else {
        pageUrl = "/pages/en/US";
        lastPage = 105;
      }
    }
  });
}

//chage page
// next page
const nextBtn = window.document.getElementById("next");
nextBtn.addEventListener("click", function () {
  if (pageNum < lastPage) {
    pageNum++;
    searchNum.value = pageNum;
    page.src = pageUrl + pageNum + ".webp";
    preloadPages();
  } else {
    if (lang == "ko") {
      alert("마지막 페이지 입니다.");
    } else {
      alert("Last Page");
    }
  }
});

//prev page
const prevBtn = window.document.getElementById("prev");
prevBtn.addEventListener("click", function () {
  if (pageNum > 1) {
    pageNum--;
    searchNum.value = pageNum;
    page.src = pageUrl + pageNum + ".webp";
  } else if (pageNum == 1) {
    if (lang == "ko") {
      alert("첫 페이지 입니다.");
    } else {
      alert("First Page");
    }
  } else {
    pageNum++;
    searchNum.value = pageNum;
    page.src = pageUrl + pageNum + ".webp";
    preloadPages();
  }
});
//search page

//pages preload
function preloadPages() {
  let prePages;

  if (pageNum < 2) {
    prePages = 2;
    for (let i = prePages - 1; i < prePages + 7; i++) {
      let pages = new Image();
      pages.src = pageUrl + i + ".webp";
      console.log("load pages");
      console.log(i);
    }
  } else if (pageNum < lastPage - 6) {
    prePages = pageNum + 7;

    let pages = new Image();
    pages.src = pageUrl + prePages + ".webp";
    console.log("load pages");
    console.log(pages.src);
  }
}

let firstPageKo = new Image();
firstPageKo.src = "/pages/ko/US1.webp";

let firstPageEn = new Image();
firstPageEn.src = "/pages/en/US1.webp";

//navigation
const navBtn = window.document.getElementById("nav-btn");
const navMenu = window.document.getElementById("nav");
const navBack = window.document.getElementById("nav-back");
navBtn.addEventListener("click", function () {
  navBack.classList.toggle("on");
  navMenu.classList.toggle("on");
  console.log("test");
});
navBack.addEventListener("click", function () {
  navBack.classList.toggle("on");
  navMenu.classList.toggle("on");
  console.log("test");
});
