const boton = document.querySelector("#boton");
const menu = document.querySelector("#menu");
boton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
const spanPrecio = document.querySelector("#usd");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    spanPrecio.textContent = `${data.USD} $`;
  })
  .catch((error) => {
    console.error(error);
  });
// Scroll
const scrollContainer = document.querySelector(".scroll-container");
// distancia a desplazar
const scrollDistance = 125;
const scrollLeftBtn = document.querySelector(".scroll-left-btn");
const scrollRightBtn = document.querySelector(".scroll-right-btn");

scrollLeftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy(-scrollDistance, 0);
});


scrollRightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy(scrollDistance, 0);
});
