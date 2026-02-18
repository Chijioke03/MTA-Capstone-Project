const registerBtn = document.querySelector(".reg")
const menuBtn = document.getElementById("menu-btn")
const navList = document.querySelector(".header-nav-list")


menuBtn.addEventListener("click", ()=> {
    navList.classList.add("show-menu")
})

registerBtn.addEventListener("click", ()=> {
    window.location.href = "register.html"
})

