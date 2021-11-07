class Employee {

    static num_of_employees;
    name;
    email;
    age;
    address;
    years_of_experience;
    salary;

    constructor(name, email, age, address, years_of_experience) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.years_of_experience = years_of_experience;
        this.salary = 1000;
        Employee.AddEmployees();
    }

    static AddEmployees() {
        this.num_of_employees++;
    }

    PrintInfo() {
        return "name: " + this.name + "\nemail: " + this.email + "\nage: " + this.age + "\naddress: " + this.address + "\nyears of experience: " + this.years_of_experience + "\nsalary: " + this.salary;
    }

    RaiseSalary() {
        this.salary *= 1.5;
    }
}

class Manager extends Employee {
    
    static number_of_managers;
    department;

    constructor(name, email, age, address, years_of_experience, department) {
        super(name, email, age, address, years_of_experience);
        this.salary = 1500;
        this.department = department;
        Manager.RaiseSalary();
    }

    PrintInfo() {
        return "name: " + this.name + "\nemail: " + this.email + "\nage: " + this.age + "\naddress: " + this.address + "\nyears of experience: " + this.years_of_experience + "\nsalary: " + this.salary + "\ndepartment: " + this.department;
    }

    static RaiseSalary() {
        this.salary *= 2;
    }
}

let firstManager = new Manager("elias", "eliashaddad666@outlook.com", 20, "lebanon", 10, "Computer Science");
let secondManager = new Manager("jad", "jadstuff@outlook.com", 21, "turkey", 49, "Mathematics");

let firstEmployee = new Employee("aline", "alinestuff@fun.com", 30, "United States", 27);
let secondEmployee = new Employee("alex", "alexemail@email.com", 36, "france", 12);
let thirdEmployee = new Employee("jocelyne", "jocelyne.email@test.com", 66, "uk", 8);

let companyList = [firstManager, secondManager, firstEmployee, secondEmployee, thirdEmployee];

for (let i = 0; i < companyList.length; i++) {
    if (companyList[i] instanceof Manager) {
        companyList[i].RaiseSalary();
    }
};

const user = {
    name: "",
    email: "",
    password: "",

    getName() {
        return this.name;
    },

    setName() {
        return this.name;
    },

    printUser() {
        return "name: " + this.name + "\nemail: " + this.email + "\npassword: " + this.password + "\nnationality: " + this.nationality;
    }
};

Object.defineProperty(user, "password", {
    writable: false,
    enumerable: false,
    configurable: false
});

user.nationality = "lebanese";

console.log(Object.keys(user));
console.log(user.printUser());
delete user.nationality;
console.log(user.printUser());

let userProto = Object.getPrototypeOf(user);
console.log(userProto);

let ul = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", function(event) {
    let inputVal = input.value;
    input.value = "";

    let new_li = document.createElement("li");
    let new_span = document.createElement("span");
    let new_button = document.createElement("button");

    new_li.appendChild(new_span);
    new_li.appendChild(new_button);

    new_span.textContent = inputVal;
    new_button.textContent = "delete";
    ul.appendChild(new_li);
    new_button.addEventListener("click", function(event) {
        ul.removeChild(new_li);
    })
})