// Write code to get an array of names from given array of users

const users = [
  {
    id: 1,
    name: "asmita",
    isActive: false,
  },
  {
    id: 2,
    name: "asmi",
    isActive: true,
  },
  {
    id: 3,
    name: "Kiran",
    isActive: false,
  },
  {
    id: 4,
    name: "Shubh",
    isActive: true,
  },
];
// !st way
// const names = [];
// for (let i = 0; i < users.length; i++) {
//   names.push(users[i].name);
//   console.log(names);
// }
// console.log("names", names);

// 2nd way
const names = [];
users.forEach((user) => {
  names.push(user.name);
});
console.log("name ", names);

// 3rd way

const namesUser = users.map((user) => user.name);
console.log("names", namesUser);

//4th way
const number = [1, 2, 3, 1, 5, 4, 3];
const userNames = new Set(number);
console.log("userName ", userNames);

const e1 = { fname: "asmi", lname: "chi" };
const e2 = { fname: "asmita", lname: "chiva" };

function invite(greet1, greet2) {
  console.log(greet1 + " " + this.fname + " " + this.lname + " " + greet2);
}
this.invite.call(e1, "hello", "how are you");
this.invite.call(e2, "hi", "How are you ?");

this.invite.apply(e1, ["hello ji", "how are you"]);
this.invite.apply(e2, ["hi ji", "How are you ?"]);

const invitE1 = this.invite.bind(e1);
const invitE2 = this.invite.bind(e2);
invitE1("hello", "how are you");
invitE2("hello", "how are you", "where are you");

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2);
let arrayIntegers2 = arrayIntegersOriginal2.splice(3);
console.log("splice method");
console.log(
  " arrayIntegers1 = ",
  arrayIntegers1 + "arrayIntegersOriginal1 =",
  arrayIntegersOriginal1
);
console.log(
  " arrayIntegers2 = ",
  arrayIntegers2 + "arrayIntegersOriginal2 =",
  arrayIntegersOriginal2
);
let arrayInteger1 = [1, 2, 3, 4, 5];
let arrayInteger2 = [1, 2, 3, 4, 5];
let arrayInt1 = arrayInteger1.slice(0, 2);
let arrayInt2 = arrayInteger2.slice(3);
console.log("Slice method");
console.log(
  " arrayIntegers1 = ",
  arrayInt1 + "arrayIntegersOriginal1 =",
  arrayInteger1
);
console.log(
  " arrayIntegers2 = ",
  arrayInt2 + "arrayIntegersOriginal2 =",
  arrayInteger2
);

let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
//Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);

//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numberArray); // returns [6]
console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log(numberArray); // returns [6]
