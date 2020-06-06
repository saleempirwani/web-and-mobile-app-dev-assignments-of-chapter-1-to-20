/******************** IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION  ********************* */

document.write('<h1>Chap # 14-16</h1>')

// 1. Declare an empty array using JS literal notation to store
// student names in future.

document.write('<h2>Task # 01: Declaring an Array</h2>')
var names = []

// 1. Declare an empty array using JS literal notation to store
// student names in future.

document.write('<h2>Task # 02: Declaring an Array</h2>')
var names = []

// 3. Declare and initialize a strings array
document.write('<h2>Task # 03: Declaring and Initialize String Array</h2>')
var food = ['Pizza', 'Burger', 'Doner Kebab']

// 4. Declare and initialize a number array
document.write('<h2>Task # 04: Declaring and Initialize Number Array</h2>')
var rollno = [1, 5, 9, 15]

// 5. Declare and initialize a boolean array
document.write('<h2>Task # 05: Declaring and Initialize Boolean Array</h2>')
var rollno = [true, true, true, false, true]

// 5. Declare and initialize a mixed array
document.write('<h2>Task # 06: Declaring and Initialize Mixed Array</h2>')
var rollno = [true, 'Ali', 43, ['Block 6', '52']]


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
document.write('<h2>Task # 07: Qualification</h2>')
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'Phd']
for (var i=0; i<qualifications.length; i++){
    document.write((i+1), ') ', qualifications[i], '<br>')
}


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var stdNames = ['Saleem', 'Raza', 'Shafi']
var stdScore = ['320', '230', '480']
var percent = 0
document.write('<h2>Task # 08:</h2>')
for (var i=0; i<stdNames.length; i++){
    percent = (stdScore[i] / 500) * 100
    document.write('Score of ', stdNames[i], ' is ', stdScore[i], ' Percentage:  ', percent.toFixed(0), '%<br>')
}

// 9. Initialize an array with color names. Display the array elements in your browser.

document.write('<h2>Task # 09:</h2>')

var color = ['Red', 'Blue', 'Green', 'Orange', 'Purple']
document.write('<h2>Task # 09:</h2>')
document.write('Color: ', color, '<br><br>')

// a. Ask the user what color he/she wants to add to the beginning & add that color to the 
//    beginning of the array. Display the updated array in your browser.
var addColor = prompt('What color you want to add at beginining')
color.unshift(addColor)
document.write('Updated Color: ', color, '<br><br>')

// b. Ask the user what color he/she wants to add to the end & add that color to the end 
//    of the array. Display the updated array in your browser.
var addColor = prompt('What color you want to add at last')
color.push(addColor)
document.write('Updated Color: ', color, '<br><br>')

// c. Add two more color to the beginning of the array. Display the updated array in your 
    //   browser.
color.unshift('Light Yellow', 'Sky Blue')
document.write('Updated Color: ', color, '<br><br>')

// d. Delete the first color in the array. Display the updated array in your browser.
color.shift()
document.write('Updated Color: ', color, '<br><br>')

// e. Delete the last color in the array. Display the updated array in your browser.
color.pop()
document.write('Updated Color: ', color, '<br><br>')

// f. Ask the user at which index he/she wants to add a color & color name. Then add the 
//    color to desired position/index. . Display the updated array in your browser.
var addColor = prompt('What color you want to add')
var atWhatIndex = prompt('At What index you want to add between ' + ('0 - '+ (color.length-1)))
color.splice(atWhatIndex, 0, addColor)
document.write('Updated Color: ', color, '<br><br>')

// g. Ask the user at which index he/she wants to delete color(s) & how many colors 
//    he/she wants to delete. remove the same number of color(s) from user-defined 
//    position/index. Display the updated array in your browser.
var noDelete = prompt('How many color to you delete')
var fromWhatIndex = prompt('From What index you want to delete between ' + ('0 - '+ (color.length-1)))
color.splice(fromWhatIndex, noDelete, addColor)
document.write('Updated Color: ', color, '<br><br>')


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var stdScore = [320, 230, 480, 120]
document.write('<h2>Task # 10:</h2>')
document.write('Scores of Students: ', stdScore, '<br>')
document.write('Ordered Scores of Students: ', stdScore.sort(), '<br>')


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

document.write('<h2>Task # 11:</h2>')
var citiesName = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta', 'Gawadar']
document.write('Cities names: ', citiesName, '<br>')
var selectedCities = citiesName.slice(0, 3)
document.write('Cities names: ', selectedCities)


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ['This', 'is', 'my', 'cat']
document.write('<h2>Task # 12:</h2>')
document.write('Array:<br>', arr, '<br><br>')
document.write('String:<br>', arr.join(' '))

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var arr = []

arr.push('keyboard')
arr.push('mouse')
arr.push('printer')
arr.push('monitor')

document.write('<h2>Task # 13: FIFO</h2>')
document.write('Devices:<br>', arr, '<br><br>')

document.write('Out:<br>', arr.shift(), '<br><br>')
document.write('Out:<br>', arr.shift(), '<br><br>')
document.write('Out:<br>', arr.shift(), '<br><br>')
document.write('Out:<br>', arr.shift(), '<br><br>')


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In First Out)

var arr = []

arr.push('keyboard')
arr.push('mouse')
arr.push('printer')
arr.push('monitor')

document.write('<h2>Task # 14: LIFO</h2>')
document.write('Devices:<br>', arr, '<br><br>')

document.write('Out:<br>', arr.pop(), '<br><br>')
document.write('Out:<br>', arr.pop(), '<br><br>')
document.write('Out:<br>', arr.pop(), '<br><br>')
document.write('Out:<br>', arr.pop(), '<br><br>')


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var phoneBrand = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
var  menu = ''

for(var i=0; i<phoneBrand.length; i++){
   menu += `<option value="">` + phoneBrand[i] + `</option>`
}
document.write('<h2>Task # 15:</h2>')
document.write(
    `<select name="" id="">`
        + menu +
    `</select>`
)