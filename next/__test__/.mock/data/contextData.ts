import httpMocks from "node-mocks-http";
import { GetServerSidePropsContext } from "next";

export const ctxData: GetServerSidePropsContext = {
  req: httpMocks.createRequest({
    cookies: { guestId: "2", articleUserId: "2" },
  }),
  res: httpMocks.createResponse(),
  params: undefined,
  query: {},
  resolvedUrl: "/followList",
};
