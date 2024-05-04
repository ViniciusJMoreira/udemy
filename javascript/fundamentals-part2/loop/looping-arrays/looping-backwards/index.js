const john = [
  'John',
  'Miller',
  2024 - 1993,
  'Developer',
  ['Jay', 'Marks', 'Michael']
];

for (let i = john.length - 1; i >= 0; i--) {
  console.log(i, john[i]);
}
john.reverse();
for (const [item, element] of john.entries()) {
  console.log(item, element);
}