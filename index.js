const current_date = new Date();
const today_date = current_date.getDate();
const today_month = current_date.getMonth() + 1;
const today_year = current_date.getFullYear();

const padZero = (num) => (num < 10 ? "0" + num : num);

const minimum_date = `${today_year - 55}-${padZero(today_month)}-${padZero(
  today_date
)}`;
const maximum_date = `${today_year - 18}-${padZero(today_month)}-${padZero(
  today_date
)}`;

document.getElementById("dob").setAttribute("min", minimum_date);
document.getElementById("dob").setAttribute("max", maximum_date);

const formElement = document.getElementById("user-form");
const entriesKey = "user-entries";

const retrieveEntries = () => {
  const storedEntries = JSON.parse(localStorage.getItem(entriesKey)) || [];
  return storedEntries;
};

let userEntries = retrieveEntries();

const displayEntries = () => {
  const entries = retrieveEntries();
  const tableRows = entries
    .map((entry) => {
      const cells = Object.values(entry).map(
        (value) => `<td class='border border-green-700 px-4 py-2'>${value}</td>`
      );
      return `<tr>${cells.join("")}</tr>`;
    })
    .join("\n");

  const table = `<table class="table-auto w-full">
    <tr>
      <th class="px-4 py-2">Name</th>
      <th class="px-4 py-2">Email</th>
      <th class="px-4 py-2">Password</th>
      <th class="px-4 py-2">Dob</th>
      <th class="px-4 py-2">Accepted terms?</th>
    </tr>${tableRows}</table>`;

  document.getElementById("user-entries").innerHTML = table;
};

const saveUserForm = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndConditions =
    document.getElementById("acceptTerms").checked;

  if (password.length < 8) {
    document.getElementById("error").innerHTML =
      "Password should be at least 8 characters";
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").classList.add("visible");
    return;
  } else {
    if (document.getElementById("error").classList.contains("visible")) {
      document.getElementById("error").classList.remove("visible");
      document.getElementById("error").classList.add("hidden");
    }
    const entry = {
      name,
      email,
      password,
      dob,
      acceptedTermsAndConditions,
    };

    userEntries.push(entry);

    localStorage.setItem(entriesKey, JSON.stringify(userEntries));
    displayEntries();
  }
};

formElement.addEventListener("submit", saveUserForm);
displayEntries();
