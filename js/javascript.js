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

// next page
const nextBtn = window.document.getElementById("next");
nextBtn.addEventListener("click", function () {
  if (pageNum < lastPage) {
    pageNum++;
    preloadPages();
    page.src = pageUrl + pageNum + ".webp";
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
    preloadPages();
    page.src = pageUrl + pageNum + ".webp";
  } else if (pageNum == 1) {
    if (lang == "ko") {
      alert("첫 페이지 입니다.");
    } else {
      alert("First Page");
    }
  } else {
    pageNum++;
    preloadPages();
    page.src = pageUrl + pageNum + ".webp";
  }
});

//pages preload
function preloadPages() {
  for (let i = pageNum - 3; i < pageNum + 3; i++) {
    let images = new Image();
    images.src = pageUrl + i + ".webp";
  }
}
