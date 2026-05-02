function titleCase(str){

    if(!str){
        return ""
    }

    const smaller = str.toLowerCase().split(/\s+/)

    const result = smaller.map(data => {
        const firstLetter = data[0].toUpperCase()
        data[0] = firstLetter
        return firstLetter + data.slice(1)
    }).join(" ")

    return result
}


module.exports = titleCase