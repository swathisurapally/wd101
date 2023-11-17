document.getElementById('registrationForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var terms = document.getElementById('terms').checked;

	document.getElementById("fg").innerHTML+=`<tr><td style="border:1px solid black ; border-collapse:collapse">${name}</td><td style="border:1px solid black ; border-collapse:collapse">${email}</td><td style="border:1px solid black ; border-collapse:collapse">${password}</td><td style="border:1px solid black ; border-collapse:collapse">${dob}</td><td style="border:1px solid black ; border-collapse:collapse">${terms ? 'Yes' : 'No'}</td></tr>`
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('terms').checked = false;
});
