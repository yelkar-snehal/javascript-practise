const name = {
  firstName: "James",
  lastName: "Bond",
};

const printName = function (hometown, state) {
  console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
};

printName.call(name, "Pune", "Maharashtra");

const name2 = {
  firstName: "Snehal",
  lastName: "Yelkar",
};

printName.call(name2, "Mumbai", "Maharashtra");
printName.apply(name, ["Pune", "Maharashtra"]);

const printName2 = printName.bind(name, "Pune", "Maharashtra");
printName2.call(name2);
