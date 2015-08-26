/* 
 FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Basic: Filter
 Exercise 4 of 18


# Task

Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without their containing object.

## Arguments

  * messages: an Array of 10 to 100 random objects that look something like this:

    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Hint

  * Try chaining some Array methods!

## Example

    [ 'Tempor quis esse consequat sunt ea eiusmod.',
      'Id culpa ad proident ad nulla laborum incididunt.',
      'Ullamco in ea et ad anim anim ullamco est.',
      'Est ut irure irure nisi.' ]

## Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Boilerplate

    function getShortMessages(messages) {
      // SOLUTION GOES HERE
    }
    
    module.exports = getShortMessages

*/ 

module.exports = function (messages) {
	return messages.filter(function (obj) {
		return obj.message.length < 50; 
	})
	.map(function (obj) {
		return obj.message; 
	}); 
}; 

/* 
submission: [ 'Laboris consequat voluptate officia sint sit qui.', 'Veniam ipsum fugiat amet aliquip magna in.', 'Est cillum nisi consequat cupidatat magna enim.', 'Sit eu deserunt sunt culpa ad ex anim mollit.', 'Nisi exercitation aliqua fugiat sint.' ]
solution:   [ 'Laboris consequat voluptate officia sint sit qui.', 'Veniam ipsum fugiat amet aliquip magna in.', 'Est cillum nisi consequat cupidatat magna enim.', 'Sit eu deserunt sunt culpa ad ex anim mollit.', 'Nisi exercitation aliqua fugiat sint.' ]

# PASS

Your solution to Basic: Filter passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }

────────────────────────────────────────────────────────────────────────────────

*/