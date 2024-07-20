function fn(num){
    if(num<=1){
        return 
    }
    fn(num-1)
    console.log(num);
}
fn(5)