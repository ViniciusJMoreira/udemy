const num = 135135.52

const options = {
  // style: "currency",
  // unit: "",
  // currency: "BRA", // manually
  // useGrouping: false,
}

console.log(new Intl.NumberFormat('en-US', {currency:"USD", style: "currency"}).format(num));
console.log(new Intl.NumberFormat('pt-PT', {currency: "EUR", style: "currency"}).format(num));
console.log(new Intl.NumberFormat('pt-BR', {style: "currency", currency: "BRL"}).format(num));