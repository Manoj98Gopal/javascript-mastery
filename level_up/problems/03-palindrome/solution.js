
function isPalindrome(str){

    const cleanedStr = str.toLowerCase().replace(/\s/g, "");

    // using methods
    // const reversedStr = cleanedStr.split("").reverse().join("")

    let reversedStr = ""

    for(let i = cleanedStr.length-1; i>=0; i--){
        reversedStr += cleanedStr[i]
    }


    return cleanedStr === reversedStr
}


module.exports = isPalindrome