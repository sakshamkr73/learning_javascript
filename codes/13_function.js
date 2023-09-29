function addTwonumbers(num1,num2)
{
    console.log(num1+num2);
    return num1+num2;
    console.log(num1+num2);
}

addTwonumbers(4,3)
console.log(addTwonumbers(3,5));
console.log(addTwonumbers());
console.log(addTwonumbers(3));
console.log(addTwonumbers(3,null));
console.log(addTwonumbers(null,3));
console.log(addTwonumbers(3,4,5));

function loginusername(username)
{
    return `${username} loggedIn`;
}

console.log(loginusername());
console.log(loginusername("bhkdfjsh"));
function loginusername(username)
{
    // if(username===undefined)
    if(!username)
    {
        console.log("please enter username");
        return
    }
    return `${username} loggedIn`;
}

console.log(loginusername());
console.log(loginusername("bhkdfjsh"));


function calculatePrice(num1)
{
    return num1;
}

console.log(calculatePrice(9));
console.log(calculatePrice(9,4,3));
function calculatePrice2(...num1)
{
    return num1;
}

console.log(calculatePrice2(9));
console.log(calculatePrice2(9,4,3));
console.log(calculatePrice2(9,4,3,'hks'));
function calculatePrice3(val1,val2,...num1)
{
    console.log(`val1:- ${val1} ans val2:- ${val2}`);
    return num1;
}

console.log(calculatePrice3(9,4,3));
console.log(calculatePrice3(9,4,3,'hks'));