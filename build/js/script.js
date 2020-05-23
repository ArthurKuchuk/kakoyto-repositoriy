"use strict";

let headerModal = document.querySelector('.header__modal');
let headerModalPlayBtn = document.querySelector('.header__play-button');
let headerModalCloseBtn = document.querySelector('.header__modal-close-button');

// function showModal(elem) {
//   elem.classList.remove("modal");
// }

// function hideModal(elem) {
//   elem.classList.add("modal");
// }

// headerModalPlayBtn.addEventListener("click", showModal(headerModal));

// headerModalCloseBtn.addEventListener("click", hideModal(headerModal));

let showModal = function() {
  headerModal.classList.remove("modal");
}

let hideModal = function() {
  headerModal.classList.add("modal");
}

headerModalPlayBtn.addEventListener("click", showModal);

headerModalCloseBtn.addEventListener("click", hideModal);
