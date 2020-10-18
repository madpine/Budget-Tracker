// Display current month
function currentMonth() {
  let time = new Date();

  let months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  let thisMonth = months[time.getMonth()];

  return `${thisMonth}`;
}

let displayMonth = document.querySelector("#month");
displayMonth.innerHTML = `<strong>${currentMonth()}</strong>`;

// Return date stamp
function dateStamp() {
  let time = new Date();

  let month = time.getMonth();
  let date = time.getDate();

  return `${month + 1}/${date}`;
}

let itemDate = null;
let itemAmount = null;
let itemCategory = null;

// Display spending submission details
function transactionDetails(event) {
  event.preventDefault();
  itemDate = `${dateStamp(event.timeStamp * 1000)}`;

  itemAmount = `₪${event.target[0].value}`;

  // Return checked radio button
  function category() {
    if (event.target[1].checked) {
      return event.target[1].form[1].offsetParent.innerText;
    } else if (event.target[2].checked) {
      return event.target[2].form[2].offsetParent.innerText;
    } else if (event.target[3].checked) {
      return event.target[3].form[3].offsetParent.innerText;
    } else if (event.target[4].checked) {
      return event.target[4].form[4].offsetParent.innerText;
    } else if (event.target[5].checked) {
      return event.target[5].form[5].offsetParent.innerText;
    } else if (event.target[6].checked) {
      return event.target[6].form[6].offsetParent.innerText;
    } else if (event.target[7].checked) {
      return event.target[7].form[7].offsetParent.innerText;
    } else if (event.target[8].checked) {
      return event.target[8].form[8].offsetParent.innerText;
    } else {
      return `N/A`;
    }
  }
  itemCategory = category();

  listItem();
}

// Add item to list
function listItem() {
  let node = document.createElement("li");
  let textnode = document.createTextNode("testing");
  node.appendChild(textnode);
  document.getElementById("list-items").appendChild(node);
}

let amountForm = document.querySelector("#spending-form");
amountForm.addEventListener("submit", transactionDetails);
