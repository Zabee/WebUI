var ourArray = ["John", 23];
var myArray = ["Quincy", 1];
console.log(myArray +":" + name.length);


//Nested Array or Multi Dimension array

var multiArray = [["Zabee", 30],["John", 35]];
// for(var i=0; i<multiArray.length; i++){
//     for(var j=0; j<multiArray.length; j++){
//         console.log(multiArray[i][j]);
//     }
// }

var otherArray = ["Zabee", "Umar", "John"];
otherArray.push("Jim");
for(var i=0; i<otherArray.length; i++){
    console.log(otherArray[i]);
}

otherArray.pop();
console.log(otherArray);

otherArray.shift();
console.log(otherArray);

otherArray.unshift("Zabee");
otherArray.push("Douglas");
console.log(otherArray);