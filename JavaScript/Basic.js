//for making the constant data ,use
const acountid= 123456
//for define variable we use both var and let;
var num1= 13246
let num2= 4643
// Here let is used becoz of some limitation in var;
// We can also directly define the value of any string ,char, number(it doesnt show error)
city="Patna"

//to print use use
console.log(num1)
console.log("Himanshu")

//we can check the data types
console.log(typeof null); //object
console.log(typeof city); //string
/*or*/ console.log(typeof(city)); 

//*************** Conversion ***********
//we can also convert the one variable to another variable
let score = "hitesh"
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log( (3 + 4) * 5 % 3);
// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
//link to study  https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//***************** Comparision ***************
console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true

console.log(undefined == 0); // false(NaN)
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

//string
const name="Him"
const count=30
console.log('Hello my name is ${name} and my age after 10 year after is ${count}')
