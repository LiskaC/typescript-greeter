var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return ("Hello " + person.firstName + ", I like your surname " + person.lastName);
}
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
