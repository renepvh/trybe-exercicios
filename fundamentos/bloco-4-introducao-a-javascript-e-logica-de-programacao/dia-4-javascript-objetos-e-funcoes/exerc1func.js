// function ehPalindromo(word) {
//   let frase =""
//   let palavra = word;
//   frase = palavra
//   let reversepalavra = frase.split("").reverse().join("");


//   if (reversepalavra === word) {
//     console.log(true);
//   }
//   else {
//     console.log(false)
//   }
// }

// ehPalindromo("desenvolvimento")


function verificaPalindrome(word) {
  for (index in word) {
    if (word[index] != word[(word.length - 1) - index]) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome("mau"))