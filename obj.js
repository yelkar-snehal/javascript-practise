console.log("Started executing obj script");

function returnNthCat(n) {
  const state = {
    cats: [
      { catId: 1, name: "tom" },
      { catId: 2, name: "tiggy" },
      { catId: 3, name: "leo" },
      { catId: 4, name: "nixie" },
    ],
    curpage: 3,
  };

  //solution 1
  let {
    cats: {
      [n]: { name: thisCatName },
    },
  } = state;

  //solution 2
  //let { name: thisCatName } = state.cats[n];

  return thisCatName;
}

console.log(returnNthCat(2));
