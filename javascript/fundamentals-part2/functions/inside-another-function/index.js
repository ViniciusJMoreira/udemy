const cutFruitsPieces = fruit => fruit * 4;

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitsPieces(apples);
  const orangePieces = cutFruitsPieces(oranges)
  const fruit = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return fruit;
}

console.log(fruitProcessor(3, 2));