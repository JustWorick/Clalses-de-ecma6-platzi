//Las promesas se escriben con "P" Mayuscula xd
const anotherFunction = () => {
    return new Promise((resolve,reject)=> {
        if (true){
        resolve("Hey!!");
         } else {
            reject("Whoops:(");
         }
    })
}

anotherFunction()
.then(response => console.log(response))
.catch(err => console.log(err));