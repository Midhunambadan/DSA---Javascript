

//check whether an array is sorted or not



function checkSorted(arr){

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }

    return true

}




const array=[1,2,3,4,5]


console.log(checkSorted(array))