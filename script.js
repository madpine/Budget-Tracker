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
