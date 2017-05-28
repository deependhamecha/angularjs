// Dependency Injection is nothing but passing object to parameters

var Person = function(firstname,lastname){
    
    this.firstname = firstname;
    this.lastname = lastname;
}

function logPerson(person){
    console.log(person.firstname+" "+person.lastname);
}

var john = new Person('Deepen','Dhamecha');
logPerson(john);