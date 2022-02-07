function ehPalindromo(word) {
  let frase =""
  let palavra = word;
  frase = palavra
  let reversepalavra = frase.split("").reverse().join("");


  if (reversepalavra === word) {
    console.log(true);
  }
  else {
    console.log(false)
  }
}

ehPalindromo("mau")


