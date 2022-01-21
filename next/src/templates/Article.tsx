import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Comments } from ".";
import { ArticleComp } from "../components/organisms";

const Article: React.FC = () => {
  const [articleLike, setArticleLike] = useState(10);
  const [articleLikeFlag, setArticleLikeFlag] = useState(false);
  // 記事データ(API実装できたら再度行う)
  // const { data, error } = useSWR("/profile");
  // useEffect(() => {
  //   console.log("Article" + data);
  // }, [data]);

  const changeArticleLike = () => {
    if (articleLikeFlag) {
      setArticleLikeFlag(!articleLikeFlag);
      setArticleLike((prevLike) => prevLike - 1);
    } else {
      setArticleLikeFlag(!articleLikeFlag);
      setArticleLike((prevLike) => prevLike + 1);
    }
  };
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  return (
    <div className="h-full">
      <ArticleComp
        user_info_data={user_info_data}
        articleLike={articleLike}
        articleLikeFlag={articleLikeFlag}
        changeArticleLike={changeArticleLike}
      />
      <Comments />
    </div>
  );
};

export default Article;

// APIでデータが取ってこれれば不要
// ------------------------------------------
// デモユーザー
const user_data = {
  user_name: "rakus111111",
  password: "Yamtataro123",
};

const skill_tags = [
  { user_info_id: 1, skill_id: 1, skill_name: "JavaScript" },
  { user_info_id: 1, skill_id: 5, skill_name: "TypeScript" },
  { user_info_id: 1, skill_id: 6, skill_name: "Vue" },
  { user_info_id: 1, skill_id: 3, skill_name: "TailwindCSS" },
];

export const user_info_data = {
  user_info_id: 1,
  first_name: "太郎",
  last_name: "山田",
  user_name: user_data.user_name,
  email: "yama@taro.com",
  engineer_type: "",
  comment: "趣味はサウナです。",
  skill_tags: skill_tags,
  enginner_type: "FR",
};
