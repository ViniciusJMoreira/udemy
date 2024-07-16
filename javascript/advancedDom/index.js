const header = document.querySelector(".header");
const imgLogo = document.querySelector('.nav__logo');
const cookie = document.createElement("div");
cookie.classList = 'cookie-message';
cookie.textContent = "We use cookied for improved functionality and analytics.";
const cookieBtn = document.createElement("button");
cookieBtn.classList = "btn btn--close-cookie";
cookieBtn.textContent = "Got it!";
cookie.appendChild(cookieBtn);
// header.append(cookie);
// header.prepend(cookie);
// header.after(cookie);
header.before(cookie);
cookieBtn.addEventListener("click", () => {
  cookie.remove();
})

// setproperty e csstext para atribuir propriedades css em um elemento
document.documentElement.style.setProperty('background-color', "blue");
document.documentElement.style.cssText = "background-color: blue, color: #fff";

// metodo para visualizar a estilizacao do elemento
// console.log(getComputedStyle(document.documentElement));

// visualizar, modificar e criar atributos
console.log(imgLogo.getAttribute("alt"));
// modificar atributos
imgLogo.setAttribute("alt", "Amazing Bankist Logo");
// criar atributos
imgLogo.setAttribute("title", "Bankist Logo");
console.log(imgLogo.getAttribute("alt"));
console.log(imgLogo.getAttribute("title"));
// imgLogo.dataset.imageTarget = "new data";
imgLogo.setAttribute("data-image-target", "new data");
console.log(imgLogo.dataset.imageTarget);

