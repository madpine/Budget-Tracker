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

// Display spending submission details
function transactionDetails(event) {
  event.preventDefault();
  document.querySelector("#date-stamp").innerHTML = `${dateStamp(
    event.timeStamp * 1000
  )}`;
  document.querySelector("#amount-spent").innerHTML = `₪${event.value}`;
  document.querySelector("#category-spent").innerHTML = event.value;

  console.log(event);
}

let amountForm = document.querySelector("#spending-form");
amountForm.addEventListener("submit", transactionDetails);
