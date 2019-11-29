var arrayOfEmployeeObjects = [
    {
        empId : 10,
        empName : "Zabee"
    },
    {
        empId : 20,
        empName: "Umar"
    },
    {
        empId : 30,
        empName : "John"
    }
];

for(var i=0; i<arrayOfEmployeeObjects.length; i++){
    console.log(arrayOfEmployeeObjects[i].empId);
    console.log(arrayOfEmployeeObjects[i]["empName"]);
}

var nestedStudentObjects = [
    {
        rollNo : 10,
        name : "Zabee",
        subjects : ["OS", "DS", "Algo", "Java", "J2EE", "JavaScript", "App Security"],
        address : {tempAddress : "Here", permanenetAddress : "There"}
    },
    {
        name : "New student",
    }
];

console.log(`Printing nestedStudentObjects`);
console.log(nestedStudentObjects[0]["subjects"][1]);
console.log(nestedStudentObjects[0]["address"]["tempAddress"]);
console.log("===============================================");
console.log(nestedStudentObjects[1])
console.log(nestedStudentObjects[1]["name"]);