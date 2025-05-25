function capitalize(input = ""){
    if (input.length === 1){
        return input.charAt(0).toUpperCase();
    }else if (input.length > 1){
        return input.charAt(0).toUpperCase() + input.slice(1);
    }else{
        return input;
    }
}

module.exports = capitalize;