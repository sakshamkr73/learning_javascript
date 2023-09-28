// singleeton
// Object.create

// object literals

const mySym = Symbol("Sym");

const JsUser = {
    name: "Saksam Kumar",
    // mySym: "hello", wrong to denote symbol
    [mySym]: "hello",
    // "name": "Saksam Kumar",
    "full name": "Saksham Kumar Mahto",
    // full name: "Saksham Kumar Mahto",error
    age: 23,
    email: "saksham@gmail.com",
    isloggedin: false,
    lastLoggedDays: ["Monday", "Saturday"]
}

console.log(JsUser);
console.log(JsUser.email);
// console.log(JsUser[email]); error
console.log(JsUser["email"]);
// console.log(JsUser.full name); error
console.log(JsUser["full name"]); 
console.log(JsUser.mySym); //nothing will be print
console.log(JsUser[mySym]); 

JsUser.email="saksham27863@gmail.com"
console.log(JsUser.email);
// Object.freeze(JsUser)
// JsUser.email="harish@gmail.com"//nothing will be changed after freeze
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Good Morning");
}
JsUser.greeting_name=function(){
    console.log(`Good Morning, ${this.name}`);
}

console.log(JsUser);
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser);
console.log(JsUser.greeting_name);
console.log(JsUser.greeting_name());