// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var array2D = [[]];

// empty 3D array
// var array3D = [[[]]];

//  empty 4D array
// var array4D = [[[[]]]];


// 2. Declare and initialize a multidimensional array representing the following matrix:

// var arr = ['[10]','[20]'];
// var arr2 = ['[30]','[10]']
// document.write(arr + '<br>' + arr2)


// 3. Write a program to print numeric counting from 1 to 10.

// for( var i=1; i<=10; i++)
// console.log(i)

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var tableNumber = parseInt(prompt("Enter the table number:"));
// var tableLength = parseInt(prompt("Enter the table length:"));
// console.log("Multiplication Table of " + tableNumber + ":");
// for (var i = 1; i <= tableLength; i++) {
//   var result = tableNumber * i;
//   console.log(tableNumber + " x " + i + " = " + result);
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ['apple', 'banana', 'mango',' orange', 'strawberry']
// var len = fruits.length;	
// for (var i = 0; i < len; i++) {
// 	console.log(fruits[i]);
// }

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 


// document.write("<h2>"+"Counting from 1 to 15:"+"</h2>");
// for( var i =1; i <=15; i++  ){
// document.write("<h4>"+i+"</h4>")
// }

// document.write("<h2>"+"Reverse counting from 10 to 1:"+"</h2>");
// for (var i = 10; i >= 1; i--) {
//   document.write("<h4>"+i+"</h4>");
// }

// document.write("<h2>"+"Even Numbers from 0 to 20:"+"</h2>");
// for (var i = 0; i <= 20; i += 2) {
//   document.write("<h4>"+i+"</h4>");
// }

// document.write("<h2>"+"Odd numbers from 1 to 19:"+"</h2>");
// for (var i = 1; i <= 19; i += 2) {
//   document.write("<h4>"+i+"</h4>");
// }

// document.write("<h2>"+"Series from 2K to 20K:"+"</h2>");
// for (var i = 2; i <= 20; i += 2) {
//     var result = i + "k";
//     document.write("<h4>"+result+"</h4>");
//   }
  

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:

// var list = ['cake', 'apple pie', 'cookie, chips', 'patties']
// var userInput = prompt("Please enter the item name ; 'cake', 'apple pie', 'cookie, chips', 'patties'")
// document.write(userInput)

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var A = [24, 53, 78, 91, 12];
// var largestNumber = A[0];
// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largestNumber) {
//     largestNumber = A[i];
//   }
// }
// document.write("<h2>"+"The largest number in the array is: " + largestNumber+"</h2>");

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var numbers = [24, 53, 78, 91, 12];
// var result = numbers[0];
// for (let i=0; i < numbers.length; i++) {
//     if (numbers[i] < result) {
//         result = numbers[i];
//     }
// }
//  document.write("<h2>"+"The Smallest number in the array  is: " + result +"</h2>");

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// document.write( "<h2> "+ "Multiples of 5 ranging 1 to 100." +"</h2>")
// for (var i = 1; i <105; i++) {
//     if (i%5==0)
//  document.write('<br>' + i);
// }

  

