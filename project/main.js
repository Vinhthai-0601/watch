$(document).ready(function(){

    let loadbox = document.querySelector(".loadbox");
    let carousel = document.querySelector(".carousel-inner");
    let swiperslide = document.querySelector(".swiper-wrapper");
    let progress = document.querySelector("progress");
    let navbar = document.querySelector("nav");
    let logo = document.querySelector("#logo");
    fadeout(loadbox);
    fadein(carousel);
    fadein(swiperslide);
    Progress(progress);

    $(window).scroll(function(){
      let height = $(window).scrollTop();
      if(height > 0)
      {
        logo.classList.remove("navbar-brand");
        logo.classList.add("navbar-brand-black");
        changeClass(navbar);
      }
      else if (height == 0) {
        updateClass(navbar);
        logo.classList.add("navbar-brand");
        logo.classList.remove("navbar-brand-black");
      }
    })

    var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
      });

    function fadeout(el){
      setTimeout(()=>{
        el.style.display = "none";
        el.style.opacity = "0";
      },3000)
    }

    function fadein(el){
      setTimeout(()=>{
        el.style.display = "flex";
        el.style.opacity = "1";
      },3000)
    }

    function changeClass(el) {
      el.classList.add("navbar-light","bg-light");
      el.style.padding = "10";
    }

    function updateClass(el) {
      el.classList.remove("navbar-light","bg-light");
      el.style.padding = "10";
    }

    function Progress(el){
        $(window).scroll(function(){
          let height = $(window).scrollTop();
          if(height >= 0)
          {
            el.value = 0;
            el.style.opacity = "1";
            el.style.display = "flex";
          }
          if(height >= 100)
          {
            el.value = 100;
          }
          if(height >= 200)
          {
            el.value = 200;
          }
          if(height >= 300)
          {
            el.value = 300;
          }
          if(height >= 400)
          {
            el.value = 400;
          }
          if(height >= 500)
          {
            el.value = 500;
          }
          if(height >= 600)
          {
            el.value = 600;
          }
          if(height >= 700)
          {
            el.value = 700;
          }
          if(height >= 800)
          {
            el.value = 800;
          }
          if(height >= 900)
          {
            el.value = 900;
          }
          if(height >= 1000)
          {
            el.value = 1000;
          }
          if(height >= 1100)
          {
            el.value = 1100;
          }
          if(height >= 1200)
          {
            el.value = 1200;
          }
          if(height >= 1300)
          {
            el.value = 1300;
          }
          if(height >= 1400)
          {
            el.value = 1400;
          }
          if(height >= 1500)
          {
            el.value = 1500;
          }
          if(height >= 1600)
          {
            el.value = 1600;
          }
          if(height >= 1700)
          {
            el.value = 1700;
          }
          if(height >= 1800)
          {
            el.value = 1800;
          }
          if(height >= 1900)
          {
            el.value = 1900;
          }
          if(height >= 2000)
          {
            el.value = 2000;
          }
          if(height >= 2100)
          {
            el.value = 2100;
          }
          if(height >= 2200)
          {
            el.value = 2200;
          }
          if(height >= 2300)
          {
            el.value = 2300;
          }
          if(height >= 2400)
          {
            el.value = 2400;
          }
          if(height >= 2500)
          {
            el.value = 2500;
          }
        else if (height == 0) {
          el.style.opacity = "0";
        }
        console.log(height);
      })
    }
})
