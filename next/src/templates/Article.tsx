import React, { useState } from "react";
import useSWR from "swr";
import { ArticleEdit, Comments } from ".";
import { ArticleDetail } from "../components/organisms";
import { useToggle } from "../hooks";
import { changeFollowStatus } from "../pages/api/addData";

const Article: React.FC = () => {
  const { data } = useSWR("/article");
  const [likeCount, setlikeCount] = useState(data.article.likesCount);
  const [articleLikeFlag, setArticleLikeFlag] = useState(false);
  const [usrFollowFlag, setUsrFollowFlag] = useToggle(false);
  const [editFlag, setEditFlag] = useToggle(false);

  const changeArticleLike = () => {
    if (articleLikeFlag) {
      setArticleLikeFlag(!articleLikeFlag);
      setlikeCount((prevLike: number) => prevLike - 1);
    } else {
      setArticleLikeFlag(!articleLikeFlag);
      setlikeCount((prevLike: number) => prevLike + 1);
    }
  };
  // 現状はuid１がuid2にフォローする処理
  const usrFollowing = async () => {
    // フォローのデータをDBに保存()
    await changeFollowStatus(usrFollowFlag);
    // フォローの真偽値切り替え true:フォロー中、false:フォロー解除
    setUsrFollowFlag();
  };

  return (
    <div className="h-full">
      {editFlag ? (
        <ArticleEdit article={data.article} setEditFlag={setEditFlag} />
      ) : (
        <React.Fragment>
          <ArticleDetail
            article={data.article}
            postedUser={data.postedUser}
            likeCount={likeCount}
            articleLikeFlag={articleLikeFlag}
            changeArticleLike={changeArticleLike}
            usrFollowFlag={usrFollowFlag}
            changeUsrFollow={usrFollowing}
            setEditFlag={setEditFlag}
          />
          <Comments />
        </React.Fragment>
      )}
    </div>
  );
};

export default Article;
