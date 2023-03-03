//declarando
class User {};
//instancia de una clase
const newUser = new User();

class user {
    //metodos
    greeting(){
        return "hello";
    }
};

const afort = new user();
console.log(afort.greeting());
const bebeloper = new user ();
console.log(bebeloper.greeting());

//Constructor
class user {
    //constructor
 constructor(){
    console.log("nuevo usuario")
 }
 greeting(){
    return "hello";
}
}

const david = new user();


//This
class user{
    constructor(name) {
        this.name = name;        
    }
    //metodos
    speak(){
        return "hello";
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user("ana");
console.log(ana.greeting());



//Setters getters
class user {
    constructor(name,age){
        this.name =name;
        this.age =age;
    }
    //metodos
    speak(){
        return "hello";
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }


get uAge(){
    return this.age;
}
set uAge(n){
    this.age;
}
}
const bebeloper1 = new user("david", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);
