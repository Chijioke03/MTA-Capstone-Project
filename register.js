const createBtn = document.getElementById("create-btn")
const enterBtn = document.getElementById("enter-btn")
const signupPage = document.querySelector(".signup-page")
const loginPage = document.querySelector(".login-page")




createBtn.addEventListener("click", ()=> {
 window.location.href = "register.html"
})

enterBtn.addEventListener("click", ()=> {
  signupPage.classList.add("hide-signup")
  loginPage.classList.add("show-login")
})