/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
                     
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
const textArea = document.createElement("textarea");
const button = document.createElement("button");
button.textContent = 'Enviar';
document.body.appendChild(textArea);
document.body.appendChild(button);

button.addEventListener('click', () => {
  const text = textArea.value;
  const arr = text.split('\n')
  const def = [];

  for (const word of arr) {
    word.toLowerCase();
    const arr = word.split("_");
    def.push(arr[0] + arr[1][0].toUpperCase() + arr[1].slice(1));
  }
  for (let i = 0; i < def.length; i++) {
    console.log(def[i].padEnd(20) + "✅".repeat(i + 1));
  }
})
