const employee = {
    name : "tawheed",
    id : 43142,
    role : "Backend Emgineer"
};

console.log(employee.id);

employee.id = 42770;
console.log(employee.id);

employee.sound = function(){
    console.log(`${this.name} is a ${this.role}.`);
    console.log("FHAAAA");
    
};

console.log(employee.sound());


