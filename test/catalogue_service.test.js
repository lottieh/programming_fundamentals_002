const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("Returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });
});

describe("catalogueService", () => {
  describe("catalogueService.checkBook", () => {
    test("Returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("The Catcher in the Rye by J.D. Salinger")).toBe(true);
});
    test("Returns false if the book does not exists in the list", () => {
      expect(catalogueService.checkBook("The BFG by Roald Dahl")).toBe(false);
    });
  })
});

describe("catalogueService", () => {
  describe('catalogueService.countBooksByFirstLetter', () => {
    test('Returns the number of books starting with a given letter', () => {
      expect(catalogueService.countBooksByFirstLetter('B')).toBe(3);
    });
  })
});
describe("catalogueService", () => {
  describe('catalogueService.countBooksByFirstLetter', () => {
    test('Returns zero if no books starting with a given letter', () => {
      expect(catalogueService.countBooksByFirstLetter('X')).toBe(0);
    });
  })
});

describe('catalogueService', () => {
  describe('catalogueService.countBooksByKeyword', () => {
    test('Returns the number of books containing the specified keyword', () => {
      expect(catalogueService.countBooksByKeyword('Normal')).toBe(2);
      expect(catalogueService.countBooksByKeyword("With")).toBe(1);
      expect(catalogueService.countBooksByKeyword("Benjamin")).toBe(0);
      expect(catalogueService.countBooksByKeyword(2666)).toBe(1);
      expect(catalogueService.countBooksByKeyword(false)).toBe(0);
      expect(catalogueService.countBooksByKeyword([4, 8, 12])).toBe(0);
    });
  })
}); 

describe('catalogueService', () => {
  describe('catalogueService.getBooksByAuthor', () => {
    test('Returns the books written by a specific Author.', () => {
      expect(catalogueService.getBooksByAuthor('Hilary Mantel')).toEqual([
        "Wolf Hall by Hilary Mantel",
        "Bring Up The Bodies by Hilary Mantel",
        "A Place of Greater Safety by Hilary Mantel",
        "Giving Up the Ghost by Hilary Mantel",
        "The Assassination of Margaret Thatcher by Hilary Mantel"]);
      
        expect (catalogueService.getBooksByAuthor('Benjamin Mayne')).toEqual([]); 
      
      expect(catalogueService.getBooksByAuthor('Char')).toEqual([
        "The Yellow Wallpaper by Charlotte Perkins Gilman",
        "A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens",
        "Great Expectations by Charles Dickens",
        "The Origin of Species by Charles Darwin"])
    });
  });
});