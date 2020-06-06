/******************** MATH EXPRESSIONS ********************* */

document.write('<h1>Chap # 6-9</h1>')

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write('<h2>Task # 1:</h2>')
var a = 10
document.write('Result')
document.write('<br>The value of a is: ', a)
document.write('<br>...............................')

++a
document.write('<br><br>The value of ++a is: ', a)
document.write('<br>Now value of a is: ', a)

document.write('<br><br>The value of a++ is: ', a)
a++
document.write('<br>Now value of a is: ', a)

--a
document.write('<br><br>The value of --a is: ', a)
document.write('<br>Now value of a is: ', a)

document.write('<br><br>The value of a-- is: ', a)
a--
document.write('<br>Now value of a is: ', a)


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

document.write('<h2>Task # 2:</h2>')
var a = 2, b = 1;
document.write('a: ', a)
document.write('<br>b: ', b)
var result = --a - --b + ++b + b--;
document.write('<br>result: ', result)

document.write('<br><br>Explain:')
var a = 2, b = 1;
document.write('<br>--a : ', --a)
var a = 2, b = 1;
document.write('<br>--a - --b : ', (--a - --b))
var a = 2, b = 1;
document.write('<br>--a - --b + ++b : ', (--a - --b + ++b))
var a = 2, b = 1;
document.write('<br>--a - --b + ++b + b-- : ', (--a - --b + ++b + b--))


// 3. Write a program that takes input a name from user &
// greet the user.
document.write('<h2>Task # 03:</h2>')
name = prompt('Enter your name')
document.write('Hello: ', name)


// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

document.write('<h2>Task # 05:</h2>')
tableOf = +prompt('Enter a number to display a table')
if (tableOf == 0){
      tableOf = 5
}
document.write('User Choice: ', tableOf, '<br>')
for(var i=1; i<=10; i++){
      document.write(tableOf, ' x ', i, ' = ', (tableOf * i), '<br>')
}


// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table).

var sub1 = prompt('Enter subject # 1 name')
var sub2 = prompt('Enter subject # 2 name')
var sub3 = prompt('Enter subject # 3 name')

var subTotalMark = 100

var obtMarksSub1 = +prompt('Enter obtained marks for subject # 1')
var obtMarksSub2 = +prompt('Enter obtained marks for subject # 2')
var obtMarksSub3 = +prompt('Enter obtained marks for subject # 3')

var pertSub1 = (obtMarksSub1 / subTotalMark) * 100
var pertSub2 = (obtMarksSub2 / subTotalMark) * 100
var pertSub3 = (obtMarksSub3 / subTotalMark) * 100

var totalObtMarks = obtMarksSub1 + obtMarksSub2 + obtMarksSub3
var  totalMarks = subTotalMark * 3
var totalPercent = (totalObtMarks/totalMarks) * 100

document.write('<h2>Task # 06: Marksheet</h2>')

document.write(
`<table>
<tr align="center">
    <th>Subjects</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
</tr>
<tr align="center">
    <td>`+sub1+`</td>
    <td>`+subTotalMark+`</td>
    <td>`+obtMarksSub1+`</td>
    <td>`+pertSub1.toFixed(2)+`</td>
</tr>
<tr align="center">
    <td>`+sub2+`</td>
    <td>`+subTotalMark+`</td>
    <td>`+obtMarksSub2+`</td>
    <td>`+pertSub1.toFixed(2)+`</td>
</tr>
<tr align="center">
    <td>`+sub3+`</td>
    <td>`+subTotalMark+`</td>
    <td>`+obtMarksSub3+`</td>
    <td>`+pertSub1.toFixed(2)+`</td>
</tr>
<tr align="center">
    <td></td>
    <td>`+totalMarks+`</td>
    <td>`+totalObtMarks+`</td>
    <td>`+totalPercent.toFixed(2)+`</td>
</tr>
</table>`
)


