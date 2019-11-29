var ourDog = {
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything"],
    print : function(){
        console.log(name + " " +  " ");
    }
};

console.log(ourDog.name);
//Strings are immutable in JavaScript dingchika dingchika dingchika
var name = ourDog.name;
name = "Quincy";
console.log(ourDog.name);
console.log(ourDog["friends"][0]);

var legs = ourDog["legs"];
legs = 3;
console.log(ourDog.legs);

var friends =ourDog["friends"];
friends = ["everyone"];
console.log(ourDog["friends"][0]);


delete ourDog.friends;
console.log(ourDog.friends);