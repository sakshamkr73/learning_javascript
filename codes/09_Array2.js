const myarr = [1, 2, 3, 4, 5]
const myarr2 = ['a', 'b', 'c', 'd', 'e', 'f']

// myarr.push(myarr2)

console.log(myarr)
console.log(myarr2)
// console.log(myarr.concat(myarr2))

all_arr = [...myarr, ...myarr2]
console.log(all_arr);

const another_array = [1, 2, 3, 4, [5, 6, 7, 8], 4, [3, 4, 5, [5, 4, 4, 5]]]
console.log(another_array);

console.log(another_array.flat(Infinity));

console.log(Array.isArray("saksham"));
console.log(Array.isArray(1,2,3,3));
console.log(Array.isArray([1,2,3,3]));
console.log(Array.from("saksham"));
console.log(Array.from({name:"saksham"})); //important

let score1=100
let score2=300
let score3=400

console.log(Array.of(score1,score2,score3));