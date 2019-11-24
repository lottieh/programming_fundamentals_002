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
    test('Returns zerto if no books starting with a given letter', () => {
      expect(catalogueService.countBooksByFirstLetter('X')).toBe(0);
    });
  })
});

describe('catalogueService', () => {
  describe('catalogueService.countBooksByKeyword', () => {
    test('Returns the number of books containing the specified keyword', () => {
      expect(catalogueService.countBooksByKeyword('Normal')).toBe(2);
      expect (catalogueService.countBooksByKeyword("With")).toBe(1); 
      expect (catalogueService.countBooksByKeyword("Benjamin")).toBe(0);
      expect (catalogueService.countBooksByKeyword(2666)).toBe(1);
      expect(catalogueService.countBooksByKeyword(true)).toBe(0);
      expect(catalogueService.countBooksByKeyword([1, 2, 3])).toBe(0); 
    });
  })
}); 