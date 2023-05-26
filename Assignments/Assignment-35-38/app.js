// // 1. Write a function that displays current date & time in your browser.

// var date = new Date();
// document.write(date);

// // 2. Write a function that takes first & last name and then it
// // greets the user using his full name.

// function welcometheuser()
// {
// var firstName = "Huma"
// var lastName = "M.Yousaf"
// var greet = "Hello" 

// var result = (firstName+ " " + lastName+ " "+greet)
// document.write(result)
// }

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// var num1 = 5;
// var num2 = 3;

// // add two numbers
// var sum = num1 + num2;

// // display the sum
// document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// 5. Write a function that squares its argument.


// 6. Write a function that computes factorial of a number.



// 7. Write a function that take start and end number as inputs & display counting in your browser.


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquavar

// var base = 8;
// var perpendicular = 6;
// var findHypotenuse = (base, perpendicular) => {
//    var bSquare = base ** 2;
//    var pSquare = perpendicular ** 2;
//    var sum = bSquare + pSquare;
//    var hypotenuse = Math.sqrt(sum);
//    return hypotenuse;
// };
// document.write(findHypotenuse(base, perpendicular));
// document.write(findHypotenuse(34, 56));

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


   

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// function isPalindrome(str) {
//    var len = str.length;
//    for (let i = 0; i < len / 2; i++) {
//      if (str[i] !== str[len - 1 - i]) {
//        return false;
//      }
//    }
//    return true;
//  }
//  var str1 = 'madam';

//  document.write(isPalindrome(str1)); 

 

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
//  document.write(result); 

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function find_longest_word(str)
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
// document.write(find_longest_word('Web Development Tutorial'));

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

// document.write(char_count('JSResourceS.com', 'o'));

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
//  document.write("The circumfrence is " + y + "." + "<br>");
//  }
//  function calcArea(radius) {
//    var x = (Math.PI * radius) * radius;
//  document.write("The area is " + x + ".");
//  }
 
//  calcCircumfrence(30);
//  calcArea(10);



