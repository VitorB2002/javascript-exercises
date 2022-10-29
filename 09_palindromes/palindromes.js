const palindromes = function (string) {
    let reverse;
    let letters = /^[A-Za-z]+$/;

    //Remove whitespace
    string = string.replace(/\s+/g, '');

    //Removing punctuation
    for(let i = 0 ; i < string.length ; i++){
        if(!(string[i].match(letters))){
            string = string.replace(string[i], "");
        }
    }

    reverse = reverseString(string);

    if(reverse.toLowerCase() == string.toLowerCase()){
        return true;
    }   else{
        return false;
    }

};

const reverseString = function(string) {
    let reversed = "";

    for(let i = string.length - 1; i >= 0 ; i--){
        reversed += string[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = palindromes;
