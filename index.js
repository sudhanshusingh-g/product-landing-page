const cartIcon = document.querySelector(".cart");
const cartPopup = document.querySelector(".popup_container");
const openMenu = document.querySelector(".mobile_menu");
const closeMenu = document.querySelector(".close_icon");
const sideMenu = document.querySelector(".side_menubar");
const outlay=document.querySelector(".outlay");



// Show mobile menu
openMenu.addEventListener("click", () => {
    outlay.classList.add("active");
    sideMenu.classList.add("active");
});

// Close mobile menu
closeMenu.addEventListener("click", () => {
    outlay.classList.remove("active");
    sideMenu.classList.remove("active");
});



cartIcon.addEventListener("click",()=>{
    cartPopup.classList.toggle("active");
})