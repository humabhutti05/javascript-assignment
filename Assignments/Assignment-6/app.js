// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:


// var a = 19;
// var b = 53;
// var result = a+b;
// document.write("<h3>"+"The value of a+b is :"+" " +result+"</h3>")

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write(result)

// 3. Write a program that takes input a name from user & greet the user.

// var userInput = prompt("ENTER Your Name...")
// var greet = 'Hello'
// result = (greet + " " + userInput.charAt(0).toUpperCase() + userInput.slice(1))
// alert(result)

 


// 4. Write a program to take input a number from user & display it’s multiplication table on your browser.
//  If user does not enter a new number, multiplication table of 5 should be displayed by default.

// var userInput = prompt("Enter a Number")
// function table(number){


//     for (var  i = 1; i <= 10; i++) {
    
//         var result = i * number;
//         document.write(`${number} * ${i} = ${result}`);
//     }
//     }
//     table(5)

// 5. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)


// var subject1 = prompt("Enter name of subject 1:");
// var subject2 = prompt("Enter name of subject 2:");
// var subject3 = prompt("Enter name of subject 3:");

// var obtainedMarks1 = +prompt("Enter obtained marks for " + subject1 + ":");
// var obtainedMarks2 = +prompt("Enter obtained marks for " + subject2 + ":");
// var obtainedMarks3 = +prompt("Enter obtained marks for " + subject3 + ":");
// var totalMarks = 100;
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = ((totalObtainedMarks)/(totalMarks*3)*100)


// document.write("<table>");
// document.write("<tr><th>Subject</th>\n<th>Total Marks</th>\n<th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>"+ obtainedMarks1/totalMarks*100 + "%"+"</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>"+obtainedMarks2/totalMarks*100 + "%"+"</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>"+obtainedMarks3/totalMarks*100 + "%"+"</td></tr>");
// document.write("<tr><th></th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
// document.write("<tr><th></th><th>Percentage</th><th>" + percentage.toFixed(3) + "%"+"</th></tr>");
// document.write("</table>");