/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
  details = [a, b, c];
  for (let i = 0; i < details.length; i++) {
    typeof details[i] == "string"
      ? (user = details[i])
      : typeof details[i] == "number"
      ? (age = details[i])
      : (hire = details[i]);
  }
  hire == true ? (hire = "Availabel") : (hire = "Not Available");
  document.write(
    `<p>Hello ${user}, Your age is ${age},You Are ${hire} For Hire</p>`
  );
}
showDetails("Osama", 38, true); // Hello Osama, Your age is 38,You Are Availabel For Hire
showDetails(26, "Khaled", true); // Hello Khaled, Your age is 26,You Are Availabel For Hire
showDetails(true, 25, "Omar"); // Hello Omar, Your age is 25,You Are Availabel For Hire
showDetails(false, "Moaz", 19); // Hello Moaz, Your age is 19,You Are Not Available For Hire
