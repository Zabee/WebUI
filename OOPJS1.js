let x = {value: 10};
let y = x;
y.value = 10
x.value = 20;

let obj = {value : 10};
function increase(obj){
    obj.value--;
}

increase(obj);
obj.location = {name : 'Zabee'};
console.log(obj.location.name);
delete obj.location;
