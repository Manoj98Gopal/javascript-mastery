function sumDigits(num){

    let result = 0
    
    function add(n){
        const lastNum = n % 10
        const remaining = Math.floor(n / 10)
        result += lastNum
        if(remaining){
        add(remaining)
        }
    }
    
    add(num)
    
    return result
}


module.exports = sumDigits