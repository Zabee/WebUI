const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function(){
    console.log('draw');
}
`);

Circle.call({}, 1);
Circle.apply({}, [1]);
const anotherCircle = new Circle(1);

let x = {};
//let x = new Object();

//Factor Function
function getMeAnanymosObject(radius){
    return{
        radius : radius,
        draw : function(){
            console.log('Hi ' + this.radius);
        }
    };
}

//Constructor Function
function Circle(radius){
    this.radius = radius;
    let color = 'red';
    let defaultLocation = {x: 0, y:0};
    let computeOptimumLocation = function(factor){
        //
    }
    let draw = function(){
        computeOptimumLocation(0.1);
    }

    Object.defineProperty(this, 'defaultLocation', {
    get: function(){
        return defaultLocation;
    },
    set: function(value){
        if(!value.x || !value.y){
            throw new Error('Invalid location');
        }
    }
});
}

//Factory way of creating objects
let circle = getMeAnanymosObject('Zabee');
circle.draw();

//Constructor way of creating objects
let another = new Circle(1);
// another.draw();




for (let key in circle){
	console.log("Key : " +key + " Value: " + circle[key])
}

const keys = Object.keys(circle);
console.log(keys);

for(let keyy in keys){
    console.log("Key from array: " +keyy + " value : " + keys[keyy]);
}
 

if('radius' in circle){
    console.log('Circle has radius')
}