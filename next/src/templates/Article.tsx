import React, { useState } from "react";
import { Comments } from ".";
import { ArticleComp, ArticleDetail } from "../components/organisms";

const Article: React.FC = () => {
  const [articleLike, setArticleLike] = useState(10);
  const [articleLikeFlag, setArticleLikeFlag] = useState(false);
  const [usrFollowFlag, setUsrFollowFlag] = useState(false);
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
  const changeUsrFollow = () => {
    setUsrFollowFlag(!usrFollowFlag);
  };
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  return (
    <div className="h-full">
      <ArticleDetail
        articleData={articleData}
        articleLike={articleLike}
        articleLikeFlag={articleLikeFlag}
        changeArticleLike={changeArticleLike}
        usrFollowFlag={usrFollowFlag}
        changeUsrFollow={changeUsrFollow}
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

export const articleData = {
  id: 1,
  // user_info_id: 1,
  user_info_data: user_info_data,
  title: "TailwindCSSのチートシートを公開します。",
  content:
    "プログラミングをしていると、「あれ、どうだったかな？」とリファレンスを確認する場面が結構出てきます。そんな時に、サクッと確認できるのが「チートシート」です。",
  posted_date: "12月7日",
  skill_tags: [
    { article_id: 1, skill_id: 1, skill_name: "フロントエンド" },
    { article_id: 1, skill_id: 2, skill_name: "CSS" },
    { article_id: 1, skill_id: 3, skill_name: "tailwindCSS" },
    { article_id: 1, skill_id: 4, skill_name: "初心者" },
  ],
};
