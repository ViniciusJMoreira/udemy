'use-strict';
// Immediatelly invoked function expressions
// IIFE
(function() {
  console.log('this will never run agan');
})();


// immediatelly invoked arrow function
(() => console.log("this will ALSO never run agan"))()