
// let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6];

// function findUniqueElements(array) {
//     return array.filter(item => array.indexOf(item) === array.lastIndexOf(item));
// }

// console.log(findUniqueElements(arr)); // Output: [4, 5, 6]










let arr=[1,2,3,1,2,3,4,5,6]

let count = {}

for ( let  i = 0 ; i < arr.length ; i++) {
//    count[arr[i]] =  count[arr[i]] ? count[arr[i]]++ : 1
if( count[arr[i]]) {
    count[arr[i]]++
}
else{
    count[arr[i]] = 1
}
}
// console.log("count :",count)

let sum = 0

for ( let i in count) {
    count[i] === 1 ? sum+=Number(i): ''
}
console.log("sum of unique: ",sum)
