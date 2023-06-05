// 1. Write a program that displays current date and time in your browser.

// var current = new Date();
// document.write("<h2>"+current+"</h2>")

// 2. Write a program that alerts the current month in words.For example December.

// var monthname = function(date){
//     list = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       return list[date.getMonth()];
//     };
//     alert(monthname(new Date("05/27/2023")));


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

// var currentDate = new Date();
// var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = daysOfWeek[currentDate.getDay()];
// alert("Today is:"+" " + currentDay);


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var currentDate = new Date();
// var currentDay = currentDate.getDay();

// if (currentDay === 0 || currentDay === 6) {
//   alert("It's Fun day");
// } else {
//   alert("It's not Fun day");
// }


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var currentDate = new Date();
// var currentDay = currentDate.getDate();

// if (currentDay < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }



// 6. Write a program that determines the minutes since 
//midnight, Jan. 1, 1970 and assigns it to a variable that 
//hasn't been declared beforehand. Use any variable you like 
//to represent the Date object.

// var currentDate = new Date();
// var minutesSinceEpoch = Math.floor(currentDate.getTime() / (1000 * 60));
// var myVariable = minutesSinceEpoch;
// document.write("<h2>"+"Current Date: " + currentDate+"</h2>");
// document.write("<h2>"+"Elapsed Minutes since  Jan. 1, 1970: " + myVariable+"</h2>");


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var currentTime = new Date();
// var currentHour = currentTime.getHours();
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date(2020, 11, 31);
// document.write("<h2>"+laterDate+"</h2>");


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// function daysPassed(dt) {
//     var current = new Date(dt.getTime());
//     var previous = new Date(dt.getFullYear());
  
//     return Math.ceil((current - previous + 1) / 86400000);
//   }
//   document.write("<h2>"+"The number of days past since 1st Ramadan is:"+" " + daysPassed(new Date(2015, 4, 18)) + " " +"days"+"</h2>");

// another answer

// var startingDate = new Date("June 18, 2015");
// var currentDate = new Date();

// var timeDifference = currentDate.getTime() - startingDate.getTime(); 
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Number of days passed since 1st Ramadan: " + daysPassed);


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var referenceDate = new Date();  // Get the current date and time
// var beginningOf2015 = new Date("January 1, 2015 00:00:00");  // Create a Date object for the beginning of 2015
// var elapsedSeconds = Math.floor((beginningOf2015 - referenceDate) / 1000);  // Calculate the elapsed seconds
// document.write("<h2>"+"Seconds elapsed since the beginning of 2015: " + elapsedSeconds+"</h2>");

// 11. Create a Date object for the current date and time. 
//Extract the hours, reset the date object an hour ahead and 
//finally display the date object in your browser.

// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);  
// document.write("<h2>"+"Current Date is: " + currentDate+"</h2>");
// document.write("<h2>"+"1 hour ago, it was: " + currentDate+"</h2>");



// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();  
// var newDate = new Date();  
// newDate.setFullYear(currentDate.getFullYear() - 100); 
// alert("Date 100 years back: " + newDate.toDateString());


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


// var age = prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("<h2>"+"Your birth year is: " + birthYear+"</h2>");



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

document.write("<h2>K-Electric Bill" + "<br>" + "</h2>")
var customerName = " ABC Customer"
var currentMonth = "May"
var unitsNumber = 410;
var chargesPerUnits = 16;
var NetAmountPayable =3566;
var LatePaymentSurcharge = 350;
var GrossAmountPayable = 6910;
document.write("Customer Name:"+ customerName + "<br>"+ "Month:"+" " +currentMonth + "<br>" +"Units Number:" + " " +unitsNumber + "<br>"+"Charges pr units:"+chargesPerUnits 
+"<br>"+ "<br>"+ "NetAmountPayable:"+" " +NetAmountPayable +  "<br>"+ "LatePaymentSurcharge:"+" " +LatePaymentSurcharge + "<br>"+ "GrossAmountPayable:"+" " +GrossAmountPayable + "<br>") 
var nAP = 410*16;
var gAP = 3566+350;
document.write("<br>"+"Net Amount Payable (within Due Date)" + " " +" =" +" "+ nAP +"<br>")
document.write("Gross Amount Payable (after Due Date)" + " " +" =" +" "+ gAP + "<br>")