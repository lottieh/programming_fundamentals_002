// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length;
};


function checkBook(book) {
  //  while (catalogue[index]=== book){console.log(true); catalogue++;}} 
  return (catalogue.includes(book))

  // Actual answer
  for (let i = 0; i < catalogue.length; i++) {
    let bookToCheck = catalogue[i];
    console.log(bookToCheck);

    if (bookToCheck === book) {
      return true;
    }
  }
  return false;
};

// Or 
// (    function checkBook(book) {

//   let matches = catalogue.filter(function(item) {
//     return book === item;
//   });
//   return matches.length >= 1;
// }            )



function countBooksByFirstLetter(letter) {

  let selectedBooks = [];
  for (i = 0; i < catalogue.length; i++) {
    let firstLetter = catalogue[i][0];
    if (firstLetter === letter) {
      selectedBooks.push(catalogue[i])
    }
  };
  return selectedBooks.length
};


function countBooksByKeyword(keyword) {
  
  let keywordedBooks = [];
  for (i = 0; i< catalogue.length; i++) {
    if (catalogue[i].includes(keyword)) {
      keywordedBooks.push(catalogue[i] )
    }
  };

  return keywordedBooks.length
};


function getBooksByAuthor(author) {
  let booksByAuthor = [];
  for (i = 0; i< catalogue.length; i++) {
    if (catalogue[i].includes(author)) {
      booksByAuthor.push(catalogue[i] )
    }
  };

  return booksByAuthor
};


module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};


/* # Written questions

1. In what data type have we chosen to represent a book?
    The books are all strings.

2. Is this the best data type, do you think? Could we have chosen a more appropriate data type? Why?
    These may have been better represented as objects as they have properties associated with them. 

3. Take a read of the Jest Documentation about [Matchers](https://jestjs.io/docs/en/using-matchers) such as `toBe` and `toEqual`. What other matchers might come in useful? Check the tests you have written and make a list of alternative matchers which you might have been able to use.

4. What data types are considered "complex" data types?
    Complex data types are Objects

5. What data types are considered "primitive" data types?
    Primitive data types are 
    Boolean
    Null
    Undefined
    Number
    String
    Symbol

6. In JavaScript it is possible to use `==` ("double equals") or `===` ("triple equals") to compare two values. What is the difference and why do we prefer triple equals?
    == will compare two variable regardless of their data type. Whereas for === the data types must be consistent. 

*/