'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
} 

const hiddenModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsModal[i].addEventListener('click', showModal);;
// }
btnsOpenModal.forEach(button => {
  button.addEventListener('click', showModal);
});
btnCloseModal.addEventListener('click', hiddenModal);
overlay.addEventListener('click', hiddenModal);
document.addEventListener('keydown', function(event) {
  if (event.key == 'Escape' && !modal.classList.contains('hidden')) {
    hiddenModal();
  }
})