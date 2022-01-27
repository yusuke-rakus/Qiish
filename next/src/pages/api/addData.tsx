import axios from "axios";
import { SelectStateType } from "../../hooks/useInputState";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// 記事追加機能(userIdを取得する)
export const addArticle = async (
  title: string,
  content: string,
  tags: SelectStateType
) => {
  const res = await axios.post("http://localhost:9090/article/add", {
    userInfoId: 1,
    title: title,
    content: content,
    tags: tags,
  });
  return res;
};

// いいね機能(likeフラグがtrueになったら+1カウントを返し、falseなら-1カウントを返す)
// cookieにいいねしたidを保存
export const changeLikeStatus = async (
  articleId: number,
  likeCount: number,
  articleLikeFlag: boolean
) => {
  if (!articleLikeFlag) {
    // (userInfoIdを取得する)
    await axios.post("http://localhost:9090/article/like", {
      userInfoId: 1,
      articleId: 1,
    });
    cookies.set(`idLikeFlag/${articleId}`, `${likeCount + 1}`);
    return likeCount + 1;
  } else {
    await axios.post("http://localhost:9090/article/removeLike", {
      userInfoId: 1,
      articleId: 1,
    });
    cookies.remove(`idLikeFlag/${articleId}`);
    return likeCount - 1;
  }
};

// ユーザーフォロー機能
export const changeFollowStatus = async (usrFollowFlag: boolean) => {
  if (!usrFollowFlag) {
    // (userInfoIdを取得する)
    const res = await axios.post("http://localhost:9090/user/follow", {
      userInfoId: 1,
      followUserInfoId: 2,
    });
    return res;
  } else {
    const res = await axios.post("http://localhost:9090/user/remove", {
      userInfoId: 1,
      followUserInfoId: 2,
    });
    return res;
  }
};
