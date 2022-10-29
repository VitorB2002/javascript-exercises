const fibonacci = function(a) {

    if(a == 1){
        return 1;
    }   else if(a == 2){
        return 1;
    }   else if(a < 0){
        return "OOPS";
    }   else{

        let fibonacci = pastValue = 1;
        let aux;

            for(let i = 2 ; i < a ; i++){
                aux = fibonacci;
                fibonacci += pastValue;
                pastValue = aux;
            }

        return fibonacci;
    }
};

// Do not edit below this line
module.exports = fibonacci;
