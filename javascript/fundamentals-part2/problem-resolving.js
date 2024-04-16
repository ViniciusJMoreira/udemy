const t1 = [10 , 35 , 'error' , -6];
const t2 = [ 15 , 25 , -12];

const findMinAndMaxTemp = function (t1, t2) {

  const temp = t1.concat(t2);

  let max = temp[0];
  let min = temp[0];
  for(let i = 0; i < temp.length; i++){
    if(typeof temp[i] !== 'number') continue;
    if(temp[i] > max) max = temp[i];
    if(temp[i] < min) min = temp[i];
  }
  
  if(max < 0 || min < 0) return max + min;
  else return max - min;
}

console.log(findMinAndMaxTemp(t1 , t2));

const temp = []
for(let i = 0; i < t2.length; i++) {
  t1[t1.length] = t2[i];
}
for(let i = 0; i < t1.length; i++) {
  if(typeof t1[i] !== 'number') continue;
  temp.push(t1[i]);
}

console.log(t1, temp);