let myArray = [12, -5, 4, 181, 3];
let filtered = myArray.filter(func);
function func(val) {
    return !(val % 2 == 0)
}

let sum = 0;
for(let i = 0; i < filtered.length; i++){
    sum += filtered[i];
    result = sum / filtered.length;
}
console.log(result);