$(document).ready(function(){
  let navbar = document.querySelector("nav");
  let logo = document.querySelector("#logo");
  let rolex = document.querySelector("#rolex");
  let omega = document.querySelector("#omega");
  let hublot = document.querySelector("#hublot");
  let blancpain = document.querySelector("#blancpain");

  getWatches(rolex, 1, 5);
  getWatches(omega, 3, 5);
  getWatches(hublot, 5, 5);
  getWatches(blancpain, 7, 5);
  $(".Seeall").click(function(e){
    e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains('rolex')){
      getWatches(rolex,1,10);
    }
    if(e.target.classList.contains('omega')){
      getWatches(omega,2,10);
    }
    if(e.target.classList.contains('hublot')){
      getWatches(hublot,3,10);
    }
    if(e.target.classList.contains('blancpain')){
      getWatches(blancpain,4,10);
    }
  })

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

  $(".btn-usd").click(function (e){
    e.preventDefault();
    let list = document.querySelectorAll(".price-vnd");
    if (list == null){
      return;
    }
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.currencylayer.com/live?access_key=1fde868f210408c0ee5779d977723e09&format=1&currencies=VND", true);
    xhr.onload = function() {
      if(this.status == 200){
        let rate = JSON.parse(this.responseText).quotes.USDVND;
        list.forEach((item, i) => {
          item.classList.remove("price-vnd");
          item.classList.add("price-usd");
          let icon = `<i class="fas fa-dollar-sign"></i> `;
          item.innerHTML = icon + Math.ceil(parseInt(item.textContent.replace(/\D,*/g, "") / rate)).toLocaleString('en');
        });
      }
    };
    xhr.send();
  });

  $(".btn-vnd").click(function (e){
    e.preventDefault();
    let list = document.querySelectorAll(".price-usd");
    if (list == null){
      return;
    }
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.currencylayer.com/live?access_key=1fde868f210408c0ee5779d977723e09&format=1&currencies=VND", true);
    xhr.onload = function() {
      if(this.status == 200){
        let rate = JSON.parse(this.responseText).quotes.USDVND;
        list.forEach((item, i) => {
          item.classList.remove("price-usd");
          item.classList.add("price-vnd");
          item.textContent = Math.ceil(parseInt(item.textContent.replace(",","") * rate)).toLocaleString() + " VND";
        });
      }
    };
    xhr.send();
  });
})

function getWatches(tar, min, max) {
  let param = `?page=${min}&limit=${max}`
  let url = "https://6050569d534609001766f7ef.mockapi.io/api/v1/watches" + param;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function() {
    if (this.status == 200) {
      let result = JSON.parse(this.responseText);
      getImage(result,tar);
    }
  };
  xhr.send();

}

function getImage(list, tar) {
  let output = "";
  list.forEach((item, i) => {
    let price = item.price.toLocaleString('en');
    output += `<a href="#" id="pro">
      <div class="card col-md ">
        <img src="${item.image}" class="card-img ">
          <div class="card-body text-white">
            <h5>${item.title}</h5>
            <h6>${item.name}</h6>
            <h4><i class="fas fa-dollar-sign"></i> ${price}</h4>
            <div class="container-1">
              <button class="btn">Select</button>
            </div>
          </div>
      </div>
    </a>`
  });
  tar.innerHTML = output;
}

function changeClass(el) {
  el.classList.add("navbar-light","bg-light");
  el.style.padding = "10";
}

function updateClass(el) {
  el.classList.remove("navbar-light","bg-light");
  el.style.padding = "10";
}
