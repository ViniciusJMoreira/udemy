'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__list");
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');


///////////////////////////////////////
// Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

function handleInOut(e) {
  const link = e.target;
  if(link.classList.contains("nav__link")) {
    document.querySelectorAll(".nav__link").forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    const imgLogo = link.closest(".nav").querySelector("img");
    imgLogo.style.opacity = this; 
  };
}

///////////////////////////////////////
// Header Window
nav.addEventListener('mousemove', handleInOut.bind(0.5));

nav.addEventListener('mouseout', handleInOut.bind(1));

navMenu.addEventListener("click", function(e) {
  e.preventDefault();
  if(e.target.classList.contains("nav__link") && !e.target.classList.contains("nav__link--btn")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
  }
});


btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  // console.log(s1coords);
  // console.log(header.getBoundingClientRect());
  // console.log(e.target.getBoundingClientRect());

  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);

  window.scrollTo({
    top: s1coords.top + window.scrollY,
    left: s1coords.left + window.scrollX,
    behavior: 'smooth',
  });

  // section1.scrollIntoView({behavior: 'smooth'});
});

///////////////////////////////////////
// Operations section
tabContainer.addEventListener("click", function(event) {
  const currentTab = event.target.closest('.operations__tab');

  // guard clause
  if(!currentTab) return;

  // remove actve class
  document.querySelector(".operations__tab--active")
  .classList.remove("operations__tab--active");
  document.querySelector(".operations__content--active")
  .classList.remove("operations__content--active");

  // active tab
  currentTab.classList.add('operations__tab--active');

  // active content tab
  document.querySelector(`.operations__content--${currentTab.dataset.tab}`)
  .classList.add("operations__content--active");
});


