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
}


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
}

// Or 
// (    function checkBook(book) {

//   let matches = catalogue.filter(function(item) {
//     return book === item;
//   });
//   return matches.length >= 1;
// }            )


// My failing attempt
function countBooksByFirstLetter(letter) {
  
  let selectedBooks = [];
  for (i = 0; i < catalogue.length; i++) {
    let firstLetter = catalogue[i][0];
    if (firstLetter === letter) {
      selectedBooks.push(catalogue[i])
    }};
    return selectedBooks.length
  };


function countBooksByKeyword(keyword) {
 
  let keywordedBooks = [];
  for (i = 0; i < catalogue.length; i++) {
    if (catalogue.search(keyword)) {
      keywordedBooks.push(true)
    }};

    return keywordedBooks.length


  };



//   for (i=0; i < catalogue.length; i++)
//   // if catalogue index include keyword, add to a new array and print the length of the array

//  var keywordedBook = catalogue.filter (blah => catalogue[i,i] === keyword)
// return keywordedBook }
// // The above returns an empty array. The filter is not working.   



function getBooksByAuthor(author) {
  // Your code here
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
