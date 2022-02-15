import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { BASEURL } from "../../src/const/Urls";
import { getServerSideProps } from "../../src/pages/profile";
import {
  ctxData,
  likedArticles,
  postedArticles,
  profileDataMock,
  tagsData,
} from "../.mock/data";

const server = setupServer(
  rest.post(`${BASEURL}/userPage`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([profileDataMock]));
  }),
  rest.get(`${BASEURL}/getTag`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([tagsData]));
  }),
  rest.post(`${BASEURL}/article/likedList`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([likedArticles]));
  }),
  rest.post(`${BASEURL}/article/postedList`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([postedArticles]));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("プロフィールページをテスト", () => {
  it("プロフィール、タグ、投稿記事、いいね記事が取得されること", async () => {
    // moduleがES6によるエラー
    const res = await getServerSideProps(ctxData);
    expect(res).toStrictEqual({
      props: {
        fallback: {
          "/profile": [profileDataMock],
          "/tagsData": [tagsData],
          "/postedArticles": [postedArticles],
          "/likedArticles": [likedArticles],
        },
      },
    });
  });
});
