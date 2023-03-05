const user = {username: "Afort", age:24, country: "CL"};
const {username, ...values} = user;

console.log(username);
console.log(values);