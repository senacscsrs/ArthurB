
// Exercícios sobre Variáveis e Console.log

// 1. Declare três variáveis: uma string com o seu nome, um number com a sua idade e um boolean que diga se você gosta de programação. Use console.log() para mostrar todas juntas.

/*
let nome="Arthur";
let idade=16;
let programacao=true;
console.log("Eu sou "+nome+" e tenho "+idade+" anos. Eu gosto de Programação? "+programacao)
*/

// 2. Crie uma variável chamada fruta com valor "maçã". Em seguida, mude o valor dela para "banana" e imprima os dois momentos no console.

/*
let fruta="maçã";
console.log(fruta);
fruta="banana";
console.log(fruta)
*/

// 3. Mostre no console uma frase que use template string para exibir: "Meu nome é X e tenho Y anos".

/*
let nome="Arthur";
let idade=16;
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
*/

// 4. Declare uma variável cidade e outra estado. Mostre no console uma frase completa usando concatenação com +.

/*
let cidade="Santa Cruz do Sul";
let estado="Rio Grande do Sul";
console.log("Moro em "+cidade+" em "+estado)
*/

// 5. Repita o exercício anterior, mas agora usando template string.

/*
let cidade="Santa Cruz do Sul";
let estado="Rio Grande do Sul";
console.log(`Moro em ${cidade} em ${estado}`)
*/

// 6. Use console.log() com vírgula para exibir três informações: "Produto:", o nome de um produto e o preço dele.

/*
let produto="leite";
let nome="Italac";
let preco=1000;
console.log(produto,nome,preco,"reais")
*/

// 7. Crie uma variável que contenha uma quebra de linha usando \n e mostre no console.
/*
let nome="Adolf";
let sobrenome="Pereira";
console.log(nome+"\n"+sobrenome)
*/
// 8. Crie uma variável que contenha um símbolo especial com \u00A9 e exiba no console.
/*
console.log(`\u00A9`)
*/

// Exercícios sobre If / Else

// 9. Crie uma variável nota com valor numérico. Se for maior ou igual a 7, mostre "Aprovado". Senão, mostre "Reprovado".
/*
let nota=17;
if(nota>=7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}
*/
// 10. Declare uma variável idade. Se for maior ou igual a 18, mostre "Maior de idade". Caso contrário, mostre "Menor de idade".
/*
let idade=17;
if(idade>=18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}
*/
// 11. Crie uma variável senha. Se ela for igual a "1234", mostre "Acesso permitido", caso contrário mostre "Senha incorreta".
/*
let senha=1234;
if(senha==1234){
    console.log("Acesso permitido")
}else{
    console.log("Acesso negado")
}
*/
// 12. Declare uma variável numero. Se for positivo, mostre "Número positivo". Se for negativo, mostre "Número negativo". Se for 0, mostre "Número neutro".
/*
let numero=2;
if(numero>0){
console.log("positivo")
}else if(numero<0){
console.Log("negativo")
}else{
    console.log(neutro)
}
*/
// 13. Crie duas variáveis num1 e num2. Use if/else para verificar qual é o maior e mostre o resultado no console.
/*
let num1=2;
let num2=4;
if(num1>num2){
    console.log(num1+" É maior")
}else if(num1<num2){
    console.log(num2+" É maior")
}else{
    console.log("São iguais")
}
*/

// Exercícios sobre Switch

