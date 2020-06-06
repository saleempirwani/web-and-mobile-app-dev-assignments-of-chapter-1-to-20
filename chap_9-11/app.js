/******************** User Input & Conditional Statement ********************* */

document.write('<h1>Chap # 9-11</h1>')

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights

document.write('<h2>Task # 1:</h2>')
var city = prompt('Enter a name of city')
document.write("User's choice: ", city, '<br>')
if (city.toLowerCase() === "karachi") {
    document.write('Welcome to city of lights')
}


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

document.write('<h2>Task # 2:</h2>')
var gender = prompt('Enter your gender')
document.write("User's choice: ", gender, '<br>')
if (gender.toLowerCase() == 'male') {
    document.write('Good Morning Sir.')
}
else if (gender.toLowerCase() == 'female') {
    document.write('Good Morning Ma’am.')
}


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

document.write('<h2>Task # 3:</h2>')
var trafficColor = prompt('Enter traffic signal color')
document.write("User's choice: ", trafficColor, '<br>')
if (trafficColor.toLowerCase() === 'red') {
    document.write('Must Stop')
}
else if (trafficColor.toLowerCase() === 'yellow') {
    document.write('Ready to move')
}
else if (trafficColor.toLowerCase() === 'green') {
    document.write('Move now')
}


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25 litres,
//     show the message “Please refill the fuel in your car”

document.write('<h2>Task # 4:</h2>')
var remFuel = +prompt('Enter a remaining fuel in litres')
document.write("User's choice: ", remFuel, ' litres <br>')
if (remFuel < 0.25) {
    document.write("Please refill the fuel in your car")
}


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

document.write('<h2>Task # 5: </h2>')
document.write("Alert messages.")
var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}


var b = 82;
// It will not run 
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
// It will not run 
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}
// It will not run
if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
// It will not run
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var sub1 = +prompt('Enter subject 1 # marks')
var sub2 = +prompt('Enter subject 2 # marks')
var sub3 = +prompt('Enter subject 3 # marks')
var totalMarks = 300
var obtMarks = (sub1 + sub2 + sub3)
percent = (obtMarks / totalMarks) * 100
var grade = ''
var remarks = ''

if (percent >= 80) {
    grade = 'A-one'
    remarks = 'Excellent'
}
else if (percent >= 70 && percent < 80) {
    grade = 'A'
    remarks = 'Good'
}
else if (percent >= 60 && percent < 70) {
    grade = 'B'
    remarks = 'You need to improve'
}
else if (percent < 60) {
    grade = 'Fail'
    remarks = 'Sorry'
}

document.write('<h2>Task # 6: Marksheet</h2>')
document.write('Total Marks: ', totalMarks, '<br>')
document.write('Obtained Marks: ', obtMarks, '<br>')
document.write('Percentage: ', percent.toFixed(0), ' %<br>')
document.write('Grade: ', grade, '<br>')
document.write('Remarks: ', remarks, '<br>')


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNo = 4
var guessNo = +prompt('Enter a guess no')
document.write('<h2>Task # 7:</h2>')
document.write('Guess no: ', guessNo, '<br>')
if (guessNo === secretNo) {
    document.write('Bingo! Correct answer')
}
else if (guessNo + 1  === secretNo) {
    document.write('Close enough to the correct answer')
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num = +prompt('Enter a number')
document.write('<h2>Task # 8:</h2>')
document.write('User choice: ', num, '<br>')
if (num % 3 == 0) {
    document.write('Bingo! ', num, ' is divisible by 3')
}


// 9. Write a program that checks whether the given input is an
// even number or an odd number.
var num = +prompt('Enter a number')
document.write('<h2>Task # 9:</h2>')
document.write('User choice: ', num, '<br>')
if (num % 2 == 0) {
    document.write('Bingo! ', num, ' is even')
}
else{
    document.write('Bingo! ', num, ' is odd')
}


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var t = +prompt('Enter a temperature')
var criteria = ''

if (t > 40) {
    criteria = 'It is too hot outside.'
}
else if (t > 30 && t < 40) {
    criteria = 'The Weather today is Normal.'
}
else if (t > 20 && t < 30) {
    criteria = 'Today’s Weather is cool.'
}
else if (t > 10 && t < 20) {
    criteria = 'OMG! Today’s weather is so Cool.'
}

document.write('<h2>Task # 10:</h2>')
document.write('User choice: ', t, '<br>')
document.write(criteria)


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var no1 = +prompt('Enter a first number')
var no2 = +prompt('Enter a second number')
var oper = prompt('Enter a operator ( +,-,*, / and %)')
var result = 0

if (oper === '+') {
    result = no1 + no2
} 
else if (oper === '-') {
    result = no1 - no2
}
else if (oper === '*') {
    result = no1 * no2
}
else if (oper === '/') {
    result = no1 / no2
}
else if (oper === '%') {
    result = no1 % no2
}

document.write('<h2>Task # 11:</h2>')
document.write('First number: ', no1, '<br>')
document.write('Second number: ', no2, '<br>')
document.write('Operator: ', oper, '<br>')
document.write('Result: ', result)
