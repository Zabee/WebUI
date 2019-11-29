function Employee(){
    this.empID = 10;
    this.empName = 'Zabee';
    this.getEmployeeId = function(){
        return this.empID;
    };
}

let employee = new Employee();
console.log(employee.getEmployeeId());


function Student(argStudentId){
    this.studentId = argStudentId;
    this.studentName;
    this.getStudentName = function() {
        return this.studentName;
    },
    this.setStudentName = function(argStudentName){
        this.studentName = argStudentName;
    }
    this.getStudentId = function(){
        return this.studentId;
    }
}

let student = new Student(20);
student.setStudentName("Umar");
console.log(student.getStudentName());
console.log(student.getStudentId());