import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { BASEURL } from "../../../src/const/Urls";
import { getServerSideProps } from "../../../src/pages/articles/[id]";
import { articleDataMock, ctxData, tagsData } from "../../.mock/data";

const server = setupServer(
  rest.post(`${BASEURL}/article`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([articleDataMock]));
  }),
  rest.get(`${BASEURL}/getTag`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([tagsData]));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("記事詳細ページをテスト", () => {
  it("詳細記事、タグが取得されること", async () => {
    const res = await getServerSideProps(ctxData);
    expect(res).toStrictEqual({
      props: {
        fallback: { "/article": [articleDataMock], "/tagsData": [tagsData] },
      },
    });
  });
});
