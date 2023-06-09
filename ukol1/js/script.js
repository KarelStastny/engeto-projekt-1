// Otevírací seznam menu
let hamburger = document.querySelector(".hamburger")
let navMenu = document.querySelector(".nav-menu")
// let upMenu = documentk.querySelector(".up-menu")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})


