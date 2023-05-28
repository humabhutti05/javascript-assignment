// 1. Create a signup form and display form data in your web  page on submission.

// function myData(e) {
//     e.preventDefault();
//     var username = document.getElementById('username').value;
//     var email = document.getElementById('email').value;
//     var domain = document.getElementById('domain').value;

//     var useremail = email + domain
//    document.write("Username =" + " " + username +"<br>","Useremail ="+ " " + useremail)
// }

// 2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read more” button, full detail of that particular item will be 
// displayed. 

// function readMore(){
//    document.getElementById("mypara").innerHTML="Web Development:Among Web professionals, Web development usually refers to the main non-design aspects of building Web sites: writing markup and coding. Web development may use content management systems (CMS) to make content changes easier and available with basic technical skills."
// }

// 3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will 
// appear with the values of that row.


function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}


function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

