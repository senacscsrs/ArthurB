/* Exercício 1

Crie um vetor com 4 cores diferentes e mostre todas no console.
*/
/* let vetor = ["amarelo", "azul", "preto", "branco"];

for (let i = 0; i < vetor.length; i++) {
  console.log(vetor[i]);
} */


/* Exercício 2

Crie um vetor com 6 números e mostre apenas os números pares.
*/
/* let vetor = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 == 0) {
    console.log(vetor[i]);
  }
} */


/* Exercício 3

Crie um vetor com 5 números e mostre a soma total dos elementos.
*/
/* let vetor = [2, 4, 6, 8, 10];
let soma = 0;

for (let i = 0; i < vetor.length; i++) {
  soma += vetor[i];
}
console.log(soma); */


/* Exercício 4

Crie um vetor com 5 números e mostre qual é o maior valor armazenado.
*/
/* let vetor = [12, 45, 23, 67, 34];
let maior = vetor[0];

for (let i = 1; i < vetor.length; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
  }
}
console.log(maior); */


/* Exercício 5

Crie uma matriz 3x3 com números inteiros e mostre todos os elementos no console.
*/
/* let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < 3; i++) {
  console.log(matriz[i]);
} */


/* Exercício 6

Usando a mesma matriz anterior, mostre apenas os números da diagonal principal.
*/
/* let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < 3; i++) {
  console.log(matriz[i][i]);
} */


/* Exercício 7

Usando a matriz 3x3, calcule e mostre a soma de todos os valores.
*/
/* let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let soma = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    soma += matriz[i][j];
  }
}
console.log(soma); */


/* Exercício 8

Mostre a soma dos elementos de cada linha da matriz separadamente.
*/
/* let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < 3; i++) {
  let somaLinha = 0;
  for (let j = 0; j < 3; j++) {
    somaLinha += matriz[i][j];
  }
  console.log("Soma da linha " + (i + 1) + " = " + somaLinha);
} */


/* Exercício 9

Crie um vetor com 3 nomes de alunos e uma matriz com 3 notas para cada um. Mostre o nome e a média de cada aluno.
*/
/* let alunos = ["Ana", "Bruno", "Carla"];
let notas = [
  [8, 7, 9],
  [6, 5, 7],
  [9, 10, 8]
];

for (let i = 0; i < alunos.length; i++) {
  let soma = 0;
  for (let j = 0; j < notas[i].length; j++) {
    soma += notas[i][j];
  }
  let media = soma / notas[i].length;
  console.log(alunos[i] + " - Média: " + media.toFixed(2));
} */


/* Exercício 10

Crie uma matriz 3x3 com números aleatórios de 1 a 10 e mostre no console.
*/
/* let matriz = [];

for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = Math.floor(Math.random() * 10) + 1;
  }
}
console.log(matriz); */


/* Desafio Extra

Mostre todos os números maiores que 5.
*/
/* for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (matriz[i][j] > 5) {
      console.log(matriz[i][j]);
    }
  }
} */
