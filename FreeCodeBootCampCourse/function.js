var globalInteger = 999999999999999;

function fun1(){
   var oopsGlobal = 523232;
   var globalInteger =10;
    console.log(oopsGlobal);
}

function sayHello(){
    if(typeof globalInteger != 'undefined')
    console.log("Hello " + globalInteger);
}

function fnWithArgs(a, b){
    console.log(a+b);
}

function minusSeven(number){
    return number-7;
}

var sum = 0;
function addThree(){
    sum+=3;
}
fun1();
sayHello();
fnWithArgs(10, 5);
console.log("-7 : " +minusSeven(3));
addThree();
console.log(sum);