// 14. Crie uma variável diaSemana com um número de 1 a 7 e use switch para mostrar qual é o dia correspondente.
/*
let dia = 1;

switch (dia) {
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
}
*/
// 15. Use switch para verificar a cor de um semáforo ("vermelho", "amarelo", "verde") e mostre no console a ação correspondente.
/*
let cor= "verde";
switch(cor){
    case "verde":
        console.log("Pode ir");
        break;
    case "amarelo":
        console.log("Desacelere");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    default:
        console.log("Cor inválido");
}
*/
// 16. Crie uma variável notaConceito que pode ser "A", "B", "C", "D" ou "F". Use switch para mostrar a mensagem correspondente à nota.
/*
let notaConceito = "B";

switch (notaConceito) {
    case "A":
        console.log("Excelente!");
        break;
    case "B":
        console.log("Muito bom!");
        break;
    case "C":
        console.log("Bom!");
        break;
    case "D":
        console.log("Melhore!");
        break;
    case "F":
        console.log("Reprovado. Não desanime, continue tentando!");
        break;
    default:
        console.log("Nota inválida.");
}
*/
// 17. Declare uma variável mes com número de 1 a 12 e use switch para mostrar o nome do mês.
/*
let mes = 9;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Número inválido.");
}
*/
// Exercícios sobre For

// 18. Use um for para imprimir os números de 1 a 10 no console.
/*
for(let i = 1; i <= 10; i++){
    console.log(i);
}
*/
// 19. Monte um for que faça uma contagem regressiva de 10 até 0 e ao final mostre "Fogo!".
/*
for(let i = 10; i >= 0; i--){
    console.log(i);
}
console.log("Fogo!")
*/
// 20. Crie um for que multiplique um número qualquer de 1 até 10 e mostre a tabuada no console.
/*
let num1=2;
let num2=5;
let tabuada=4;
resul=num1 * num2;
for(let resul = 0; resul <= 10; resul++){
    console.log(resul*tabuada);
}
 */
// 21. Use um for para imprimir apenas os números pares de 0 até 20.
/*
for(let i = 0; i <= 20; i++){
    if(i % 2==0){
        console.log(i);
    }
}
*/
// 22. Use um for para somar todos os números de 1 a 100 e mostre o resultado no console.
/*
let resul = 0;

for (let i = 1; i <= 100; i++) {
    resul += i; 
}
console.log(resul);
*/
// Exercícios sobre While

// 23. Crie uma variável contador iniciando em 0 e use while para imprimir os números até 5.
/*
let contador = 0;
while(contador <= 5){
    console.log(`O valor do contador é:` +contador);
    contador++;
}
 */
// 24. Simule um caixa eletrônico: comece com saldo = 100 e enquanto o saldo for maior que 0, retire 10 e mostre no console.
/*
let saldo = 100
while(saldo > 0){
    console.log(`O valor retirado é 10`);
    saldo -= 10;
    console.log(saldo);
}
 */
// 25. Use while para mostrar todos os números ímpares entre 1 e 20.
/*
let num = 1;
while(num <= 20){
if(num % 2==1){
        console.log(num);
}
num++;
}
*/
// 26. Crie uma variável senha e simule uma tentativa de senha com while, até que a senha correta "abcd" seja digitada.
/*
let senha = 1234;
while(senha !== 123){
console.log("Senha errada");
senha=123;
}
console.log("Senha certa");
*/
// Exercícios sobre Do/While

//27. Peça uma senha (simulada com uma variável) e use do/while para repetir até que ela seja "1234".
/*
let senhaCorreta = "1234";
let senhaDigitada;
do {
    senhaDigitada = "1234"; 
} while (senhaDigitada !== senhaCorreta);
console.log("Senha correta, acesso liberado!");
*/
//28. Use do/while para imprimir números de 0 a 3.
/*
let i = 0;

do {
  console.log(i);
  i++;
} while (i <= 3);
 */
//29. Crie um do/while que mostre um menu com três opções (simulado com uma variável) e só saia quando a opção for "sair".
/*
let opcoes="entrar";
let contagem=0;
do {
  
if(contagem<3){
    console.log("saindo");
    opcoes="sair";
    
}
contagem++;
} while (contagem !== 3);
*/
//30. Use do/while para gerar números de 1 até 5 e mostrá-los no console.
/*
let i = 0;

do {
  console.log(i);
  i++;
} while (i <= 5);
 */