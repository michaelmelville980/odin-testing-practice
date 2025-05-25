function reverseString(input = ""){
    let tempArray = [];
    for (let i = input.length - 1; i >= 0; i--){
        tempArray.push(input.charAt(i));
    }
    return tempArray.join("");
}

module.exports = reverseString;