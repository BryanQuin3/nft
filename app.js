// Menu
const boton = document.querySelector("#boton");
const menu = document.querySelector("#menu");
boton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Scroll
const scrollContainer = document.querySelector(".scroll-container");
const scrollDistance = 125;
const scrollLeftBtn = document.querySelector(".scroll-left-btn");
const scrollRightBtn = document.querySelector(".scroll-right-btn");

scrollLeftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy(-scrollDistance, 0);
});

scrollRightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy(scrollDistance, 0);
});

// Sellers
const divSellers = document.querySelector("#sellers");
let sellers = ["Elizabeth","Christy H","Jhoan Pen","Lila Komp","Kishimoto","Collins","Carmen P","Amada B"
  ,"Christy H","Jhoan Pen","Lila Komp","Kishimoto"];
function sellersCards (precio){
  for (let i = 0; i < sellers.length; i++) {
    let random = Math.random()*100;
    let volumen = Math.round(random*precio)
    let sellerImg = `./img/seller${i+1}.png`;
    let sellerName = `${sellers[i]}`;
    let divCardSeller = `
    <div class="grid place-items-center flex-shrink-0">
      <img class="" src="${sellerImg}" alt="">
      <h4 class="text-lg text-white  font-semibold lg:text-xl">${sellerName}</h4>
      <span class="text-blue-500" id="#volumen">${volumen.toLocaleString()} USD</span>
    `;
    divSellers.innerHTML += divCardSeller;
  }
}

// Api
const url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    precio = data.USD;
    sellersCards(precio);
  })
  .catch((error) => {
    console.error(error);
});