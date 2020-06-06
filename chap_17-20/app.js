/******************** Arrays and loop  ********************* */

document.write('<h1>Chap # 17-20</h1>')


// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

document.write('<h2>Task # 01: Declare and initialize an empty multidimensional array.</h2>')
var multiArray = [[], [], []]


// 2. Declare and initialize a multidimensional array
// representing the following matrix:

document.write('<h2>Task # 02: Declare and initialize a multidimensional array</h2>')
var multiArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

for (var i = 0; i < multiArray.length; i++) {
    for (var j = 0; j < multiArray[i].length; j++) {
        document.write(multiArray[i][j], ' ')
    }
    document.write('<br>')
}


// 3. Write a program to print numeric counting from 1 to 10.

document.write('<h2>Task # 03:</h2>')
for (var i = 1; i <= 10; i++) {
    document.write(i, '<br>')
}


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var tableOf = +prompt('Enter a number to show its multiplication table')
var lenOfTable = +prompt('Enter a length of table')

document.write('<h2>Task # 04:</h2>')
document.write('Table of:', tableOf, '<br>')
document.write('Length of Table: ', lenOfTable, '<br><br>')

for (var i = 0; i <= lenOfTable; i++) {
    document.write(tableOf, ' x ' + i + ' = ' + (i * tableOf), '<br>')
}


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

document.write('<h2>Task # 05:</h2>')
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i], '<br>')
}

document.write('<br>')

for (var i = 0; i < fruits.length; i++) {
    document.write('Element at index ', i, ' is ', fruits[i], '<br>')
}


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write('<h2>Task # 06:</h2>')

document.write('Counting: <br><br>')
for (var i = 1; i <= 15; i++) {
    document.write(i, ', ')
}

document.write('<br><br> Revese counting: <br><br>')
for (var i = 10; i > 0; i--) {
    document.write(i, ', ')
}

document.write('<br><br> Even: <br><br>')
for (var i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        document.write(i, ', ')
    }
}

document.write('<br><br> Odd: <br><br>')
for (var i = 0; i < 21; i++) {
    if (i % 2 != 0) {
        document.write(i, ', ')
    }
}

document.write('<br><br> Series: <br><br>')
for (var i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        document.write(i, 'k, ')
    }
}


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

document.write('<h2>Task # 07:</h2>')

var a = ['cake', 'apple pie', 'cookies', 'chips', 'patties']
var searchByUser = prompt('Welcome! What you want to order.').toLowerCase()
var getIndex = a.indexOf(searchByUser)

if (getIndex == -1) {
    document.write('We are sorry ', searchByUser, ' is not available in our bakery.')
} else {
    document.write(searchByUser, ' is available at index ', getIndex, ' in our bakery.')
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var a = [24, 53, 78, 91, 12]
var large = a[0]
document.write('<h2>Task # 08:</h2>')
document.write('Array: ', a, '<br>')
for (var i = 0; i < a.length; i++) {
    if(large < a[i]){
        large = a[i]
    }
}
document.write('Largest no: ', large)


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var a = [24, 53, 78, 91, 12]
var small = a[0]
document.write('<h2>Task # 09:</h2>')
document.write('Array: ', a, '<br>')
for (var i = 0; i < a.length; i++) {
    if(small > a[i]){
        small = a[i]
    }
}
document.write('Smallest no: ', small)


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

document.write('<h2>Task # 10:</h2>')
for(var i=5; i<=100; i+=5){
    document.write(i, ' ')
}

// Also

// for(var i=1; i<100; i++){
//     document.write(i*5, ' ')
//     if (i*5 == 100){
//         break
//     }
    
// }