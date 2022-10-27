const ftoc = function(fahrenheit) {
  let conversion = (fahrenheit - 32) * (5/9)

    if(conversion%1 == 0){
      return conversion;
    }

  return Number(conversion.toFixed(1));
};

const ctof = function(celsius) {
  let conversion = (celsius * (9/5)) + 32;

    if(conversion%1 == 0){
      return conversion;
    }

  return Number(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
