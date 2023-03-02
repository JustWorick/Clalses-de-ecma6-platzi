//la antigua manera de concatenar strings
let hello = "hello";
let world = "world";
let epicphrase = hello + " " + world + "!";
console.log(epicphrase);

//template literals (Las putas comillas francesas se hacen con `ctrl + alt + boton al lado de enter xd`)
let epicphrase2 = `${hello} ${world}!`;
console.log(epicphrase2);

//Multi-line strings
let lorem = "esto es un string \n" + "esto es otra linea";

let lorem2 = `esta es una frase epica 
la continuacion de esa frase epica`;

console.log(lorem);
console.log(lorem2);