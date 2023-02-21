let uname = document.querySelector("#name");
let pass1 = document.querySelector("#password");
let pass2 = document.querySelector("#re-password");
let email = document.querySelector("#email");
let form = document.querySelector("#form-signup");
let error = document.querySelectorAll("p.error");
let btn = document.getElementById('btn');
let errors = {
  unameerr: false,
  pass1err: false,
  pass2err: false,
  emailerr: false,
};

form.addEventListener("submit",function(e){
  e.preventDefault();
  console.log("Form Submitted");
  checkName();
  checkPass1();
  matchPassword();
  checkEmail();

  let formfail = false;
  // loop through errors obj to check if any errors = true
  Object.keys(errors).forEach(function(item) {
    console.log(item + ": " + errors[item]);
    if(errors[item]) {
      //if an error is found set formfail to true
      formfail = true;
    }
  })
  if(formfail) {
    alert("The form failed, please correct errors");
    changebtnfail();
  } else {
    alert("form submitted successfully");
    changebtn();
  }
});


//check emaile
function checkEmail() {
  let pattern = new RegExp(/^[+a-zA-Z1-9._-]+@[a-zA-Z1-9.-]+\.[a-zA-Z]{2,4}$/i);
  if(pattern.test(email.value)) {
    console.log("true, email valid");
    hideFalse(error[1], errors.emailerr);
  } else {
    console.log("false, email invalid");
    showTrue(error[1], errors.emailerr);
  }
}

//check Name
function checkName(){
  if(uname.value.length < 10 || uname.value.length > 30)
  {
    errors.unameerr = true;
    error[0].style = "display:initial";
  } else {
    errors.unameerr = false;
    error[0].style = "display:none";
  }
}

//check Password
function checkPass1() {
  console.log("password check 1");
  if(pass1.value.length < 10 || pass1.value.length > 20) {
    errors.pass1err = true;
    error[2].style = "display:initial";
  } else {
    errors.pass1err = false;
    error[2].style = "display:none";
  }
}

//check match Password
function matchPassword(){
  if (pass1.value != pass2.value)
    {errors.pass2err = true;
    error[3].style = "display:initial";
  } else {
    errors.pass2err = false;
    error[3].style = "display:none";
  }
}



//help function
function showPwd(id, el) {
  let x = document.getElementById(id);
  if (x.type === "password") {
    x.type = "text";
    el.className = 'fa fa-eye showpwd';
  } else {
    x.type = "password";
    el.className = 'fa fa-eye-slash showpwd';
  }
}

//Helper functions
function showTrue(el, err) {
  el.style = "display: initial";
  err = true;
}

function hideFalse(el, err) {
  el.style = "display: none";
  err = false;
}

function changebtn(){
  let output = `<button type="submit" class="btn btn-success mt-2"><i class="fa fa-check"></i></button>`;
  btn.innerHTML = output;
}

function changebtnfail(){
  let output = `<button type="submit" class="btn btn-fail mt-2"><i class="fa fa-times-circle"></i></button>`;
  btn.innerHTML = output;
}
