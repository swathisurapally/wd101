document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var terms = document.getElementById("terms").checked;
    
    if (!validateEmail(email)) {
      alert("Invalid email address!");
      return;
    }
    
    var age = calculateAge(dob);
    if (age < 18 || age > 55) {
      alert("Age must be between 18 and 55!");
      return;
    }
    
    if (!terms) {
      alert("Please accept the terms and conditions!");
      return;
    }
    
    addUserToTable(name, email, password, dob, terms);
    saveDataToLocalStorage(name, email, password, dob, terms);
    clearForm();
  });
  
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function calculateAge(dob) {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }
  
  function addUserToTable(name, email, password, dob, terms) {
    var table = document.getElementById("userTable");
    var row = table.insertRow(-1);
    
    var nameCell = row.insertCell(0);
    nameCell.innerHTML = name;
    
    var emailCell = row.insertCell(1);
    emailCell.innerHTML = email;
    
    var passwordCell = row.insertCell(2);
    passwordCell.innerHTML = password;
    
    var dobCell = row.insertCell(3);
    dobCell.innerHTML = dob;
    
    var termsCell = row.insertCell(4);
    termsCell.innerHTML = terms ? "Yes" : "No";
  }
