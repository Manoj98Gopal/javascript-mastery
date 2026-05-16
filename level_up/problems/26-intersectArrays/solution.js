function intersectArrays(arr1, arr2) {

    const freqMap = {}

    for(let num of arr1) {
        freqMap[num] = (freqMap[num] || 0) +1
    }

    const result = []

    for(let num of arr2) {
        if(freqMap[num] && freqMap[num] > 0) {
            result.push(num)
            freqMap[num]--
        }
    }


    return result
}



module.exports = intersectArrays