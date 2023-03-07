let chosen = 4;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [obj1, obj2, obj3] = myFriends;

if (chosen === 1) {
  const {
    title: a,
    age: b,
    available: c,
    skills: [, d],
  } = obj1;
  console.log(`Title is ${a}`);
  console.log(`Age is ${b}`);
  console.log(c ? "Available" : "Not Available");
  console.log(`last skills is ${d}`);
} else if (chosen === 2) {
  const {
    title: a,
    age: b,
    available: c,
    skills: [, d],
  } = obj2;
  console.log(`Title is ${a}`);
  console.log(`Age is ${b}`);
  console.log(c ? "Available" : "Not Available");
  console.log(`last skills is ${d}`);
} else if (chosen === 3) {
  const {
    title: a,
    age: b,
    available: c,
    skills: [, d],
  } = obj3;
  console.log(`Title is ${a}`);
  console.log(`Age is ${b}`);
  console.log(c ? "Available" : "Not Available");
  console.log(`last skills is ${d}`);
} else {
  console.log("Chosen Number is false");
}
