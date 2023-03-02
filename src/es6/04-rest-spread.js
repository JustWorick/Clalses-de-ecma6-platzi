//arrays destructuring
let fruits = ["apple","banana"];
let [a,b] = fruits;
console.log(a,b);

//object destructuring
let user = {userName: "oscar",age:34};
let {userName,age} = user;
console.log(userName,age);

// spread operator
let person = {name:"oscar",age:28};
let country = "MX";

let data= {...person,country};
console.log(data);

//rest
function sum(num,...values){
    console.log(values);
    console.log(num+values[0]);
    return num+values[0];
}
sum(1,1,3);




//Desafio Clase 9

let json1 = {
    name: "Mr. Michi",
    food: "Pescado"
};
let json2 = {
  age: 12,
  color: "Blanco"
};
function solution(name,food) {
  let data = {
    name: "Bigotes",
    food: "Pollito"}
    let result = {...data,...json2}
    return console.log(result);
}
solution();

//solucion 
export function solution(json1, json2) {
    json1 = json1 || { name: "Mr. Michi", food: "Pescado" };
    json2 = json2 || { age: 12, color: "Blanco" };
  
    return { ...json1, ...json2 }
  }