import React, { useState } from "react";
import { ArticleComp, CommentComp } from "../components/organisms";

const Article: React.FC = () => {
  const [articleLike, setArticleLike] = useState(10);
  const [articleLikeFlag, setArticleLikeFlag] = useState(false);

  const changeArticleLike = () => {
    if (articleLikeFlag) {
      setArticleLikeFlag(!articleLikeFlag);
      setArticleLike((prevLike) => prevLike - 1);
    } else {
      setArticleLikeFlag(!articleLikeFlag);
      setArticleLike((prevLike) => prevLike + 1);
    }
  };

  console.log(articleLike);
  return (
    <div className="h-full">
      <ArticleComp
        user_info_data={user_info_data}
        articleLike={articleLike}
        changeArticleLike={changeArticleLike}
      />
      <CommentComp user_info_data={user_info_data} />
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
