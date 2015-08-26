/* 
 FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Basic: Map
 Exercise 3 of 18


# Task

Convert the following code from a for-loop to Array#map:

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }
    
    module.exports = doubleAll

## Arguments

  * numbers: An Array of 0 to 20 Integers between 0 and 9

## Conditions

  * Your solution should use Array.prototype.map()
  * Do not use any for/while loops or Array.prototype.forEach.
  * Do not create any unecessary functions e.g. helpers.

## Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Boilerplate

    function doubleAll(numbers) {
      // SOLUTION GOES HERE
    }
    
    module.exports = doubleAll

*/

module.exports = function (numbers) {
	return numbers.map(function (num) {
		return num * 2; 
	}); 
}; 

/* 
input:      [ 0, 8, 0, 1, 7, 6, 2, 3, 0, 6, 7, 3, 7, 5, 3, 4, 1, 9, 4 ]
submission: [ 0, 16, 0, 2, 14, 12, 4, 6, 0, 12, 14, 6, 14, 10, 6, 8, 2, 18, 8 ]
solution:   [ 0, 16, 0, 2, 14, 12, 4, 6, 0, 12, 14, 6, 14, 10, 6, 8, 2, 18, 8 ]
✓ Yay!  You used Array#map

# PASS

Your solution to Basic: Map passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }

────────────────────────────────────────────────────────────────────────────────

*/
