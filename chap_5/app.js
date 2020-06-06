/******************** MATH EXPRESSIONS ********************* */

document.write('<h1>Chap # 5</h1>')

// 1. Write a program that take two numbers & add them in a
      // new variable. Show the result in your browser.

var no1 = +prompt('Enter number 1')
var no2 = +prompt('Enter number 2')
var add = no1 + no2
document.write('<h2>Task # 01:</h2>')
document.write('Sum of ' + no1 + ' and ' + no2 + ' is ' + add)

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var no1 = +prompt('Enter number 1')
var no2 = +prompt('Enter number 2')
var sub = no1 - no2
var mul = no1 * no2
var div = no1 / no2
var mod = no1 % no2
document.write('<h2>Task # 02:</h2>')
document.write('Sub of ' + no1 + ' and ' + no2 + ' is ' + sub)
document.write('<br>Mult of ' + no1 + ' and ' + no2 + ' is ' + mul)
document.write('<br>Div of ' + no1 + ' and ' + no2 + ' is ' + div)
document.write('<br>Mod of ' + no1 + ' and ' + no2 + ' is ' + mod)


// 3. Do the following using JS Mathematic Expressions

// a. Declare a variable.
var num

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write('<h2>Task # 03:</h2>')
document.write('Value after variable declaration is: ' + num)
document.write(num)

// c. Initialize the variable with some number.
num = 5

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write('<br>Initial value: ' + num)


// e. Increment the variable.
num++ 

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write('<br>Value after increment is: ' + num)

// g. Add 7 to the variable.
num += 7

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write('<br>Value after addition is: ' + num)

// i. Decrement the variable.
num--

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write('<br>Value after decrement is: ' + num)

// k. Show the remainder after dividing the variable’s value by 3.
num %= 3

// l. Output : “The remainder is : 0”.
document.write('<br>The remainder is:' + num)

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a 
      // variable & calculate the cost of buying 5 tickets to a movie.

var perTicket = 600
var noOfTickets = 5
var totalAmout = perTicket * noOfTickets
document.write('<h2>Task # 04:</h2>')
document.write('The cost of 5 movie tickets is ' +totalAmout+ 'PKRs')

// Write a script to display multiplication table of any number in your browser.

var tableOf = 4
document.write('<h2>Task # 05:</h2>')
document.write('Table of ' +tableOf)
for (var i=1; i<=10; i++){
      document.write('<br>' + tableOf + ' x ' + i + ' = ' + (tableOf * i))
}


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var tempC = 25
var tempF = 70

var toFahrenheit = (tempC * (9/5)) + 32
var toCelsius = (tempF - 32) * (5/9)

document.write('<br><br><h2>Task # 06: Tempuratures Conversion:</h2>')
document.write(tempC + 'C is ' + toFahrenheit + 'F' )
document.write('<br>' + tempF + 'F is ' + toCelsius + 'C' )
 

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables:
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var priceOfItem1 = 650
var priceOfItem2 = 100
var ordQuantiyOfItem1 = 3
var ordQuantiyOfItem2 = 7
var shippingCharges = 100

var totalCost = (priceOfItem1 * ordQuantiyOfItem1) + (priceOfItem2 * ordQuantiyOfItem2) + shippingCharges

document.write('<br><h2>Task # 07: Shopping Cart</h2>')
document.write('Price of item 1: ' +priceOfItem1)
document.write('<br>Price of item 2: ' + priceOfItem2)
document.write('<br>Ordered quantity of item 1: ' + ordQuantiyOfItem1)
document.write('<br>Ordered Quantity of item 2: ' + ordQuantiyOfItem2)
document.write('<br>shippingCharges: ' + shippingCharges) 
document.write('<br>Total Amout: ' + totalCost) 


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 980
var obtMarks = 804
var percent = (obtMarks / totalMarks) * 100
document.write('<br><h2>Task # 08: Marksheet</h2>')
document.write('Total Marks: ' +totalMarks)
document.write('<br>Obtained Marks: ' +obtMarks)
document.write('<br>Percentage: ' +percent)


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee

var totalCurrency = (10 * 104.80) + (25 * 28)
document.write('<br><h2>Task # 09: Currency in PKR</h2>')
document.write('Total currency in PKR: ' +totalCurrency)


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num = 5
num = num + 5 * 10 / 2
document.write('<h2>Task # 10:</h2>')
document.write('Calculations: ' +num)


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

var currentYear = 2020
var birthYear = 1998
var howOldIsHe = currentYear - birthYear
document.write('<br><h2>Task # 11: Age Calculator</h2>')
document.write('Current Year: ', currentYear)
document.write('<br>Birth Year: ', birthYear)
document.write('<br>Age of ', howOldIsHe)


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20
var circumference = 2 * Math.PI * radius 
var area = Math.PI * Math.pow(radius, 2)
document.write('<br><h2>Task # 12: Geometrizer</h2>')
document.write('Radius: ', radius)
document.write('<br>Circumference: ', circumference)
document.write('<br>Area: ', area)


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

var favSnack = 'Chocolate Chips'
var currentAge = 15
var maxAge = 65
var amountPerDay = 3
var totalEat = amountPerDay * (65  - 15) * 365

document.write(
      '<br><h2>Task # 13: The Lifetime Supply Calculator</h2>',
      'Current age: ', currentAge,
      '<br>Maximum age: ', maxAge,
      '<br>Amount per day: ', amountPerDay,
      '<br>Total eat: ', totalEat
      )




