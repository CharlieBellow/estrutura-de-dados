/*# Matrix

Matriz ou Vetor multidimensional.

Significa que é um Array, dentro de outro array. Poderemos ter muitos níveis.*/

const students = [['Joseph', 23, 'MG'], ['Briana', 22, 'SP'], ['Priscila', 23, 'PR']]
// para acessar tem que colocar o index em que o array que eu quero está, depois coloca o index do elemento que eu quero tá dentro do array filho. então primeiro pega o array maior e indica a posição, depois o array dentro dele e indica a posição do elemento
console.log(studants[0][1]); /* array de multinível */