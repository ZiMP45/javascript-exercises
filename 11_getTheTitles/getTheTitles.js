const getTheTitles = function(books) {
    let bookTitles = [];

    for (let i = 0; i < books.length; i++) {
        bookTitles.push(books[i].title);
    }

    return bookTitles;
};

// alternatively per solution
// return books.map((book) => book.title);
// .map is a copying method, and using the arrow function within
// it returns a new copied array without having to explicitly say that
// it's doing so.

// Do not edit below this line
module.exports = getTheTitles;
