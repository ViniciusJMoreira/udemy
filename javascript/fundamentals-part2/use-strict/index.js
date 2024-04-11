// La modalita rigorosa rende piu facile per noi svilluppatori evitare errori accidentali
// quindi fondamentalmente ci aiuta a introdurre i bug nel nostro codice.
'use strict'

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive 🚗');

const interface = 'daw'