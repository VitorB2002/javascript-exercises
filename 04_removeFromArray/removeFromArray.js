const removeFromArray = function(array, ...args) {

    const arrayLength = array.length;

    args.forEach((arg) => {
        for(let i = 0 ; i < arrayLength ; i++){
            if(array[i] === arg){
                array.splice(i, 1);
            }
        }
    })

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
