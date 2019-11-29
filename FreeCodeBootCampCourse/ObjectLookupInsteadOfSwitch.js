var hashMapLookup = {
    "a" : "Apple",
    "b" : "Ball",
    "c" : "Cat",
    "d" : "Dog",
    "e" : "Egg",
    "f" : "Fish"
};

function getMeValue(key){
    if(hashMapLookup.hasOwnProperty(key)){
        return hashMapLookup[key];
    }
    return "Not found";
    
}

console.log(getMeValue("f"));