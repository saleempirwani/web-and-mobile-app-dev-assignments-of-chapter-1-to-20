/******************** IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION  ********************* */

document.write('<h1>Chap # 12-13</h1>')

// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122)

document.write('<h2>Task # 01:</h2>')

var value = prompt('Enter a character (number or string)')
document.write('User choice: ', value, '<br>')
var code = value.charCodeAt(0)
if (code >= 65 && code <= 90) {
    document.write('Uppercase')
}
else if (code >= 97 && code <= 122) {
    document.write('Lowercase')
}
else if (code >= 48 && code <= 57) {
    document.write('Number')
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

document.write('<h2>Task # 02:</h2>')
var no1 = +prompt('Enter a first number')
var no2 = +prompt('Enter a second number')
document.write('First number: ', no1, '<br>')
document.write('Second number: ', no2, '<br>')
if (no1 > no2) {
    document.write(no1, ' is greater than ', no2)
}
else if (no2 > no1) {
    document.write(no2, ' is greater than ', no1)
}
else {
    document.write(no2, ' is equal to ', no1)
}


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

document.write('<h2>Task # 03:</h2>')
var num = +prompt('Enter a  number')
document.write('User choice: ', num, '<br>')
if (num < 0) {
    document.write(num, ' is a negative number.')
} else if (num > 0) {
    document.write(num, ' is a positive number.')
}
else {
    document.write(num, ' is a zero.')
}


// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

document.write('<h2>Task # 04:</h2>')
var string = prompt('Enter a character (i.e. string length 1)')
var vowel = string.substring(0, 1).toLowerCase()
document.write('User choice: ', vowel, '<br>')
if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
    document.write('True')
} else {
    document.write('False')
}


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

document.write('<h2>Task # 05:</h2>')
var correctPasswd = 'Saleem123'
var passwd = prompt('Enter a password.').trim()
if (passwd == '') {
    document.write('Please enter password.')
}
else if (passwd == 'Saleem123') {
    document.write('Correct! The password you entered matches the original password.')
}
else {
    document.write('Incorrect password.')
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

document.write('<h2>Task # 06:</h2>')
var greeting = '';
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}

document.write(greeting)


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

document.write('<h2>Task # 07:</h2>')
greet = ''
var time = +prompt('Enter a time (like: 1900 = 7pm).')
document.write('User choice: ', time, '<br>')
if (time >= 0000 && time < 1200){
    greet = 'Good Morning'
}
else if (time >= 1200 && time < 1700){
    greet = 'Good Afternoon'
}
else if (time >= 1700 && time < 2100){
    greet = 'Good Evening'
}
else if (time >= 2100 && time < 2359){
    greet = 'Good Night'
}
document.write(greet)

