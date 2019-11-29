function caseInSwitchFallThrough(val){
    switch(val){
        case 1:
        case 2:
        case 3:
            return "Low";
        default: 
            return "high enough";

    }
}

function caseInSwitchStr(val){
    switch(val){
        case "a":
            return "apple";
        case 'b':
            return "ball";
        case `c`:
            return "cat";
        case "d":
            return "dog";
        default:
            return "human";
    }
}

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer= "alpha"
            break;
        case 2: 
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
        case 4: 
            answer = "delta";
            break;
        default:
            answer = "Nothing";
            break;
    }
    return answer;
}

function isLess(a, b){
    if(a < 0){
        return undefined;
    }
    return a<b;
}

function cc(card){
    var count=0;
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case `Q`:
        case "A":
            count--;
            break;
    }
    var holdbet = 'Hold';
    if(count > 0){
        holdbet = 'Bet';
    }
    return count + "" + holdbet;
}
console.log(caseInSwitch(11));
console.log(caseInSwitchStr("e"));
console.log(caseInSwitchFallThrough(4));
console.log(isLess(1, 2));
console.log(isLess(-10, 2));

cc(2); 
cc(3);
cc(7);
cc('K');
cc('A');
console.log(cc(4))