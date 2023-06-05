// 1. Create a signup form and display form data in your web  page on submission.

// function myData(e) {
//     e.preventDefault();
//     var username = document.getElementById('username').value;
//     var email = document.getElementById('email').value;
//     var domain = document.getElementById('domain').value;

//     var useremail = email + domain
//    document.write("<h2>"+"Username =" + " " + username +"<br>","Useremail ="+ " " + useremail+"</h2>")
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

var students = [];

function addStudent() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var grade = document.getElementById('grade').value;

  var student = { name: name, age: age, grade: grade };
  students.push(student);

  displayStudents();
  clearForm();
}

function displayStudents() {
  var table = document.getElementById('studentTable');

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  for (var i = 0; i < students.length; i++) {
    var student = students[i];

    var row = table.insertRow(i + 1);
    var nameCell = row.insertCell(0);
    var ageCell = row.insertCell(1);
    var gradeCell = row.insertCell(2);
    var actionsCell = row.insertCell(3);

    nameCell.innerHTML = student.name;
    ageCell.innerHTML = student.age;
    gradeCell.innerHTML = student.grade;
    actionsCell.innerHTML = '<button onclick="editStudent(' + i + ')">Edit</button> <button onclick="deleteStudent(' + i + ')">Delete</button>';
  }
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function editStudent(index) {
  var student = students[index];
  document.getElementById('editRowId').value = index;
  document.getElementById('editName').value = student.name;
  document.getElementById('editAge').value = student.age;
  document.getElementById('editGrade').value = student.grade;

  showEditForm();
}

function saveEditedStudent() {
  var index = document.getElementById('editRowId').value;
  var student = students[index];

  student.name = document.getElementById('editName').value;
  student.age = document.getElementById('editAge').value;
  student.grade = document.getElementById('editGrade').value;

  hideEditForm();
  displayStudents();
}

function cancelEdit() {
  hideEditForm();
}

function showEditForm() {
  document.getElementById('editForm').style.display = 'block';
}

function hideEditForm() {
  document.getElementById('editForm').style.display = 'none';
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('grade').value = '';
}