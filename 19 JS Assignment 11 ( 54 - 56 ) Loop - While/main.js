let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany", "Khaled"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (typeof friends[index] != "number" && friends[index][0] != "A") {
    console.log(`${++counter} => ${friends[index]}`);
  }
  index++; // لو محطتهوش هنا هتخش في تكرار لا نهائي
}

// ================================================
console.log("===> حل آخر");
index = 0;
counter = 0;

while (friends.sort().reverse()[index][0] !== "A") {
  console.log(`${++counter} => ${friends[index]}`);
  index++;
}

/* Output
1 => Sayed
2 => Mahmoud
3 => Khaled
*/
