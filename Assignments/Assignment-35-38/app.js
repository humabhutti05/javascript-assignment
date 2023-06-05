// // 1. Write a function that displays current date & time in your browser.

// var date = new Date();
// document.write("<h2>"+date+"</h2>");

// // 2. Write a function that takes first & last name and then it
// // greets the user using his full name.

// function greet(firstName, lastName) {
//   var fullName = firstName + " " + lastName;
//   console.log("Hello, " + fullName);
// }

// greet("Huma", "M.Yousaf");



// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

//  function addNumber() {
//     var num1 = prompt("Enter the first number:");
//     var num2 = prompt("Enter the second number:");
//     var sum = num1 + num2;
//     return sum;
//   }
//   var result = addNumber();
// console.log(result);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function computeOperation(num1, num2, operator) {
//   var result;

//   if (operator === '+') {
//     result = num1 + num2;
//   } else if (operator === '-') {
//     result = num1 - num2;
//   } else if (operator === '*') {
//     result = num1 * num2;
//   } else if (operator === '/') {
//     result = num1 / num2;
//   } else {
//     return "Invalid operator!";
//   }

//   document.write("<h2>"+"The result is: " + result+"</h2>");
//   return result;
// }
// var number1 = 5;
// var number2 = 3;
// var operation = '+';
// computeOperation(number1, number2, operation);



// 5. Write a function that squares its argument.

// function squareAndDisplay(number) {
//   var squared = number * number;
//   document.write("<h2>"+"The square of " + number + " is: " + squared+"</h2>");
// }
// var inputNumber = 5;
// squareAndDisplay(inputNumber);


// 6. Write a function that computes factorial of a number.

// function computeFactorial(number) {
//   var factorial = 1;
//   for (var i = 1; i <= number; i++) {
//     factorial *= i;
//   }
//   document.write("<h2>"+"The factorial of " + number + " is: " + factorial+"</h2>");
// }
// var inputNumber = 5;
// computeFactorial(inputNumber);


// 7. Write a function that take start and end number as inputs & display counting in your browser.

// function countNumbers(start, end) {
//   var counting = "";
//   if (start <= end) {
//     for (var i = start; i <= end; i++) {
//       counting += i + " ";
//     }
//   } else {
//     for (var j = start; j >= end; j--) {
//       counting += j + " ";
//     }
//   }
//   document.write("<h2>"+"Counting: " + counting+"</h2>");
// }
// var startNumber = 1;
// var endNumber = 10;
// countNumbers(startNumber, endNumber);


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquavar

// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(num) {
//     return num * num;
//   }
//   var baseSquare = calculateSquare(base);
//   var perpendicularSquare = calculateSquare(perpendicular);
//   var hypotenuseSquare = baseSquare + perpendicularSquare;
//   var hypotenuse = Math.sqrt(hypotenuseSquare);

//   document.write("<h2>"+"The hypotenuse of the right-angled triangle is: " + hypotenuse+"</h2>");
// }
// var baseLength = 3;
// var perpendicularLength = 4;
// calculateHypotenuse(baseLength, perpendicularLength);

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function calculateRectangleArea(width, height) {
//     var area = width * height;
//     return area;
//   }
//   var width = 5;
//   var height = 10;
//   var rectangleArea = calculateRectangleArea(width, height);
//   document.write("<h2>"+"The area of a rectangle is :"+" " +rectangleArea+ "</h2>");
  
   

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// function palindrome(string)
// {    var reverse = string.split('').reverse().join('');
//       document.write("<h2>"+reverse+ "</h2>");
//     if(string==reverse)
//         document.write("<h2>"+"Its a palindrome"+ "</h2>")
//     else
//     document.write("<h2>"+"Its not a palindrome"+ "</h2>")
// }
// var string = prompt("Enter String:");
// palindrome(string);


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalize_First_Letter(text) {
//    var words = text.split(" ");
//    for (let i = 0; i < words.length; i++) {
//      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//    }
//    return words.join(" ");
//  }
//  var text = 'the quick brown fox';
//  var result = capitalize_First_Letter(text);
//  document.write("<h2>"+"Original Text: "+"  "+text+ "</h2>")
//  document.write ("<h2>"+"Modified Text:"+"  "+result+ "</h2>"); 

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function findLongestWord(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];
//   for(var i = 1 ; i < array1.length ; i++)
//   {
//     if(result.length < array1[i].length)
//     {
//     result = array1[i];
//     } 
//   }
//   return result;
// }
// document.write("<h2>"+"In the sentences 'Web Development Tutorial' the longest word is: "+ "  "+findLongestWord('Web Development Tutorial')+"</h2>");

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// document.write("<h2>"+"The number of occurrences of in the letter 'JSResourceS.com', 'o' is :" +"  "+char_count('JSResourceS.com', 'o')+"</h2>");

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumfrence(radius) {
//    var y = (Math.PI * radius) * 2;
//  document.write("<h2>"+"The circumfrence is " + y + "." + "<br>"+"</h2>");

//  }
//  function calcArea(radius) {
//    var x = (Math.PI * radius) * radius;
//  document.write("<h2>"+"The area is " + x + "."+"</h2>");

//  }
//  calcCircumfrence(30);
//  calcArea(10);



