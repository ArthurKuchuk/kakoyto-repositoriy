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

let showModal = function(elementName) {
  elementName.classList.remove("modal");
 
  elementName.insertAdjacentHTML('afterbegin','<iframe width="840" height="472" src="https://www.youtube.com/embed/WknqFHdMXIA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
}

let hideModal = function(elementName) { 
  elementName.classList.add("modal");
  elementName.querySelector('iframe').remove();
}


headerModalPlayBtn.addEventListener("click", () => showModal(headerModal));

headerModalCloseBtn.addEventListener("click", () => hideModal(headerModal));
headerModal.addEventListener("click", () => hideModal(headerModal));