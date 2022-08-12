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
    page.src = pageUrl + pageNum + ".webp";
    preloadPages();
  } else if (pageNum == 1) {
    if (lang == "ko") {
      alert("첫 페이지 입니다.");
    } else {
      alert("First Page");
    }
  } else {
    pageNum++;
    page.src = pageUrl + pageNum + ".webp";
    preloadPages();
  }
});

//pages preload
function preloadPages() {
  let prePages;
  if (pageNum < 4) {
    prePages = 4;
  } else if (pageNum > lastPage - 3) {
    prePages == lastPage - 3;
  } else {
    prePages == pageNum;
  }

  for (let i = prePages - 3; i < prePages + 3; i++) {
    let pages = new Image();
    pages.src = pageUrl + i + ".webp";
    console.log("load pages");
    console.log(i);
  }
}

let firstPageKo = new Image();
firstPageKo.src = "/pages/ko/US1.webp";

let firstPageEn = new Image();
firstPageEn.src = "/pages/en/US1.webp";
