
// FormGet Online Form Builder JS Code
// Creating and Adding Dynamic Form Elements.
var i = 1; // Global Variable for Name
var j = 1; // Global Variable for E-mail
/*
=================
Creating Text Box for name field in the Form.
=================
*/
function textBoxCreate(){
	pomo = document.getElementById("myForm")
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("Placeholder", "alq" + i);
y.setAttribute("Name", "alq" + i);
pomo.appendChild(y);
i++;
}
/*
=================
Creating Text Box for email field in the Form.
=================
*/
function emailBoxCreate(){
var y = document.createElement("INPUT");
var t = document.createTextNode("Email");
y.appendChild(t);
y.setAttribute("Placeholder", "Email_" + j);
y.setAttribute("Name", "Email_" + j);
document.getElementById("myForm").appendChild(y);
j++;
}

for (ii = 0; ii < 24; ii++){
	textBoxCreate()
}