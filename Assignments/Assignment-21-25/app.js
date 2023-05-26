//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your First name")
// var lastName = prompt("Enter your last name")
// var fullName = (firstName + " " + lastName)
// var greet = "Hello"
// alert(fullName + " " + greet)

//2. Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser

// var userInput = prompt ("Enter your favorite mobile model")
//  for(var i=0; i > length.userInput; i++)
//  console(userInput)

//3. write a program and find index letter “n” in the word
//“Pakistani” and display the result in your browser .

// var word = "Pakistani"


//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser



// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your First name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName.concat(lastName);
// alert(fullName);


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var word = ("Hyderabad")
// var replace 


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var msg = ("Ali & Sami are best friends.They play cricket & football together.")
// document.write(msg)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var number = 472;


// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var userName = prompt("Enter You Name:");
// var firstLetter = userName.slice(0,1);
// var next = userName.slice(1);
// console.log(firstLetter.toUpperCase()+next.toLowerCase());

// 11. Write a program that takes user input. Convert and
// show the input in title case.


// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

// var num = "35.36";
// num.pop(3);
// document.write(num)


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// 15.Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII  table at the end of this document.


var userInput = prompt("Enter your password")


// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var str = 'University of Karachi';
var str_array = str.split('');

for(var i = 0; i < str_array.length; i++) {
   str_array[i] = str_array[i]
 console.log(str_array[i]);
}

// 17. Write a program to display the last character of a user
// input.

// 18. You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string.
