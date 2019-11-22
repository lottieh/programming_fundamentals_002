const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });
});

describe("catalogueService", () => {
  describe("catalogueService.checkBook", () => {
    test("returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("The Catcher in the Rye by J.D. Salinger")).toBe(true);

    });
    test("returns false if the book does not exists in the list", () => {
      expect(catalogueService.checkBook("The BFG by Roald Dahl")).toBe(false);
    });
  })
});

describe("catalogueService", () => {
  describe('catalogueService.countBooksByFirstLetter', () => {
    test('returns the number of books starting with a given letter', () => {
      expect(catalogueService.countBooksByFirstLetter('B')).toBe(3);
    });
  })
});
describe("catalogueService", () => {
  describe('catalogueService.countBooksByFirstLetter', () => {
    test('returns zerto if no books starting with a given letter', () => {
      expect(catalogueService.countBooksByFirstLetter('X')).toBe(0);
    });
  })
});

describe('catalogueService', () => {
  describe('catalogueService.countBooksByKeyword', () => {
    test('returns the number of books containing the specified word', () => {
      expect(catalogueService.countBooksByKeyword('Normal')).toBe(2);
    });
  })
}); 