function nextInLine(argArray, nextNum){
    argArray.push(nextNum);
    return argArray.shift();
}
function trueOrElse(isItTrue){
    if(isItTrue){
        return "Yes it is true";
    }
    return "No, it is false;"
}

function testEqual(val){
    if(val == 12){
        return "Number is 12";
    }
    return "Number is not 12";
}

function strictEqual(val){
    if(val === 12){
        return "yes";
    }
    return "As per the strict equals no trype conversion took place so, no the value you passed is not 12!";
}

function strictNotEqual(val){
    if(val !== 17){
        return "No the value you passed is not 17 because of strict checking!!";
    }
    return "Yesssss";
}

var testArray = [1, 2, 3, 4, 5];
console.log("Before: " + testArray);
console.log(nextInLine(testArray, 6));
console.log("After: " + testArray);
console.log(trueOrElse(true));
console.log(testEqual("12"));
console.log(strictEqual("12"));
console.log(strictNotEqual("17"));
console.log(strictNotEqual(17));