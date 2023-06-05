//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

//  var firstName = prompt("Enter your First name")
// var lastName = prompt("Enter your last name")
// var fullName = (firstName + " " + lastName)
// var greet = "Hello"
// alert(fullName + " " + greet)/

//2. Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser

// var favoriteModel = prompt("What is your favorite mobile phone model?");
// var inputLength = favoriteModel.length;
// document.write("<h2>"+ "Length of your input: " + inputLength +"</h2>" );


//3. write a program and find index letter “n” in the word
//“Pakistani” and display the result in your browser .

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("<h2>"+ "Word: " + word + "<br>"+"</h2>" );
// document.write("<h2>"+ "Index of 'n' is: " + index+"</h2>" );


//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");

// document.write("<h2>"+ "Word: " + word + "<br>"+"</h2>" );
// document.write("<h2>"+ "Last index of 'l': " + lastIndex+"</h2>" );


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser

// var word = "Pakistani";
// var character = word.charAt(3);

// document.write("<h2>"+"Word: " + word + "<br>"+"</h2>" );
// document.write("<h2>"+"Character at 3rd index is: " + character+"</h2>" );


// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your First name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName.concat(lastName);
// alert(fullName);


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var word = "Hyderabad";
// var modifiedWord = word.replace("Hyder", "Islam");
// document.write("<h2>"+"Original word: " + word + "<br>"+"</h2>");
// document.write("<h2>"+"Modified word: " + modifiedWord+"</h2>")

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var msg = ("Ali & Sami are best friends.They play cricket & football together.")
// document.write(msg)
// or may be...

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var modifiedMessage = message.replace(/and/g, "&");
// document.write("<h2>"+"Original message: " + message + "<br>"+"</h2>");
// document.write("<h2>"+"Modified message: " + modifiedMessage+"</h2>");


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var stringNumber = "472";
// var convertedNumber = Number(stringNumber);
// document.write("<h2>"+"Value: " + convertedNumber + "<br>"+"</h2>");
// document.write("<h2>"+"Type: " + typeof convertedNumber+"</h2>");



// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var userName = prompt("Enter You Name:");
// var firstLetter = userName.slice(0,1);
// var next = userName.slice(1);
// console.log(firstLetter.toUpperCase()+next.toLowerCase());

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// function convertToTitleCase(input) {
//   var words = input.toLowerCase().split(" ");
// var titleCaseWords = words.map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });

//  var titleCaseInput = titleCaseWords.join(" ");
//   return titleCaseInput;
// }
// var userInput = prompt("Enter a sentence or phrase:");
// var titleCaseInput = convertToTitleCase(userInput);
// alert("Title case input: " + titleCaseInput);

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

// var num = "35.36";
// num.pop(3);
// document.write("<h2>"+num+"</h2>")

// or may be if we use the .replace 

// var num = 35.36;
// var numString = num.toString().replace(".", "");
// document.write("<h2>"+numString+"</h2>")


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var username = prompt("Enter your username:");

// if (
//   username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!") ) {
//   alert("Please enter a valid username without any special symbols.");
// } else {
//   alert("Username accepted: " + username);
// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// function searchItem() {
// var userInput = prompt("Enter an item to search:").toLowerCase();
// var found = items.some((item) => item.toLowerCase() === userInput);
//   if (found) {
//     alert("Item found in the list!");
//   } else {
//     alert("Item not found in the list.");
//   }
// }
// searchItem();


// 15.Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII  table at the end of this document.

// var password = prompt("Enter a password:");
// var containsAlphabets = /[a-zA-Z]/.test(password);
// var containsNumbers = /\d/.test(password);
// var startsWithNumber = /^\d/.test(password);
// var isLongEnough = password.length >= 6;
// if (containsAlphabets && containsNumbers && !startsWithNumber && isLongEnough) {
//   alert("Valid password!");
// } else {
//   alert("Please enter a valid password that contains alphabets and numbers, is at least 6 characters long, and does not start with a number.");
// }


//16. Write a program to convert the following string to an 
//array using string split method.
//var university = “University of Karachi”;
//Display the elements of array in your browser

// var str = 'University of Karachi';
// var str_array = str.split('');
// for(var i = 0; i < str_array.length; i++) {
//    str_array[i] = str_array[i]
//  document.write("<br>"+str_array[i]);
// }

// 17. Write a program to display the last character of a user
// input.

// var userInput = prompt("Please enter a string:");
// if (userInput.length > 0) {
//   var lastCharacter = userInput.charAt(userInput.length - 1);
//   alert("The last character is: " + lastCharacter);
// } else {
//   alert("Invalid input. Please enter a string.");
// }


// 18. You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string.

// var sentence = "The quick brown fox jumps over the lazy dog";
// var wordToCount = "the";
// var lowercaseSentence = sentence.toLowerCase();
// var lowercaseWord = wordToCount.toLowerCase();
// var wordsArray = lowercaseSentence.split(" ");
// var count = 0;
// for (var i = 0; i < wordsArray.length; i++) {
//   if (wordsArray[i] === lowercaseWord) {
//     count++;
//   }
// }
// document.write("<h2>"+"Number of occurrences of the word 'the':" + count+"</h2>");
