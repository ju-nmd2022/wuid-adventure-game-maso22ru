let age = 10;
let name = "Fia";
name = "Johan";


function sayHello(name, age) {
    let welcomeMessage = "Hi my name is " + name + " and I am " + age + " years old";
    if (age <= 30) {
        console.log(welcomeMessage);
    } else {
        console.log("goodbye loser" + name);
    }
}

sayHello("Johan", 34);

sayHello(name, age+19);

sayHello("maria", 61)

sayHello("Ami", 1.5)
