// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var userInput = prompt("City Name...")
//  if(userInput == 'Karachi' || userInput == 'karachi') {
//     alert("Welcome to city of lights");
// }

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter Your Gender")
// if (gender == 'male' || gender == 'Male') {
//     alert("Good Morning Sir.")
// }
// else if (gender == 'female' || gender == 'Female') {
//     alert("Good Morning Ma’am.")
// }

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:


// var color = prompt("Enter the color of the road traffic signal:");
// if (color === "red") {
//   alert("Must stop");
// } else if (color === "yellow") {
//   alert("Ready to move");
// } else if (color === "green") {
//   alert("Move now");
// } else {
//   alert("Invalid color");
// }


// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 
// 0.25litres, show the message “Please refill the fuel in your car”

// var remainingFuel = prompt("Enter the remaining fuel in your car (in liters):");
// if (remainingFuel < 0.25) {
//   alert("Please refill the fuel in your car.");
// } else {
//   alert("Fuel level is sufficient.");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// a. Output: "given condition for variable a is true"

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// b. Output: No alert message is displayed

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// c. Output: "condition 2 is true"

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// d. Output: "The cost equals"

// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// e. Output: "True"





// 6. Write a program to take input the marks obtained in three subjects & total marks. 
//Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// var subject1Marks = prompt("Enter marks obtained in subject 1:");
// var subject2Marks = prompt("Enter marks obtained in subject 2:");
// var subject3Marks = prompt("Enter marks obtained in subject 3:");
// var totalMarks = prompt("Enter total marks:");


// var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

// var percentage = (totalObtainedMarks / totalMarks) * 100;
// var grade;
// if (percentage >= 90) {
//   grade = "A+";
// } else if (percentage >= 80) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 60) {
//   grade = "C";
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "Fail";
// }
// document.write("<h2>"+"Percentage: " + percentage.toFixed(2) + "%"+"</h2>");
// document.write("<h2>"+"Grade: " + grade+"</h2>");



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// var secretNumber = 1;
// var userInput = +prompt("Guess the number between 1 to 10")

// if (userInput == '1') {
// alert("Bingo! Correct answer")
// }

//  else if(secretNumber < userInput) {
//     alert("Close enough to the correct answer")
// }

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var number = 21;
// if( number % 3 == 0) {
// alert("The 21 is divisible by 3 is :" + number)
// }


// 9. Write a program that checks whether the given input is an even number or an odd number.

// var number = prompt("Enter a number: ");

// if (number % 2 == 0)
//     alert("The number is even")
// else{
//     alert("The number is odd")
// }

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// var temperature = prompt("Enter the temperature:");

// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today's weather is so Cool.");
// } else {
//   alert("Temperature is too low.");
// }




// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var number1 = prompt("Enter the first number:");
// var number2 = prompt("Enter the second number:");
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// if (operation === "+") {
//   var result = number1 + number2;
//   alert("Result: " + result);
// } else if (operation === "-") {
//   var result = number1 - number2;
//   alert("Result: " + result);
// } else if (operation === "*") {
//   var result = number1 * number2;
//   alert("Result: " + result);
// } else if (operation === "/") {
//   if (number2 === 0) {
//     alert("Error: Division by zero is not allowed.");
//   } else {
//     var result = number1 / number2;
//     alert("Result: " + result);
//   }
// } else if (operation === "%") {
//   var result = number1 % number2;
//   alert("Result: " + result);
// } else {
//   alert("Invalid operation. Please try again.");
// }




