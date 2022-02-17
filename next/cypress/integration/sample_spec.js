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

describe("初めてのテスト", () => {
  it("trueが成功するか", () => {
    // 指定のURLに訪れる
    cy.visit("https://www.cypress.io/");
    // 引数の文字列をクリックする(buttonタグ)
    cy.contains("Learn more").click();
    // 引数の文字列が存在するか確かめる
    cy.contains("A test runner built for humans");
  });
});
