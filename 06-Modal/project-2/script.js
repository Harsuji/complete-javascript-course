'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // to take the value of the every single one button elements.

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal// we will not use (.) because it is only for selector and here we are not selecting anymore just passing the name of the class.
  ); // this will help to print the text content of the btnOpenModal.

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
// the copy paste of the previous function will also work but we will use the other functionality.

// How to respond from the keyboard -> 
// There ar ethree types of events on the keyboard 
// 1. Key down. - When the key is pressed down the key. 
// 2. Key up. - When the key is lift off from the keyboard.
// 3. Key press. - It is pressed fired continuosly as we keep our finger on a certain key.

// The info about the which key was pressed will be stored in the event as it occur as soon as any key is pressed.

document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed.');
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) // if the modal does not contain the hidden class then just close the modal. 
    {
      closeModal();
    }
  }
);








