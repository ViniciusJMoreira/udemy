const calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3;
const checkWinner = (avgDolphins, avgKoalas) => {
  if(avgDolphins >= 2 * avgKoalas) console.log(`Dolphins win 🎉 ${avgDolphins} vs ${avgKoalas}`);
  else if(avgKoalas >= 2 * avgDolphins) console.log(`Koalas win 🎉 ${avgKoalas} vs ${avgDolphins}`);
  else console.log(`it's was a draw`);
}

let scoreDolphins = calcAverage(44, 23, 71); 
let scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41); 
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);