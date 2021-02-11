/*
    Os arrays em JS são objetos modificados, o que significa que
    todo array que criarmos terá alguns métodos disponíveis para
    uso.
    Veremos boa parte deles..
*/
var numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// Funções de Iteração
/*
    O JS tem alguns métodos de iteração embutidos que podem ser
    usados com arrays, podendo tomar lugar do "for" clássico.
    A maioria desses métodos pede como parâmetro um função call
    back.
*/

// Função callback para ver se o número é par ou ímpar
var isEven = function (x) { return x % 2 === 0; };

// Iterando com método "every"
/*
    O método "every" ele itera pelos elementos do array, até
    que a função retorne false.
*/
numbers.every(isEven);

//Iterando com método "some"
/*
    É o contrário do método "every", ele irá percorrer todos os
    elementos até que a função retorne true
*/
numbers.some(isEven);

// Iterando com "forEach"
/*
    Aqui usamos quando precisamos iterar pelo array todo, como
    se fosse um "for" clássico, só que com mais praticidade, sem
    ter que definir limite e até mesmo incrementador/decrementador.
*/
numbers.forEach(function (x) { return console.log(x % 2 === 0); });

/*
    O JavaScript também tem outros dois métodos iteradores que de
    volvem um novo array com um resultado.
*/

// Método "map"
/*
    O map irá iterar por todo o array aplicando as modificações
    com base na função callback, e retornará um novo array modificado.
*/
var mapped = numbers.map(isEven);

// Método "filter"
/*
    O "filter" ele itera pelo array todo, mas só retorna para o novo
    array aquilo que satisfazer sua condição.
*/
var filtered = numbers.filter(isEven);

// Método "reduce"
/*
    O "reduce" serve de fato para fazer o que diz, reduzir.. ele nos
    ajuda a reduzir um array de valores ao seu mínimo.
*/
var num = numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
console.log(num);
