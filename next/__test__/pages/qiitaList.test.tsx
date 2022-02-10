import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { getStaticProps } from "../../src/pages/qiitaList";
import { qiitaListData } from "../.mock/data";

const server = setupServer(
  rest.get(`https://qiita.com/api/v2/items`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([qiitaListData]));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("Qiita記事一覧ページをテスト", () => {
  it("詳細記事、タグが取得されること", async () => {
    const res = await getStaticProps();
    expect(res).toStrictEqual({
      props: {
        fallback: { "/qiitaList": [qiitaListData] },
      },
    });
  });
});
