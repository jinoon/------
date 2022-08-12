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
const searchBtn = window.document.getElementById("search-btn");
searchBtn.addEventListener("click", function () {
  navBack.classList.toggle("on");
  navMenu.classList.toggle("on");
  pageNum = Number(searchNum.value);

  page.src = pageUrl + pageNum + ".webp";

  console.log(pageNum);

  for (let i = pageNum - 1; i < pageNum + 7; i++) {
    let pages = new Image();
    pages.src = pageUrl + i + ".webp";
  }
});
searchNum.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchBtn.click();
  }
});
//list page
const listPage = window.document.querySelectorAll(".f-list span");

for (let i = 0; i < listPage.length; i++) {
  listPage[i].addEventListener("click", function () {
    navBack.classList.toggle("on");
    navMenu.classList.toggle("on");
    pageNum = Number(this.dataset.pagenumber);

    page.src = pageUrl + pageNum + ".webp";

    console.log(pageNum);

    for (let i = pageNum - 1; i < pageNum + 7; i++) {
      let pages = new Image();
      pages.src = pageUrl + i + ".webp";
    }
  });
}

//pages preload
function preloadPages() {
  let prePages;

  if (pageNum < 2) {
    prePages = 2;
    for (let i = prePages - 1; i < prePages + 7; i++) {
      let pages = new Image();
      pages.src = pageUrl + i + ".webp";
    }
  } else if (pageNum < lastPage - 6) {
    prePages = pageNum + 7;
    let pages = new Image();
    pages.src = pageUrl + prePages + ".webp";
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
});
navBack.addEventListener("click", function () {
  navBack.classList.toggle("on");
  navMenu.classList.toggle("on");
});
