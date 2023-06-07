function parOuImpar(n) {
    if (n % 2 == 0) {
        return "par!"
    } else {
        return "impar!"
    }
}
parOuImpar(5)
let res = parOuImpar()
console.log(res)

/*
- na linha 1 eu criei uma função e dei um nome: parOuImpar e adicionei um parametro (n).

- da linha 2 a 6 eu tenho o meu bloco de comando a ser executado.

- na linha 8 eu chamei minha função pelo nome e atribui um valor: (5), que vai
ser adicionado ao parametro (n) na linha 1, tendo atribuido esse valor ao parametro
o programa vai rodar o bloco de ações e vai me retorna um valor, que eu salvei na linha 9 dentro 
de uma variavel refernete ao valor adicionado na linha 8.
*/