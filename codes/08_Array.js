let myarr = [0, 1, 2, 3, 4, 5]
console.log(typeof myarr);
console.log(myarr);
console.log(myarr[0]);

const myarr2=new Array(1,2,3,4,5,6)
console.log("\nA ",myarr2);

myarr2.push(6)
myarr2.push(7)

console.log("\nB ",myarr2);

myarr2.pop()
console.log("\nC ",myarr2);

myarr2.unshift(9)
// myarr2.unshift()
console.log("\nD ",myarr2);

myarr2.shift()
myarr2.shift()
console.log("\nE ",myarr2);
console.log(myarr2.includes(9));
console.log(myarr2.includes(2));
console.log(myarr2.indexOf(2));


let newArray=myarr2.join()
console.log(newArray);
console.log(typeof newArray);

//slice, splice
let arr1=myarr2.slice(1,3)
console.log(arr1);
console.log(myarr2);
let arr2=myarr2.splice(1,3)
console.log(arr2);
console.log(myarr2);