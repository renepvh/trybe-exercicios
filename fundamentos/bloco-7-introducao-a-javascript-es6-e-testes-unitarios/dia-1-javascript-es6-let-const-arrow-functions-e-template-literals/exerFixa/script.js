const btn = document.querySelector('#btn');
const curtir = document.querySelector('#btn-curtir')

btn.addEventListener('click', function() {
  const contador = curtir
  const numero = parseInt(contador.innerText) + 1;
  contador.innerText = numero;
  
})