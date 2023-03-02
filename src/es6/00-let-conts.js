//tiene un Scope Global
var lastName = "david";
lastName = "oscar";
console.log(lastName);
 
//tiene un scope de bloque
let fruit = "apple";
fruit = "kiwi";
console.log(fruit);

//tiene un scope de bloque
const animal = "dog";
animal = "cat";
console.log(animal);

//El scope de bloque de let y const dara problemas si intentas llamar la variable desde afuera de donde tiene su scope
const fruits = () => {
    if (true){
        var fruit1 = "apple";
        let fruit2 = "kiwi";
        const fruit3 = "banana";
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits()
