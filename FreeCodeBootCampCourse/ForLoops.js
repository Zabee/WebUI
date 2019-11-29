// while
var num=5;
console.log("Using while()")
while(num >0){
    console.log(num--);
}

// do-while
console.log("do-while")
do{
    console.log(num++);
}while(num<5);

//For
console.log("Using for loop")
for(var i=0; i<2; i+=2,  console.log("Incrementing")){
    console.log("This gonna print only once");
}

//For Each
console.log("Using for Each")
var integerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for(var integer in integerArray){
    console.log(integer);
}