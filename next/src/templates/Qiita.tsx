import React, { useState } from "react";
import useSWR from "swr";
import { Comments } from ".";
import { QiitaComp } from "../components/organisms";
import { useToggle } from "../hooks";

const Qiita: React.FC = () => {
  // qiita詳細データ
  const { data, error } = useSWR(`/qiita`);

  const [articleLike, setArticleLike] = useState(data.likes_count);
  const [articleLikeFlag, setArticleLikeFlag] = useState(false);
  const [usrFollowFlag, setUsrFollowFlag] = useToggle(false);

  // いいね機能 true:いいねしない false:いいねする
  const changeArticleLike = () => {
    if (articleLikeFlag) {
      setArticleLikeFlag(!articleLikeFlag);
      setArticleLike((prevLike: number) => prevLike - 1);
    } else {
      setArticleLikeFlag(!articleLikeFlag);
      setArticleLike((prevLike: number) => prevLike + 1);
    }
  };
  // フォローフラグ切り替え
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="h-full">
      <div className="text-3xl">Qiita用の詳細記事</div>
      <QiitaComp
        qiita={data}
        user_info_data={user_info_data}
        articleLike={articleLike}
        articleLikeFlag={articleLikeFlag}
        changeArticleLike={changeArticleLike}
        usrFollowFlag={usrFollowFlag}
        changeUsrFollow={setUsrFollowFlag}
      />
      <Comments />
    </div>
  );
};

export default Qiita;

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
