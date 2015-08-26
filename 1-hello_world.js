/* 
 FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Hello World
 Exercise 1 of 18


# Task

Write a function that takes an input string and returns it uppercased.

## Arguments

  * input: a String of random words (lorem ipsum).

## Boilerplate

    function upperCaser(input) {
      // SOLUTION GOES HERE
    }
    
    module.exports = upperCaser

*/

module.exports = function (str) {
	return str.toUpperCase();
}; 

/* 
input:      'Fugiat non pariatur minim dolore Lorem ex nisi id commodo.'
submission: 'FUGIAT NON PARIATUR MINIM DOLORE LOREM EX NISI ID COMMODO.'
solution:   'FUGIAT NON PARIATUR MINIM DOLORE LOREM EX NISI ID COMMODO.'

# PASS

Your solution to Hello World passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports = function(input) {
      return input.toUpperCase()
    }

────────────────────────────────────────────────────────────────────────────────

*/