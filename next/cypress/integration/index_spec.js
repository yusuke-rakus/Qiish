// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// describe("初めてのテスト", () => {
//   it("trueが成功するか", () => {
//     expect(true).to.equal(true);
//   });
// });

describe("トップページのテスト", () => {
  it("トップページが表示されているか", () => {
    // 指定のURLに訪れる
    cy.visit("http://localhost:3000/");
    // トップページのArticleが表示されているかどうか
    cy.contains("Articles");
  });
});
