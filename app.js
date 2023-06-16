// Menu
const boton = document.querySelector("#boton");
const menu = document.querySelector("#menu");
boton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Parallax
window.onscroll = function(){
  const robot = document.querySelector("#img-robot");
  let position = document.documentElement.scrollTop;
  robot.style.bottom = `${position * 0.3}px`;
}



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
function sellersCards (){
  for (let i = 0; i < sellers.length; i++) {
    const min = 50000;
    const max = 500000;
    let randomNumber = Math.floor(Math.random()*(max - min + 1))+min;
    let sellerImg = `./img/seller${i+1}.png`;
    let sellerName = `${sellers[i]}`;
    let divCardSeller = `
    <div class="grid place-items-center flex-shrink-0">
      <img loading="lazy" class="" src="${sellerImg}" alt="">
      <h5 class="text-lg text-white  font-semibold lg:text-xl">${sellerName}</h5>
      <span class="text-blue-500" id="#volumen">${randomNumber.toLocaleString()} USD</span>
    `;
    divSellers.innerHTML += divCardSeller;
  }
}
sellersCards();

// Mail
const btn = document.querySelector("#send-btn");
const input = document.querySelector("#input");
const divMensaje = document.querySelector("#mensaje");

function showMessage(message) {
  divMensaje.classList.remove("hidden");
  divMensaje.innerHTML = `<p>${message}</p>`;
  divMensaje.classList.add("block");
  setTimeout(() => {
    divMensaje.classList.remove("block");
    divMensaje.classList.add("hidden");
  }, 3000);
}

btn.addEventListener("click", () => {
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (expresionRegular.test(input.value)) {
    showMessage("Thank you for joining our mailing list");
  } else {
    showMessage("Enter a valid email");
  }
});

// Logos
const logos = ["twitter","discord","instagram","youtube","email"];
const divLogos = document.querySelector("#contenedorLogos");
for(let i=0 ; i<logos.length; i++ ){
  let contenedorLogo =
  `<div class="my-5 bg-gradient-to-r from-lila to-purple-700 flex justify-center items-center rounded-lg
    cursor-pointer transition-all duration-500 transform hover:-translate-y-2">
    <img loading="lazy" class="h-3/5" src="./img/logo-${logos[i]}.png" alt="logo-${logos[i]}">
  </div>`;
  divLogos.innerHTML += contenedorLogo;
}

// Api
const price = document.querySelector("#eth-price");
const url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let precio = data.USD;
    price.textContent = `1 ETH = ${precio} USD`;
  })
  .catch((error) => {
    console.error(error);
});

// LazyLoading
const lazyVideos = document.querySelectorAll('.lazy-video');

/*el IntersectionObserver es una API que permite observar cambios
 en la intersección entre un elemento y el viewport del navegador.
*/
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // verifica si el elemento es visible en el viewport
    if (entry.isIntersecting) {
      const video = entry.target;
      const sources = video.querySelectorAll('source');
      sources.forEach(source => {
        const src = source.getAttribute('data-src');
        source.setAttribute('src', src);
      });
      video.load();
      video.play();
      // deja de observar el elemento de video, ya que ya ha sido cargado y reproducido
      observer.unobserve(video);
    }
  });
});
// Comienza a observar cada elemento y activa el lazy loading
lazyVideos.forEach(video => {
  observer.observe(video);
});

let img = document.querySelector("#like");
  img.addEventListener("dblclick", () => {
    img.classList.toggle("hidden");
});