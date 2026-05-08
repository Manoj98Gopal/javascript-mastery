function sortByFrequency(arr){

    const freq = {}

    for(let item of arr){
       freq[item] = (freq[item] || 0) + 1
    }

    const result = [...arr].sort((a,b) => freq[b] - freq[a])

    return result
}


module.exports = sortByFrequency