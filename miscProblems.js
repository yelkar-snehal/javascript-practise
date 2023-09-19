console.log("Starting executing miscellaneous problems");

var a = [
  { id: 1, name: "John", zone_name: "Jhon" },
  { id: 1, name: "jim", zone_name: "jim" },
  { id: 1, name: "man", zone_name: "man" },
  { id: 1, name: "nam", zone_name: "nam" },
  { id: 1, name: "mar", zone_name: "mar" },
  { id: 1, name: "yo", zone_name: "yo" },
  { id: 1, name: "mi", zone_name: "mi" },
].filter(({ name, zone_name }) => {
  const temp = [
    { id: 1, name: "John", zone_name: "Jhon" },
    { id: 1, name: "jimy", zone_name: "jimy" },
    { id: 1, name: "mani", zone_name: "mani" },
    { id: 1, name: "namy", zone_name: "namy" },
    { id: 1, name: "maar", zone_name: "maar" },
    { id: 1, name: "yoo", zone_name: "yoo" },
    { id: 1, name: "mic", zone_name: "mic" },
  ].find((y) => y.name === name || y.zone_name === zone_name);
  return temp;
});

// console.log(a);

//  Diffrence logic : diffrence beween two array
var one = [
  { id: 1, name: "John", zone_name: "Jhon" },
  { id: 1, name: "jim", zone_name: "jim" },
  { id: 1, name: "man", zone_name: "man" },
  { id: 1, name: "nam", zone_name: "nam" },
  { id: 1, name: "mar", zone_name: "mar" },
  { id: 1, name: "yo", zone_name: "yo" },
  { id: 1, name: "mi", zone_name: "mi" },
];

var two = [
  { id: 1, name: "John", zone_name: "Jhon" },
  { id: 1, name: "jimy", zone_name: "jimy" },
  { id: 1, name: "mani", zone_name: "mani" },
  { id: 1, name: "namy", zone_name: "namy" },
  { id: 1, name: "maar", zone_name: "maar" },
  { id: 1, name: "yoo", zone_name: "yoo" },
  { id: 1, name: "mic", zone_name: "mic" },
];
var result = [];

for (let i = 0; i < one.length; i++) {
  for (let j = 0; j < two.length; j++) {
    if (two[j].name !== one[i].name || two[j].zone_name !== one[i].zone_name) {
      result.push(one[i]);
      break;
    }
    break;
  }
}
console.log("diff-", result);
