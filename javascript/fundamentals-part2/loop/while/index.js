let rep = 1;
while(rep < 11) {
  console.log(`Lifting weight's repetition ${rep}🏋️‍♂️`);
  rep++;
}

let dice = Math.floor(Math.random() * 6) + 1;
while(dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice = Math.floor(Math.random() * 6) + 1;
  if(dice === 6) console.log('Loop is about to end..');
}