// numero maximo que js possa fazer calculos
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// exemplos
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// big int
console.log(161315315815135135135586464111n);
console.log(BigInt(521493));

// operacoes
console.log(100000n + 200000n);
console.log(35135168135168165135168131n * 2000n);

// exemplo de calculo big int com numeros
const bigint = 313181351513813158513135n;
const n = 21;
// e preciso converter senao da erro
console.log(bigint * BigInt(n));

console.log(20n > 15);
console.log(20n > 20);
console.log(20n == 20);
// falso porque o big int e um tipo diferente de numero
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == "20");

// big int sao numeros inteiros, eles nao mostra a parte decimal
console.log(5n/3n);
console.log(5n/4n);
console.log(5/4);
console.log(5/3);