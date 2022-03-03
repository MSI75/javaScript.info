// Interaction: alert, prompt, confirm 
// As we’ll be using the browser as our demo environment, let’s see a couple of functions to interact with the user: 

// alert 
// This one we’ve seen already. It shows a message and waits for the user to press “OK”.

// alert('are you ready for me ?')

// prompt
// The function prompt accepts two arguments: 

// result = prompt(title, ['default'])

// title
// The text to show the visitor.

// default
// An optional second parameter, the initial value for the input field.

// The square brackets in syntax [...]
// The square brackets around default in the syntax above denote that the parameter is optional, not required.b 

/* let age = prompt('How old are you ?', 100)
alert(`you are ${age} years old`) */

// confirm 
// The function confirm shows a modal window with a question and two buttons: OK and Cancel. 
// The result is true if OK is pressed and false otherwise. 

/* let isBoss = confirm('Are you the boss ?')
alert(isBoss) */

// work 
let name = prompt('What is your name', [])
alert(name)