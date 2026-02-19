const registerBtn = document.querySelector(".reg")
const menuBtn = document.getElementById("menu-btn")
const navList = document.querySelector(".header-nav-list")
const coursesBtn = document.querySelector(".explore")
const coursesSection = document.querySelector(".courses")
menuBtn.addEventListener("click", ()=> {
    navList.classList.add("show-menu")
})

registerBtn.addEventListener("click", ()=> {
    window.location.href = "register.html"
})


coursesBtn.addEventListener("click", ()=> {
    coursesSection.classList.toggle("show-courses")
})

