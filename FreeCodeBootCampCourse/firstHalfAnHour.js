/**
 * Data Types:
 * undefined, null, boolean, string, symbol, number and object
 */

 var a; //Declaring
 var b=2;   //Assigning
 a=7; //Assig 7 to a
 b = a;
a+=12;
a-=12;
b/=12;
console.log("b value: " +b);
console.log("a:  be 7: " + a)
 var myDecimal = 0.009;
 myDecimal = 0.009 *1000;
 myDecimal++;
 console.log("Decimal ++: :"  +myDecimal);

 var remainder = 11 % 3;
 console.log(remainder);

 console.log("Zabee");
 console.log(a)
var sum = 10 + 10;
console.log(add("10", 20));

function add(number1, number2){
    return Number(number1) + number2;
}


console.log("==========================")
var mfn = "Zabee";
var mln = "Ulla";
var myStr = "I am a \"double quoted\" string inside";
console.log(myStr)

var myOtherStr = '<a href="https://www.google.com"></a>';
console.log(myOtherStr);


var myAnotherStr = `Enjoy "" '' but not \` haha!!\nHaha \fHehe`;
console.log(myAnotherStr);

var myStr = "firstLine\n\t\\SecondLine\nThridLine";
console.log(myStr);


var ourStr = "I come first. " + "I come second.";
var str1 = "THis is the the start. " + " THis is the end";
console.log(str1);

ourStr += str1;
console.log(ourStr);


var name = "Zabee";
name+=" Ulla";
console.log(name + " " + name.length);

console.log(name[0]);

name[0] = 'X';
console.log(name[0]);

parseInt