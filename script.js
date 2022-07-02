'use strict';
const addInput = document.querySelector('.add_input');
const whenInput = document.querySelector('.when_input');
const addButton = document.querySelector('.add_button');
const list = document.querySelector('.list');
const thing_to_do = document.querySelector('.thing_to_do');
const finderDiv = document.querySelector('.finder');
const finderInput = document.querySelector('.finder_input');
const finderInputBtn = document.querySelector('.finder_input_button');
const whiteSpaceAdd = document.getElementsByName('add_input_n')[0];
const whiteSpaceWhen = document.getElementsByName('when_input_n')[0];

addInput.value = ' What you want to do?';
whenInput.value = ' Until when?';
finderInput.value = 'What you want to find?';

const toDoArray = [];
const toDoWhen = [];
let counter = -1;
let valuesToFind = [];

addButton.addEventListener('click', function () {
  const WS1 = whiteSpaceAdd.value.replace(/\s/g, '');
  const WS2 = whiteSpaceWhen.value.replace(/\s/g, '');
  //if (WS1 || WS2) alert('To much space!');
  if (addInput.value === '' || addInput.value === ' What you want to do?')
    return;
  if (whenInput.value === '' || whenInput.value === ' Until when?') return;
  finderDiv.classList.remove('display_none');
  toDoArray.push(addInput.value);
  toDoWhen.push(whenInput.value);
  valuesToFind.push(addInput.value);

  counter++;
  addInput.value = '';
  whenInput.value = '';
  //add to-do to list
  toDoArray.slice(-1).forEach(function () {
    list.insertAdjacentHTML(
      'beforeend',
      `<div class="thing_to_do div" index="${counter}">
      <i class="fa-solid fa-trash-can Xbutton"></i>
      <p class="text_to_do" id="id_text_to_do">Do ${toDoArray[counter]}, before ${toDoWhen[counter]}.</p>
      </div>`
    );
  });
  //delete to-do from list
  const trashIcon = Array.from(document.getElementsByClassName('fa-solid'));

  trashIcon.forEach(box => {
    box.addEventListener('click', function () {
      box.closest('.thing_to_do').classList.add('delete_element');
      box.classList.remove('fa-trash-can');
      box.classList.add('fa-check');
      setTimeout(function () {
        box.closest('.thing_to_do').remove();
      }, 600);
      box.closest;
    });
  });
});
//delete inputs value after click

const deleteInputesValue = function (inputName) {
  inputName.addEventListener('click', function () {
    inputName.value = '';
    inputName.style.color = 'black';
  });
};
deleteInputesValue(addInput);
deleteInputesValue(whenInput);
//finder
finderInput.addEventListener('click', function () {
  finderInput.value = '';
  finderInput.style.color = 'black';
});
console.log(valuesToFind);
finderInputBtn.addEventListener('click', function () {
  if (
    finderInput.value === '' ||
    finderInput.value === 'What you want to find?'
  )
    return;
  let found = valuesToFind.find(element => element === finderInput.value);
  let index = valuesToFind.indexOf(found) + 1;
  console.log(index);
  if (index === 0) finderInput.value = 'No item was found.';
  if (index === 0) return;

  finderInput.value = `You item is on ${index} position.`;
  setTimeout(function () {
    finderInput.value = '';
  }, 3000);
});
//calendar
// document.addEventListener('DOMContentLoaded', function () {
//   var calendarEl = document.getElementById('calendar');
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'dayGridMonth',
//   });
//   calendar.render();
// });
