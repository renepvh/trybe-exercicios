const href = document.querySelector('#href');
const inputText = document.querySelector('#input-text');
const inputCheck = document.querySelector('#input-checkbox');

href.addEventListener('click', function(event) {
  event.preventDefault()
});

inputCheck.addEventListener('click', function(event) {
  event.preventDefault()
});

inputText.addEventListener('keypress', function(event) {
  // event.preventDefault();
  // console.log(event.key)

  if(event.key === 'a') {
    console.log('APERTOU A')
  }else {
    console.log('nao faz nada')
    event.preventDefault()
  }
})