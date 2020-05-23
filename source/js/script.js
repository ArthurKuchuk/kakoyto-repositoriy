"use strict";

let headerModal = document.querySelector('.header__modal');
let headerModalPlayBtn = document.querySelector('.header__play-button');
let headerModalCloseBtn = document.querySelector('.header__modal-close-button');

// let showModal = function(elem) {
//   elem.classList.remove("modal");
// }

// let  hideModal = function(elem) {
//   elem.classList.add("modal");
// }

// headerModalPlayBtn.addEventListener("click", showModal(headerModal));

// headerModalCloseBtn.addEventListener("click", hideModal(headerModal));

let showModal = function() {
  headerModal.classList.remove("modal");
 
  headerModal.insertAdjacentHTML('afterbegin','<iframe width="840" height="472" src="https://www.youtube.com/embed/WknqFHdMXIA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
}

let hideModal = function() { 
  headerModal.classList.add("modal");
  headerModal.querySelector('iframe').remove();
}


headerModalPlayBtn.addEventListener("click", showModal);

headerModalCloseBtn.addEventListener("click", hideModal);
