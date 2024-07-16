let num = 20;
let Statement;

// IF Statement
if (num > 0) {
  console.log("Positive");
}

// IF Else Statement
num = -5;
if (num > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// Switch Case
const date = 1;
switch (date) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      default:
        day = "Invalid Date"
  }
  console.log(day);