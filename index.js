const cartIcon = document.querySelector(".cart");
const cartPopup = document.querySelector(".popup_container");
const openMenu = document.querySelector(".mobile_menu");
const closeMenu = document.querySelector(".close_icon");
const sideMenu = document.querySelector(".side_menubar");
const outlay = document.querySelector(".outlay");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const productImage = document.querySelector(".product_image img");
const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const quantity = document.querySelector(".quantity p");
const cartQuantity=document.querySelector(".cart span");
const addToCart = document.querySelector(".add_to_cart");

// ProductImages
const productImages = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

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

// Show and hide cart popup
cartIcon.addEventListener("click", () => {
  cartPopup.classList.toggle("active");
});

let currentIndex = 0;
// Navigate product image
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % productImages.length;
  productImage.src = productImages[currentIndex];
});
// Navigate product image
prevButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + productImages.length) % productImages.length;
  productImage.src = productImages[currentIndex];
});

// Increase quantity
let counter = 0;
increment.addEventListener("click", () => {
  counter += 1;
  quantity.textContent = counter;
});

// Decrease quantity
decrement.addEventListener("click", () => {
  let currentQuantity = Number(quantity.textContent);
  if (currentQuantity > 0) {
    counter -= 1;
    quantity.textContent = counter;
  }
});

addToCart.addEventListener("click",()=>{
    cartQuantity.textContent=counter;
})