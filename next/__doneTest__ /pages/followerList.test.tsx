import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { getServerSideProps } from "../../src/pages/followerList";
import { fetchUserQiish, fetchUserZenn } from "../../__test__/.mock/data";
import { ctxData } from "../../__test__/.mock/data";
import { BASEURL } from "../../src/const/Urls";

const server = setupServer(
  rest.post(`${BASEURL}/user/followerList`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([fetchUserQiish, fetchUserZenn]));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("フォロワーリストページをテスト", () => {
  it("フォロワーリストが取得されること", async () => {
    const res = await getServerSideProps(ctxData);
    expect(res).toStrictEqual({
      props: { fallback: { "/followerList": [fetchUserQiish, fetchUserZenn] } },
    });
  });
});
