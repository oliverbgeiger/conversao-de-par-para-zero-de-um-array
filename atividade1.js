let palavra = prompt("digite a frase ou palavra")
let palavra2 = palavra.replace( / /g, '' )
let inverso = palavra2.split("").reverse().join("")

if (palavra2===inverso) {
  alert(`${palavra} é um palíndromo`)
} else {
 alert(`${palavra} não é um palíndromo`)
}