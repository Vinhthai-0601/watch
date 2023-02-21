document.addEventListener("DOMContentLoaded", ()=>{
  window.onscroll = function(){scrollEvent()};

})

function scrollEvent() {
  let height = window.pageYOffset;
  let el1 = document.querySelector("#row1");
  let el2 = document.querySelector("#row2");
  let el3 = document.querySelector("#row3");
  let el4 = document.querySelector("#row4");
  let el5 = document.querySelector("nav");
  console.log(height);
  if(height >= 200){
    fadeIn(el1);
  }
  if (height >= 600) {
    fadeIn(el2);
    fadeOut(el4);
    fadeOut(el3);
  }
  if (height > 1000) {
    fadeIn(el3);
    fadeOut(el1);
  }
  if (height >= 1400) {
    fadeIn(el4);
    fadeOut(el2);
  }
  if (height >= 2000) {
    fadeOut(el3);
  }
  if (height <= 2000 &&    height > 1000)
  {
    fadeIn(el3);
  }
  if (height >= 100){
    changeClass(el5);
  }
  if (height == 0) {
    updateClass(el5);
    fadeOut(el1);
    fadeOut(el2);
    fadeOut(el3);
    fadeOut(el4);
  }
}

function fadeIn(el) {
  setTimeout(function() {
    el.style.opacity = "1";
  }, 300);
}

function fadeOut(el) {
  setTimeout(function() {
    el.style.opacity = "0";
  }, 300);
}

function changeClass(el) {
  el.classList.add("navbar-light","bg-light");
  el.style.padding = "10";
}

function updateClass(el) {
  el.classList.remove("navbar-light","bg-light");
  el.style.padding = "10";
}
