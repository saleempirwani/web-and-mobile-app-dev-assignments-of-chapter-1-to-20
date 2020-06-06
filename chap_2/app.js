/******************** VARIABLES FOR STRINGS ********************* */

document.write('<h1>Chapter # 2</h1>')

// 1. Declare a variable called username.

var username


// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = 'Muhammad Saleem Raza'


/* 3. Write script to
    a) Declare a JS variable, titled message.
    b) Assign “Hello World” to variable message
    c) Display the message in alert box. */

var message = 'Hello World!'
alert(message)


// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var name = 'Muhammad Saleem Raza'
var father = 'Muhammad Shafi'
var age = 21
var qualification = 'Undergraduate'

alert(name)
alert(father)
alert(age)
alert(qualification)


// 5. Write a script to display the following alert using one JS variable:

var pizza = 'Pizza'
alert(
    pizza + '\n'+
    pizza.substring(0, 4) + '\n'+
    pizza.substring(0, 3) + '\n'+
    pizza.substring(0, 2) + '\n'+
    pizza.substring(0, 1) + '\n'
)


/* 6. Declare a variable called email and assign to it a string that represents your 
      Email Address(e.g. example@example.com). Show the blow mentioned message in an 
      alert box.(Hint: use string concatenation)*/

var  email = 'example@example.com'
alert('My email address is ' + email)


/* 7. Declare a variable called book & give it the value “A smarter way to 
      learn JavaScript”. Display the following message in an alert box. */

var book = "A smarter way to learn JavaScript"
alert('I am trying to learn from the book   ' + book)

// 8. Write a script to display this in browser through JS

document.write('Yah! I can write HTML content throught JS')

/* 9. Store following string in a variable and show in alert and
    browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” */

var pattern = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬'
alert(pattern)

