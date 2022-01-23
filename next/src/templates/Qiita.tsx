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
  // カスタムフック使用(Toggle)
  const [usrFollowFlag, setUsrFollowFlag] = useToggle(false);

  // いいね機能 true:いいねしない false:いいねする
  const changeArticleLike = () => {
    if (articleLikeFlag) {
      setArticleLike((LikeCount: number) => LikeCount - 1);
    } else {
      setArticleLike((LikeCount: number) => LikeCount + 1);
    }
    setArticleLikeFlag(!articleLikeFlag);
  };
  // フォローフラグ切り替え
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="h-full">
      <div className="text-3xl">Qiita用の詳細記事</div>
      <QiitaComp
        qiita={data}
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
