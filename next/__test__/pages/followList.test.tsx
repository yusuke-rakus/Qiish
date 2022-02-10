import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import httpMocks from "node-mocks-http";
import { context, rest } from "msw";
import { setupServer } from "msw/node";
import { GetServerSidePropsContext } from "next";
import { getServerSideProps } from "../../src/pages/followList";
import { FollowList } from "../../src/templates";
const server = setupServer(
  rest.post("http://localhost:9090/user/followList", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
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
        },
        {
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
        },
      ])
    );
  })
);
// { guestId: '2', articleUserId: '2' }
const ctx: GetServerSidePropsContext = {
  req: httpMocks.createRequest({
    cookies: { guestId: "2", articleUserId: "2" },
  }),
  res: httpMocks.createResponse(),
  params: undefined,
  query: {},
  resolvedUrl: "/followList",
};

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
  it("フォローリストのデータが表示されること", async () => {
    const response = await getServerSideProps(ctx);
    console.log(response);

    // screen.debug();
  });
});
