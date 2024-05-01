'use-strict';

const arr = ["Admin", "User", "Visitor"];
const acc = [...arr, "Private"];

function i(...args) {
  // let res = arg;
  // const newRes = res.map((i) => i.toUpperCase());
  args.push("Unknown");
  // Index sequence , following the index
  const [admin, , visitor, ...res] = args; // 'admin', 'visitor', ['Private', 'Unknown']
  // the 'user' is left out
  // console.table({ admin, visitor, res });
}

i(...acc);

