function addNumbers(){
    let num1 = Number(document.getElementById("firstNumber").value);
    let num2 = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").value =  num1+num2;
}

function subNumbers(){
    let num1 = Number(document.getElementById("firstNumber").value);
    let num2 = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").value =  num1-num2;
}

function mulNumbers(){
    let num1 = Number(document.getElementById("firstNumber").value);
    let num2 = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").value =  num1*num2;
}

function divNumbers(){
    let num1 = Number(document.getElementById("firstNumber").value);
    let num2 = Number(document.getElementById("secondNumber").value);
    if(num2 ==0 ){
        alert("Cannot divide by zero");
        return;
    }
    document.getElementById("result").value =  num1/num2;
}