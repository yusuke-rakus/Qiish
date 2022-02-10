import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { BASEURL } from "../../src/const/Urls";
import { getServerSideProps } from "../../src/pages/followList";
import { fetchUserQiish, fetchUserZenn } from "../.mock/data";
import { ctxData } from "../.mock/data";

const server = setupServer(
  rest.post(`${BASEURL}/user/followList`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([fetchUserQiish, fetchUserZenn]));
  })
);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});

describe("フォローリストデータをテスト", () => {
  it("フォローリストのデータが取得されること", async () => {
    const response = await getServerSideProps(ctxData);
    expect(response).toStrictEqual({
      props: { fallback: { "/followList": [fetchUserQiish, fetchUserZenn] } },
    });
  });
});
