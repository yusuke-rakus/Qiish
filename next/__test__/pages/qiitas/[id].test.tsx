import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { getStaticProps } from "../../../src/pages/qiitas/[id]";
import { qiitaData } from "../../.mock/data";

const server = setupServer(
  rest.get(`https://qiita.com/api/v2/items/1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([qiitaData]));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("Qiita記事詳細ページをテスト", () => {
  it("Qiita詳細記事が取得されること", async () => {
    // const res = await getStaticProps();
    // expect(res).toStrictEqual({
    //   props: {
    //     fallback: { "/qiita": [qiitaData] },
    //   },
    // });
  });
});
