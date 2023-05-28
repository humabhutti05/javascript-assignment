// 1. Write a program that displays current date and time in your browser.

// var current = new Date();
// var days = ['sun', 'mon','tues', 'wed']
// document.write(current)

// 2. Write a program that alerts the current month in words.For example December.

// var monthname = function(date){
//     list = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       return list[date.getMonth()];
//     };
//     alert(monthname(new Date("05/27/2023")));


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

// var currentDay = new Date();
// var currentDay = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
// var b = currentDay.getDay();
// var c = b.slice(0,3);
// document.write("Today is " + c);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var msg1 = 1-15;
// var msg2 = 16-30/31;
// if('msg2'>'msg1'){
//     alert("First fifteen days of the month")
// }

//  if('msg1'>'msg2'){

//         alert("First fifteen days of the month")     
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = function(y,m){
//     return  new Date(y, m +1, 0).getDay();
//     }
//     console.log("the last day of the last month of 2020 is:" + laterDate(2020,12));


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// function daysPassed(dt) {
//     var current = new Date(dt.getTime());
//     var previous = new Date(dt.getFullYear());
  
//     return Math.ceil((current - previous + 1) / 86400000);
//   }
//   document.write("The number of days past since 1st Ramadan is:"+" " + daysPassed(new Date(2015, 4, 18)) + " " +"days");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.



// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var userInput = prompt("Your age")
// var DOB = new Date();

// DOB.setFullYear(userInput)
// DOB.getMonth(userInput)
// DOB.setDate(userInput)
// document.write(DOB)
// var myAge = current-DOB
// document.write(myAge/(1000*60*60*24*365.25))


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

// document.write("<h2>K-Electric Bill" + "<br>" + "</h2>")

// var customerName = " ABC Customer"
// var currentMonth = "May"
// var unitsNumber = 410;
// var chargesPerUnits = 16;
// var NetAmountPayable =3566;
// var LatePaymentSurcharge = 350;
// var GrossAmountPayable = 6910;
// document.write("Customer Name:"+ customerName + "<br>"+ "Month:"+" " +currentMonth + "<br>" +"Units Number:" + " " +unitsNumber + "<br>"+"Charges pr units:"+chargesPerUnits 
// +"<br>"+ "<br>"+ "NetAmountPayable:"+" " +NetAmountPayable +  "<br>"+ "LatePaymentSurcharge:"+" " +LatePaymentSurcharge + "<br>"+ "GrossAmountPayable:"+" " +GrossAmountPayable + "<br>") 


// var nAP = 410*16;
// var gAP = 3566+350;
// document.write("<br>"+"Net Amount Payable (within Due Date)" + " " +" =" +" "+ nAP +"<br>")
// document.write("Gross Amount Payable (after Due Date)" + " " +" =" +" "+ gAP + "<br>")