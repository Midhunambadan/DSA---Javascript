let arr=["Rahul", "vijitha", "Ranjan", "midhun", "Ranjan",'midhun',"Rahul"]

function removeDup(arr){
    let result=[]
    let seen={}
    for(let i=0;i<arr.length;i++){
        if(!seen[arr[i]]){
            if(seen[arr[i]]=true){
                result.push(arr[i])

            }
        }
    }
    return result
}

console.log(removeDup(arr))