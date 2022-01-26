import { GetStaticProps } from "next";
import React from "react";
import { Follow } from "../templates";
import { fetchFollowList } from "./api/fetchData";

const FollowPage: React.FC = () => {
  return <Follow />;
};

export default FollowPage;

// フォローリスト取得の処理
// export const getStaticProps: GetStaticProps = async () => {
//   // undefindの可能性があるためparamsをoptionalにした
//   const follow = await fetchFollowList()

//   return {
//     props: {
//       fallback: {
//         "/follow": follow,
//       },
//     },
//   };
// };
