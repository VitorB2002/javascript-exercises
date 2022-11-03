const getTheTitles = function(books) {

    let booksTitles = new Array();

    books.forEach((books) => {
        booksTitles.push(books.title);
        } 
    );    

    return booksTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
