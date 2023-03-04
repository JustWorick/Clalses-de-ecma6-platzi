function* iterate(array){
    for(let value of array){
        yield value
    }
}

const it = iterate(["Oscar", "David", "Ana", "Jennifer"]);
console.log(it.next().value)