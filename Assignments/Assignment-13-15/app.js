// 1. Declare an empty array using JS literal notation to store student names in future.

// var studentNames = [];

 // 2. Declare an empty array using JS object notation to store student names in future.

//  var studentNames = [];

// 3. Declare and initialize a strings array.

// var fruits = ['Apple', 'Banana', 'Orange'];
// alert(fruits)

 // 4. Declare and initialize a numbers array.

// var numbers = [1, 2, 3, 4, 5];
// alert(numbers)

// 5. Declare and initialize a boolean array.

// var my_array = ['True', 'False', 'True', 'True', 'False']
// alert(my_array)


// 6. Declare and initialize a mixed array.

// var mixed_array = [1, "two", 3.0, 'True']
// alert(mixed_array)

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// var qualifications  = ["<h2>"+'SSC'+"<br>" , 'HSC' +"<br>", 'BCS' +"<br>", 'BS' +"<br>", 'BCOM' +"<br>", 'MS' +"<br>",  'PhD' +"<br>", 'M.Phil.'+"</h2>"]
//  document.write(qualifications[0])
//  document.write(qualifications[1])
//  document.write(qualifications[2])
//  document.write(qualifications[3])
//  document.write(qualifications[4])
//  document.write(qualifications[5])
//  document.write(qualifications[6])
//  document.write(qualifications[7])

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var studentNames = ['Huma', 'Laiba', 'Yashfa'];
// var scores = [430, 380, 450];
// var percentages = [];
// for (var i = 0; i < scores.length; i++) {
//   var percentage = (scores[i] / 500) * 100;
//   percentages.push(percentage);
// }
// for (var i = 0; i < studentNames.length; i++) {
//   document.write("<h2>"+"Student: " + studentNames[i]+"</h2>");
//   document.write("<h2>"+"Score: " + scores[i]+"</h2>");
//   document.write("<h2>"+"Percentage: " + percentages[i] + "%"+"</h2>");
// }


// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["Red", "Green", "Blue"];
// document.write("<h2>"+ "Initial array: " + colors + "<br>"+"</h2>");
// var colorToAddAtBeginning = prompt("Enter a color to add at the beginning:");
// colors.unshift(colorToAddAtBeginning);
// document.write("Array after adding color at the beginning: " + colors + "<br>");
// var colorToAddAtEnd = prompt("Enter a color to add at the end:");
// colors.push(colorToAddAtEnd);
// document.write("Array after adding color at the end: " + colors + "<br>");
// colors.unshift("Yellow", "Orange");
// document.write("Array after adding two colors at the beginning: " + colors + "<br>");
// colors.shift();
// document.write("Array after deleting the first color: " + colors + "<br>");
// colors.pop();
// document.write("Array after deleting the last color: " + colors + "<br>");
// var indexToAdd = prompt("Enter the index where you want to add a color:");
// var colorToAdd = prompt("Enter the color to add at index " + indexToAdd + ":");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("Array after adding color at index " + indexToAdd + ": " + colors + "<br>");
// var indexToDelete = prompt("Enter the index from where you want to delete color(s):");
// var numOfColorsToDelete = prompt("Enter the number of colors to delete:");
// colors.splice(indexToDelete, numOfColorsToDelete);
// document.write("Array after deleting color(s) from index " + indexToDelete + ": " + colors + "<br>");



// 10. Write a program to store student scores in an array & 
//sort the array in ascending order using Array’s sort 
//method.

// var studentScores = [75, 80, 90, 65, 85];
// studentScores.sort();
// console.log("Sorted student scores:", studentScores);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["Karachi", "Hyderabad", "Kashmir", "Islamabad"];
// var selectedCities = [];
// selectedCities = cities.slice(0, 3);
// console.log(selectedCities);


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", "is", "my", "cat"];
// var result = arr.join(" ");
// console.log(result);


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// var fifoArray = [];
// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");
// var firstValue = fifoArray.shift();
// var secondValue = fifoArray.shift();
// var thirdValue = fifoArray.shift();
// console.log("First value:", firstValue);
// console.log("Second value:", secondValue);
// console.log("Third value:", thirdValue);



// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)


// var lifoArray = [];
// lifoArray.push("Value 1");
// lifoArray.push("Value 2");
// lifoArray.push("Value 3");
// var lastValue = lifoArray.pop();
// var secondLastValue = lifoArray.pop();
// var thirdLastValue = lifoArray.pop();
// console.log("Last value:", lastValue);
// console.log("Second last value:", secondLastValue);
// console.log("Third last value:", thirdLastValue);


// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your browser using document.write() method:

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select>');
for (var i = 0; i < manufacturers.length; i++) {
  document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}
document.write('</select>');
