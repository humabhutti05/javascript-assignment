// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a, b) {
//   return Math.pow(a, b);
// }
// console.log(power(2, 3));
// console.log(power(5, 2));
// console.log(power(10, 0));

 
// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var year = (2012, 2016, 2020);
// var isLeap = isLeapYear(year);
// console.log(isLeap)


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function calculateSemiPerimeter(a, b, c) {
//   var s = (a + b + c) / 2;
//   return s;
// }

// function calculateTriangleArea(a, b, c) {
//   var s = calculateSemiPerimeter(a, b, c);
//   var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }

// var sideA = 5;
// var sideB = 6;
// var sideC = 7;
// var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
// console.log("The Area of triangle is :"+triangleArea);


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function calculateAverage(subject1, subject2, subject3) {
//   var totalMarks = subject1 + subject2 + subject3;
//   var average = totalMarks / 3;
//   return average;
// }
// function calculatePercentage(subject1, subject2, subject3) {
//   var totalMarks = subject1 + subject2 + subject3;
//   var percentage = (totalMarks / 300) * 100;
//   return percentage;
// }
// function mainFunction(subject1, subject2, subject3) {
//   var average = calculateAverage(subject1, subject2, subject3);
//   var percentage = calculatePercentage(subject1, subject2, subject3);

//   console.log("Average: " + average.toFixed(2));
//   console.log("Percentage: " + percentage.toFixed(2) + "%");
// }
// var marksSubject1 = 80;
// var marksSubject2 = 90;
// var marksSubject3 = 95;
// mainFunction(marksSubject1, marksSubject2, marksSubject3);


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function customIndexOf(string, char) {
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }
// var string = "Hello, World!";
// var char = "o";
// var index = customIndexOf(string, char);
// console.log("The alphabet"  +" "+ char +" " +"from the letter"+" "+string+" "+"of the index is:"+" " +index);


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function deleteVowels(sentence) {
//   sentence = sentence.toLowerCase();
//   var result = '';
//   for (var i = 0; i < sentence.length; i++) {
//     switch (sentence[i]) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         break;
//       default:

//         result += sentence[i];
//         break;
//     }
//   }
//   return result;
// }
// var sentence = 'Hello, how are you?';
// var result = deleteVowels(sentence);
// console.log(result);


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function countSuccessiveVowels(sentence) {
//   sentence = sentence.toLowerCase();

//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   var count = 0;

//   for (var i = 0; i < sentence.length - 1; i++) {
//     switch (sentence[i]) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         if (vowels.includes(sentence[i + 1])) {
//           count++;
//         }
//         break;
//       default:
//         break;
//     }
//   }
//   return count;
// }
// var sentence = "Pleases read this application and give me gratuity";
// var result = countSuccessiveVowels(sentence);
// console.log("Total vowels in the sentence"+" "+sentence+" "+"is:"+" "+result);


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// function convertToMeters(kilometers) {
//   return kilometers * 1000;
// }

// function convertToFeet(kilometers) {
//   return kilometers * 3280.84;
// }

// function convertToInches(kilometers) {
//   return kilometers * 39370.1;
// }

// function convertToCentimeters(kilometers) {
//   return kilometers * 100000;
// }

// function printDistanceConversions(kilometers) {
//   var meters = convertToMeters(kilometers);
//   var feet = convertToFeet(kilometers);
//   var inches = convertToInches(kilometers);
//   var centimeters = convertToCentimeters(kilometers);

//   console.log(`Distance in Meters: ${meters}`);
//   console.log(`Distance in Feet: ${feet}`);
//   console.log(`Distance in Inches: ${inches}`);
//   console.log(`Distance in Centimeters: ${centimeters}`);
// }
// var distanceInKilometers = 50;
// printDistanceConversions(distanceInKilometers);


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function calculateOvertimePay(hoursWorked) {
//   var regularHours = 40;
//   var overtimeRate = 12.00;
//   var overtimeHours = Math.max(hoursWorked - regularHours, 0);
//   var overtimePay = overtimeHours * overtimeRate;

//   document.write("<h2>"+"Overtime Pay: Rs. " + overtimePay.toFixed(2)+"</h2>");
// }
// var hoursWorked = 45;
// calculateOvertimePay(hoursWorked);

// 10.A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.

// function calculateCurrencyNotes(amountInHundreds) {
//   var denomination100 = Math.floor(amountInHundreds);
//   var denomination50 = Math.floor((amountInHundreds % 1) * 10) / 5;
//   var denomination10 = Math.floor((amountInHundreds % 1) * 10) % 5;

//   document.write("<h2>"+"Currency Notes to be given:<br>"+"<h2>");
//   document.write("<h2>"+"100s: " + denomination100 + "<br>"+"<h2>");
//   document.write("<h2>"+"50s: " + denomination50 + "<br>"+"<h2>");
//   document.write("<h2>"+"10s: " + denomination10);
// }
// var withdrawalAmount = 3.7;
// calculateCurrencyNotes(withdrawalAmount);


