  //# 7- Array no código

const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// indexação (index) começa pelo número 0

/* acessando os elementos dentro do  array */
console.log(pilotos[0]); // Senna
console.log(pilotos[3]); // Hamilton

// acessar o tamanho do Array
console.log(pilotos.length);

// array no JS é iterável
for (let piloto of pilotos) {
  console.log(piloto);
}

// adicionar elementos 
pilotos.push('Alonso') // ele fica no index 4
console.log(pilotos);

//encontrar um elementos 
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna);
//funciona como uma função'
/*const senna = pilotos.find(function (piloto) { } => piloto === 'Senna')*/

//deletar um elemento
pilotos.splice(1, 1) /* deletar um elemento na posição um, ou seja, vai deletar o segundo elemento */
// se fixer isso ele vai mudar o index de todos os outros elementos que sobraram e isso pode mexer no código