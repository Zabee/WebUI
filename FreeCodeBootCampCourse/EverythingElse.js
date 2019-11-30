// "use strict"
// function checkSign(number){
//     "use strict"
//     return number > 0 ? "positive" : number == 0 ? "zero" : "negative";
// }

// function justAnother(){
//     let global = 10;
//     console.log("global : " + global);
//     {
//         let global = 20;
//         console.log("local : " + global);
//     }
//     console.log("global : " + global);
// }

// console.log(justAnother());
// console.log(checkSign(-1));
// console.log(checkSign(0));
// console.log(checkSign(998));

// var number = 10;
// var number = 11;
// console.log(number);

// let numberR = 12;
// console.log(numberR);

// const numberC = 100;

// //This is similar to final objects in Java
// const intArray = [1, 2, 3, 4, 5];
// //But if really want to make internal values freeze this below is the code.
// //This is similar to Collections.unmodifiableList(list)
// Object.freeze(intArray);

// const PIE = {
//     pie : 3.142
// };
// Object.freeze(PIE);
// function updateArray(){
//     // intArray   = [6, 7, 8, 9, 10];
//     try{
//         intArray[0] = 11;
//         intArray[1] = 12;
//         intArray[2] = 13;
//         intArray[3] = 14;
//         intArray[4] = 15;
//         PIE.pie = 3.3333;
//     }catch(ex){
//         console.log(ex);
//     }
// }
// updateArray();
// console.log(intArray);
// console.log(PIE.pie);


//Ananymous function
// let magic = function () {
//     return "It's magic";
// }

// const anotherMagic = () => "It's another magic";

// console.log(magic());
// console.log(anotherMagic());


// const addTwoNumbers = (num1, num2) => num1 + num2;
// console.log(addTwoNumbers(10, 20));

// const concatTwoArrays = (array1, array2) => array1.concat(array2);
// let concatinatedArrays = concatTwoArrays([1, 2, 3, 4],[5, 6, 7, 8]);
// console.log(concatinatedArrays);

//Higher order function
// const relaNumbers = [1, 2, 3, 4.3, 5.5, 6.3, 7.9, 8.1, -0.99];

// const squareList = (array) => {
//     const squaredList = array.filter(number => Number.isInteger(number) && number > 0)//
//                                 .map(integerNum => integerNum * integerNum);                                
//     return squaredList;
// };

// console.log(squareList(relaNumbers));

// const increment = () => (num1, increment =1) => num1+increment; 

// console.log(increment(10, 2));
// console.log(increment(10));

// const reduceFn = (x, y, z) => {
//     const array = [x, y, z];
//     const result = array.reduce((x, i) => x + i, 0);
//     return result;
// };
// const redinedSum = ( function () {
//     return function redinedSum(...args){
//             const result = args.reduce((x, y) => x+y, 0);
//             return result;
//             };
//         }
//     )
// ();

// console.log("Reducing: " + reduceFn(10, 20, 30));
// console.log("Redefined Sum : " + redinedSum(10, 20 , 30));


// //Spread operator. Copy array by value
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let anotherArray = [...array];
// anotherArray[0] = 10;
// console.log("Array: " + array);
// console.log("Another Array: " +anotherArray);


// //Destructuring
// const anotherLocation = {
//     logitude: 10,
//     latitude : 10
// };

// let {logitude : tempLogitude} = anotherLocation;
// tempLogitude++;
// console.log(anotherLocation.logitude);
// console.log(tempLogitude);


// let a =10, b=20;
// console.log("Before swapping: " + a + " and "+ b);
// [a, b] = [b, a];
// console.log("After swapping: " + a + " and "+ b);

// const [x,, y, ...z] = [1, 2, 3, 4, 5, 6];
// console.log(x);
// console.log(y);
// console.log(z);


// const stats = {
//     max : 2,
//     min : 2,
//     avg : 20,
//     sum : 200
// };

// const half = (function() {
//     return function half({min, max}){
//         return (min + max) /2.0;
//     };
// })();

// console.log("Halfed: " + half(stats));
// const person = {
//     name : "Zabee",
//     age: 30
// };

// const greeting = `Hello, my name is ${person.name}
// I am ${person.age} years old`

// console.log(greeting);

// const result = {
//     success: ["max-len", "no-amd", "prefer-arrow-fn"],
//     failure: ["no-var", "var-on-top", "linebreaker"],
//     skipped: ["id-blacklist", "no-dup-keys"]
// };

// function makeList({failure}){
//     // let result = "";
//     const result = [];
//     for(let i=0; i<failure.length; i++){
//     //    result+=`<li class="test-warning">${failure[i]}</li>\n`;
//         result.push(`<li class="test-warning">${failure[i]}</li>`);
//     }
//      return result;
// }

// console.log(makeList(result));


// // const createPerson = (name, age, gender) => {
// //     return {
// //         name : name,
// //         age : age,
// //         gender : gender
// //     };
// // };

// const createPerson = (name, age, gender) => ( {name, age, gender} );

// console.log(createPerson("Zabee", 30, "Male"));

// const sum = (function() {
//     return function sum (a, b) {
//         return a + b;
//     };
// })();
// console.log(sum(10, 20));


// const employeeWithFn = {
//     empId : 10,
//     empName : "Zabee",
//     // getEmployeeDetails : function(){
//     //     return this.empId +":" +this.empName;
//     // }
//     getEmployeeDetails(){
//         return this.empId +":" +this.empName;
//     }
// };

// console.log(employeeWithFn.getEmployeeDetails());



// const employeeClass = function(){
//     this.empId = 10;
//     this.employeeName = "Zabee";
// };
// var empClass = new employeeClass();
// console.log("New: " + empClass.empId);


// class EmployeeClass {
//     constructor(empId, empName){
//         this._empId = empId;
//         this._empName = empName;
//     }
//     get EmpId(){
//         return this._empId;
//     }
//     get EmployeeName(){
//         return this._empName;
//     }

//     set EmpId(argEmpId){
//         this._empId = argEmpId;
//     }
// };

// let employeeObj = new EmployeeClass(10, "Zabee");
// console.log(employeeObj.EmpId);
// employeeObj.EmpId = 2000;
// console.log(employeeObj.EmpId);

import { capitalizeString } from "StringUtils";
const helloCap = capitalizeString("Hello Captain!!");
console.log(helloCap);