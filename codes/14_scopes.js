let a=10
const b=22
var c=39

if(true){
    let a=23
    const b=34//error
    var c=90
    console.log("inner:",a);
    console.log("inner:",b);
    console.log("inner:",c);
}

console.log(a);
console.log(b);
console.log(c);//c will changed