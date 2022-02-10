import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import httpMocks from "node-mocks-http";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { GetServerSidePropsContext } from "next";
import { getServerSideProps } from "../../src/pages/followerList";
const fetchData = {
  id: 1,
  userName: "qiish",
  email: "sample@qiish.com",
  engineerType: "WEB",
  description: "hello",
  image: "",
  follow: "",
  followCount: 1,
  follower: 0,
  followerCount: 1,
  tags: [
    { id: 1, skill: "React", image: null },
    { id: 2, skill: "Next", image: null },
  ],
  articles: 0,
  articleCount: 0,
  likes: 0,
  comments: 0,
  followStatus: 0,
};
const fetchData2 = {
  id: 2,
  userName: "zenn",
  email: "sample@zenn.com",
  engineerType: "FR",
  description: "hey",
  image: "",
  follow: "",
  followCount: 1,
  follower: 0,
  followerCount: 1,
  tags: [
    { id: 1, skill: "React", image: null },
    { id: 3, skill: "TypeScript", image: null },
  ],
  articles: 0,
  articleCount: 0,
  likes: 0,
  comments: 0,
  followStatus: 0,
};

const ctx: GetServerSidePropsContext = {
  req: httpMocks.createRequest({
    cookies: { guestId: "2", articleUserId: "2" },
  }),
  res: httpMocks.createResponse(),
  params: undefined,
  query: {},
  resolvedUrl: "/followList",
};

const server = setupServer(
  rest.post("http://localhost:9090/user/followerList", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([fetchData, fetchData2]));
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
    const response = await getServerSideProps(ctx);
    expect(response).toStrictEqual({
      props: { fallback: { "/followerList": [fetchData, fetchData2] } },
    });
  });
});
