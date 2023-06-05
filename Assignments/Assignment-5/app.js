// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var num1 = 8;
// var num2 = 10;
// var result = num1 + num2;
// document.write("The sum of 8 and 10 is:" +" "+result)

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

//  var num1 = 8;
//  var num2 = 10;
//   result = num1 - num2;
// document.write("Subtract = " + result + "<br>")


//   result = num1 * num2;
//  document.write("Multiply = " + result + "<br>")

//   result = num1 / num2;
//  document.write("Divide = " + result)

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// Declare a variable
// var myVariable;

// // Show the value of variable after declaration
// document.write("Value after variable declaration is: " + myVariable + "<br>");

// // Initialize the variable with a number
// myVariable = 5;

// Show the initial value of the variable
// document.write("Initial value: " + myVariable + "<br>");

// // Increment the variable
// myVariable++;

// // Show the value after increment
// document.write("Value after increment is: " + myVariable + "<br>");

// // Add 7 to the variable
// myVariable += 7;

// // Show the value after addition
// document.write("Value after addition is: " + myVariable + "<br>");

// // Decrement the variable
// myVariable--;

// // Show the value after decrement
// document.write("Value after decrement is: " + myVariable + "<br>");

// // Show the remainder after dividing the variable's value by 3
// var remainder = myVariable % 3;

// // Show the remainder
// document.write("The remainder is: " + remainder);


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// var number = 5
//     for (var  i = 1; i <= 10; i++) {

//        document.write(number + "x" + i + "=" + (number*i)+ "</br>")
//     }

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var inputCelsius  = 25;
// var outputFahrenheit = (inputCelsius * 9)/5 + 32;
// console.log(inputCelsius + '\u00B0 Celsious is ' + outputFahrenheit + '\u00B0 Fahrenheit');

// var inputFahrenheit  = 73;
// var outputCelsius = (inputFahrenheit - 32)/9 * 5;
// console.log(inputFahrenheit + '\u00B0 Fahrenheit is ' + outputCelsius + '\u00B0 Celsious');

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.


// var item1Price = prompt("Enter the price of item 1:");
// var item1Quantity = prompt("Enter the ordered quantity of item 1:");

// var item2Price = prompt("Enter the price of item 2:");
// var item2Quantity = prompt("Enter the ordered quantity of item 2:");
// var shippingCharges = prompt("Enter the shipping charges:");

// var subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity);
// var totalCost = subtotal + shippingCharges;

// document.write("<h2>Receipt</h2>");
// document.write("Item 1 Price: $" + item1Price.toFixed(2) + "<br>");
// document.write("Item 1 Quantity: " + item1Quantity + "<br>");
// document.write("Item 2 Price: $" + item2Price.toFixed(2) + "<br>");
// document.write("Item 2 Quantity: " + item2Quantity + "<br>");
// document.write("Shipping Charges: $" + shippingCharges.toFixed(2) + "<br>");
// document.write("Subtotal: $" + subtotal.toFixed(2) + "<br>");
// document.write("Total Cost: $" + totalCost.toFixed(2));


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// var totalMarks = prompt("Enter the total marks:");
// var marksObtained = prompt("Enter the marks obtained:");
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var usDollar10 = ((10 * 104.8) + (25 * 28));
// document.write("Total Currency of PKR is " + usDollar10)

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var num =  8;
// var result = (8)+(5)*(10)/(2);
// document.write("<h3>" +"The sum of 8+5×10/2 is :" + "  "+  result +"</h3>")

// 11. Calculate their 2 possible ages based on the stored
// values. Output them to the screen like so: “They are either NN or NN  years old”.

// var currentYear = "2023";
// var birthYear = "1999";
// var age = currentYear - birthYear ;
// document.write("<h3>"+'You are either ' + age + ' or ' + (age - 1) + ' ' + 'years old'+"</h3>")

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// var radius = prompt("Enter the radius of the circle:");

// var circumference = 2 * Math.PI * radius;

// var area = Math.PI * Math.pow(radius, 2);

// document.write("<h2>"+"The circumference is " + circumference.toFixed(2)+"</h2>");
// document.write("<h2>"+ "The area is " + area.toFixed(2)+"</h2>");



// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


// document.write("<h1>"+"The Lifetime Supply Calculator "+ "</h1>")
// var snack = ("chilli milli")
// document.write("<h4>"+"Favourit Snack:" + snack +"</h4>")
// var currentAge = ("19")
// document.write("<h4>"+"Current Age:"+ currentAge +"</h4>")
// var maximumAge = ("60")
// document.write("<h4>"+"Estimated maximim age:"+ maximumAge +"</h4>")
// var EA = ("7")
// document.write("<h4>"+"Amount of snake per day:"+ EA +"</h4>")

// document.write("<h3>"+"You will need "+(maximumAge-currentAge)*EA+" " + snack + " " +"to last you until the rip old age of" +" " +maximumAge+"</h3>")