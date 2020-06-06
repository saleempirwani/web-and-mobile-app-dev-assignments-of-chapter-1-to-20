/******************** VARIABLES FOR NUMBERS ********************* */

document.write('<h1>Chap # 3</h1>')

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 21
alert(age)


/* 2. Declare & initialize a variable to keep track of how many times a visitor has visited 
      a web page. Show his/her number of visits on your web page. For example: “You have 
      visited this site N times”. */

var nTimes = 5
alert('You have visited this site ' + nTimes + 'times')


/* 3. Declare a variable called birthYear & assign to it your birth year. 
      Show the following message in your browser */


document.write('<h2>Task # 03:</h2>')
var birthYear = 1998
document.write('My birth Year is ' + birthYear + '<br>')
document.write('Datatype of my birth year is ' + typeof birthYear)


/* 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store 
      in variables the following information:
      a. Visitor’s name
      b. Product title
      c. Quantity i.e. 
    how many products a visitor wants to order  Show the following message in your browser,
    “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */
var name = prompt('Enter your name')
var product = prompt('Enter your product title')
var quantity = prompt('Enter your quantity')
document.write('<h2>Task # 04:</h2>')
document.write(name + ' ordered ' + quantity + ' ' + product + ' on XYZ Clothing store')
