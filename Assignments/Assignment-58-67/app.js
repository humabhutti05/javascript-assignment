// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.

// var mainContent = document.getElementById("main-content")
// console.log(mainContent);

// ii. Display all child elements of “main-content” element.


// var mainContent = document.getElementById("main-content")
// var childElements = mainContent.childNodes;
// console.log(childElements);


// iii. Get all elements of class “render” and show their innerHTML in browser.

// var renderElements = document.getElementsByClassName("render");
// for (var i = 0; i < renderElements.length; i++) {
//   console.log(renderElements[i].innerHTML);
// }



// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// var firstNameInput = document.getElementById("first-name").value = "Alex";
// var lastNameInput = document.getElementById("last-name").value = "Bank";
// var emailInput = document.getElementById("email").value = "alexbank@example.com";
// console.log(firstNameInputNameInput.value);
// console.log(lastNameInput.value);
// console.log(emailInput.value);


// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.

var formContentElement = document.getElementById("form-content");
var formContentNodeType = formContentElement.nodeType;
console.log("Node type of form-content element: " + formContentNodeType);


// console.log("The node type of the element with the id" + "form-content" + "is a <div> element".)

// ii. Show node type of element having id “lastName” and its child node.

// var lastNameElement = document.getElementById("lastName");
// var lastNameNodeType = lastNameElement.nodeType;
// var childNode = lastNameElement.firstChild;
// console.log("Node type of lastName element: " + lastNameNodeType);
// console.log("Child node of lastName element: ", childNode);


// iii. Update child node of element having id “lastName”.

// var lastNameElement = document.getElementById("lastName");
// lastNameElement.firstChild.nodeValue = "New Last Name: Updated";
// console.log(lastNameElement.firstChild.nodeValue)

// iv. Get First and last child of id “main-content”.

// var mainContentElement = document.getElementById("main-content");
// var firstChild = mainContentElement.firstChild;
// var lastChild = mainContentElement.lastChild;
// console.log(mainContentElement, firstChild, lastChild)

// v. Get next and previous siblings of id “lastName”.

// var lastNameElement = document.getElementById("lastName");
// var nextSibling = lastNameElement.nextSibling;
// var previousSibling = lastNameElement.previousSibling;
// console.log(lastNameElement, nextSibling, previousSibling)

// vi. Get parent node and node type of element having id “email”

// var emailElement = document.getElementById("email");
// var parentNode = emailElement.parentNode;
// var nodeType = emailElement.nodeType; 
// console.log(emailElement, parentNode, nodeType)

