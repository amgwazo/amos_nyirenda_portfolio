let arrToObj = (arr, callback) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = callback(arr[i]);
        
    }
    return obj;
}

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const capitalize = function(char) {
    return char.toUpperCase();
}

console.log(arrToObj(arr, capitalize));

