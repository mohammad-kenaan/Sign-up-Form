
const form = document.querySelector("form");
const pass = document.querySelector("#password");
const cfPassword = document.querySelector("#confirm-password");
const cfPasswordSpan= document.querySelector("#cfPass-span");


form.addEventListener("submit", (e) => {
  if(pass.value !== cfPassword.value) {
    e.preventDefault();
    cfPassword.focus();
    cfPasswordSpan.style.color = "red";
  }

})





