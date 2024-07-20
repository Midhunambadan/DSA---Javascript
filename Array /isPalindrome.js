// function isPalindrome(number){
//     let str=number.toString()
//     const revstr=str.split('').reverse().join('')

//     if(str===revstr){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isPalindrome(121))




let str = "malayalam";

function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            console.log("Not palindrome");
            return;
        }
    }
    console.log("Is palindrome");
}

isPalindrome(str);








