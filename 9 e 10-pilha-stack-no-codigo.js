/*  # Stack

Tradução de Stack é pilha.

Como uma pilha de livros.

  - linear, um após o outro

  - o último a entrar na pilha é o primeiro a sair
  
  Conceitos

LIFO: Last In First Out

* O último elemento a entrar na pilha, aquele elemento do topo da pilha, é o primeiro a sair
  
  
  
 # 10 -  Stack no código

- Métodos fundamentais

  • push(): adicionar um elemento à pilha

  • pop(): remover o elemento do topo da pilha

  • peek(): obter o elemento do topo da pilha

- Outros métodos poderão ser implementados como size() para mostrar o tamanho da pilha.


  */

// Passo 1: Modelagem
class Stack {
  constructor() {
    this.data = []
    this.top = -1
  }

  // no JS pode fazer implementação de stack usando o array

  push(value) {
    this.top++
    this.data[this.top] = value
    return this.data
  }

  pop() {
    if (this.top < 0) return undefined
    const proppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return proppedTop
  }

  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined
  }
}


// Passo 2 : Utilizando / instanciando
const stack = new Stack()

// adicionar dados 
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'));

console.log(stack.peek());

// remover
stack.pop()
console.log(stack.pop());

console.log(stack.peek());
