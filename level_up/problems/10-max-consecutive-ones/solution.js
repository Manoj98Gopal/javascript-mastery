function maxConsecutiveOnes(arr) {

    let maxOnes = 0
    let current = 0

    for(let item of arr){
        if(item){
            current += 1
        }else{
            maxOnes = current
            current = 0
        }
    }

    return maxOnes > current ? maxOnes : current

}

module.exports = maxConsecutiveOnes