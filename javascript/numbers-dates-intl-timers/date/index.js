const now = new Date();
// console.log(now);

// o objeto data comeca a partir da dessa data
// console.log(new Date(0));

// calculo =  24 horas, 60 minutos , 60 secondos e 1000 segundos
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Ano , mes, dia , hora , minuto , segundos , milsegundos
const setNow = new Date(2024 , 6 , 10, 11 , 17);
// console.log(now);
// console.log(setNow);
// retorna o ano
console.log(setNow.getFullYear());
// retorna o mes
console.log(setNow.getMonth());
// retorna o dia
console.log(setNow.getDate());
// retorna o dia da semana (segunda , terca ..)
console.log(setNow.getDay());
// retorna horas
console.log(setNow.getHours());
// retorna minutos
console.log(setNow.getMinutes());
// retorna segundos
console.log(setNow.getSeconds());
// retorna em formato string
console.log(setNow.toISOString());
// retorna essa data em numeros
console.log(setNow.getTime());

// modificar o ano
console.log(setNow.setFullYear(2021));
// modificar o mes
console.log(setNow.setMonth(8));
// modificar o dia
console.log(setNow.setDate(21));
