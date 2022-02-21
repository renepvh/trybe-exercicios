const button = document.querySelector('#buttonSubmit');
let inputNameUser = document.querySelector('#inputNameUser');
const nameUser = document.querySelector('#nameUser');
const href = document.querySelector('#href')

function getUserValue(event) {
  event.preventDefault();
  console.log(inputNameUser.value);
  nameUser.innerHTML = inputNameUser.value;
}
button.addEventListener('click', getUserValue);

function href(event) {
  event.preventDefault();
  href.innerText = 'teste'

}

href.addEventListener('click', href)

