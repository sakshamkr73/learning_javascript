// Primitive

// 7 types:
// i. String
// ii. Number
// iii. Boolean
// iv. null
// v. undefined
// vi. Symbol
// vii. BigInt

const score = 100
const scorefloat = 100.4

console.log(typeof score);
console.log(typeof scorefloat);

const id = Symbol('27')
const people = Symbol('27')

console.log(id == people);
console.log(typeof id);

const Bigint = 794372473927492874564646456498n
console.log(Bigint);
console.log(typeof Bigint);


// Non - Primitive
// Array , Object, Function

const heros=["saksham","mohit","lucky"]
console.log(heros);
console.log(typeof heros);

let myObj={
    name: "saksham",
    age: 18
}
console.log(myObj);
console.log(typeof myObj);

const myFunction= function(){
    console.log("My name is lucky");
}
console.log(myFunction);
myFunction()
console.log(myFunction());
console.log(typeof myFunction);

