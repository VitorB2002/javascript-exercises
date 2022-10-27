const repeatString = function(string, num) {
    
    const oldString = string;

    if(num > 0){
        
        for(let i = 1 ; i < num ; i++)
            string += oldString;

        return string;
    }   else if(num == 0){
        return "";
    }   else if(num < 0){
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
