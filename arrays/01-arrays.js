/*
    Um array armazena valores que são todos do mesmo tipo, sequencialmente.
    Embora o JS nos permita criar arrays com valores de tipos distintos,
    obdeceremos às melhores práticas e partiremos do pressuposto de que
    não podemos fazer isso (a maioria das linguagens não tem essa capacidade)
*/
// Formas de Inicializar um Array vazio
var daysOfWeek = [];
var daysOfWeek2 = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

// Para saber o tamanho do array, podemos usar a propriedade .length
var tamanhoArrayDias = daysOfWeek.length;

// Formas de acessar os elementos de um array
console.log(daysOfWeek[1]); // Podemos acessar pelo índice do array através dos colchetes
for (var index = 0; index < tamanhoArrayDias; index++) { // Dessa forma conseguimos acessar os valores do nosso array atraves do índice de forma menos hardcoded, através de um laço de repetição
    console.log(daysOfWeek[index]);
}

// Inserindo um elemento no final do array
/*
    A API de JS tem um método chamado "push", que nos permite acrescentar
    acrescentar novos elementos no final de um array, é possível acrescentarmos
    quantos elenetos quisermos passando como argumentos do 'push'
*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push(11, 12, 13);
console.log(numbers);

// Inserindo um elemento no início do array.
/*
    A classe 'array' de JS também tem um método chamado "unshift", que insere
    no ínicio do array os valores passados como argumentos para o método
*/
numbers.unshift(2112);
console.log(numbers);

// Removendo um elemento do final de um array
/*
    Para remover o ultimo valor de um array, utilizamos o metodo "pop"
*/
numbers.pop();
console.log(numbers);

// Removendo um elemento do inicio de um array
/*
    Para remover o primeiro valor de um array, utilizamos o metodo "shift"
*/
numbers.shift();
console.log(numbers);

// Removendo elementos de uma posição especifica do array
/*
    O método "splice" pode ser usado para remover um ou mais elementos
    de um array a partir de uma posição especificada (no caso começa por ela) e
    a quantidade de elementos que queremos remover a partir daquele indice.
*/
numbers.splice(1, 3);
console.log(numbers);

// Adicionando elementos a partir de uma posição especifica do array
/*
    Para isso podemos usar novamento o método "splice", em seu primeiro arguemento
    passamos o índice do array, no segundo argumento passamos 0, pois não queremos
    remover nenhum elemento, e a partir do terceiro argumento do "splice" começamos
    a por os elementos que queremos que sejam inseridos no array a partir do índice
    especificado no primeiro argumento
*/
numbers.splice(1, 0, 20, 50, 60);
console.log(numbers);

/*
    Um ADENDO é que podemos também remover elementos em seguidas inserirmos elementos,
    é somente no lugar do 0 ali no segundo argumento, colocarmos quantos elementos queremos
    que sejam removidos, eles serão removidos e em seguidas serão adicionados os elementos que
    colocamos a partir do 3º argumentos
*/
numbers.splice(1, 11, 20, 50, 60);
console.log(numbers);
