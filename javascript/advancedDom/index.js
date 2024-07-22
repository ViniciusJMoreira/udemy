const header = document.querySelector(".header");
const headerNav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const firstLink = document.querySelector(".nav__link:first-child");
const imgLogo = document.querySelector('.nav__logo');

// criando elementos no dom e adicionando atributos
const cookie = document.createElement("div");
cookie.classList = 'cookie-message';
cookie.textContent = "We use cookied for improved functionality and analytics.";
const cookieBtn = document.createElement("button");
cookieBtn.classList = "btn btn--close-cookie";
cookieBtn.textContent = "Got it!";
// adiionando elemento filho no elemento pai
cookie.appendChild(cookieBtn);
// header.append(cookie);
// header.prepend(cookie);
// header.after(cookie);
// header.before(cookie);
// evento eliminando elemento
cookieBtn.addEventListener("click", () => {
  cookie.remove();
})

// setproperty e csstext para atribuir propriedades css em um elemento
document.documentElement.style.setProperty('background-color', "blue");
document.documentElement.style.cssText = "background-color: blue, color: #fff";

// metodo para visualizar a estilizacao do elemento
// console.log(getComputedStyle(document.documentElement));

// visualizar, modificar e criar atributos
// console.log(imgLogo.getAttribute("alt"));
// modificar atributos
imgLogo.setAttribute("alt", "Amazing Bankist Logo");
// criar atributos
imgLogo.setAttribute("title", "Bankist Logo");
// console.log(imgLogo.getAttribute("alt"));
// console.log(imgLogo.getAttribute("title"));
// imgLogo.dataset.imageTarget = "new data";
imgLogo.setAttribute("data-image-target", "new data");
// console.log(imgLogo.dataset.imageTarget)

// window.addEventListener("scroll", () => {
//   const windowCoords = section1.getBoundingClientRect();
//   document.querySelector('.misuras').textContent = window.scrollY;
// })

// funcao para gerar um numero aleatorio
function randonColor() {
  return Math.floor(Math.random() * 255);
}
// Efeito borbulhamento no event listener , afetando tambem o elemento pai quando dispara o evento no elemento target.
firstLink.addEventListener("click", function(e) {
  this.style.backgroundColor = `rgb(${randonColor()},${randonColor()},${randonColor()})`;
  console.log(e.target);
  console.log(e.currentTarget);
  e.stopPropagation();
},true);
// para disparar os eventos dos elementos pai , é preciso que seja do mesmo evento(click)
navList.addEventListener("click", function(e) {
  this.style.backgroundColor = `rgb(${randonColor()},${randonColor()},${randonColor()})`;
  console.log(e.target);
  console.log(e.currentTarget);
});
headerNav.addEventListener("click", function(e) {
  this.style.backgroundColor = `rgb(${randonColor()},${randonColor()},${randonColor()})`;
  console.log(e.target);
  console.log(e.currentTarget);
});

const h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
  //////////////////////////
  //children
  // childNodes retorna um array de tags textos comentarios, tudo o que tiver dentro do elemento pai
  console.log(this.childNodes);
  // children retorna um array de todas as tags dentro do elemento pai
  console.log(this.children);
  //////////////////////////
  //parent
  // retorna o elemento pai
  console.log(this.parentNode);
  console.log(this.parentElement);
  //////////////////////////
  //sibling
  console.log(this.previousElementSibling);
  console.log(this.nextElementSibling);

  // seleciona todos elementos pai do elemento selecionado
  console.log(h1.closest('h1'));
})