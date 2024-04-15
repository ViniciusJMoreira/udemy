const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
}
const calcAverage = (arr) => {
  let total = 0
  for(let i=0;i<arr.length;i++){
    total += arr[i]
  }
  return Math.floor(total);
}
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

for(let i=0; i<bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i]+tip);
}
console.log(bills, tips, totals);
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));