import axios from "axios";
import { SelectStateType } from "../../hooks/useInputState";
import getCookie from "../../hooks/cookie/handleCookie";
// ログインユーザーのIdを取得
const guestIdByCookie = getCookie();
const guestIdNum = Number(guestIdByCookie);

// 会員登録機能
export const registerUser = async (
  userName: string,
  engineerType: string,
  mailAddress: string,
  password: string,
  confirmPassword: string
) => {
  const res = await axios.post("http://localhost:9090/user/register", {
    userName: userName,
    engineerType: engineerType,
    email: mailAddress,
    password: password,
  });

  return res.data;
};

// パスワード再設定機能
export const resetPassword = async (
  mailAddress: string,
  newPassword: string
) => {
  const res = await axios.post("http://localhost:9090/reset", {
    email: mailAddress,
    password: newPassword,
  });

  return res.data.status;
};

// 記事追加機能
export const addArticle = async (
  userId: number,
  title: string,
  content: string,
  tags: SelectStateType
) => {
  const res = await axios.post("http://localhost:9090/article/add", {
    userInfoId: userId,
    title: title,
    content: content,
    tags: tags,
  });
  return res;
};

// コメント投稿機能
export const addComment = async (articleId: number, comment: string) => {
  const res = await axios.post("http://localhost:9090/article/comment", {
    articleId: articleId,
    userInfoId: guestIdNum,
    comment: comment,
  });
  return res.data;
};

// いいね機能(likeフラグがtrueになったら+1カウントを返し、falseなら-1カウントを返す)
// cookieにいいねしたidを保存
export const changeLikeStatus = async (
  articleId: number,
  likeStatus: boolean
) => {
  if (!likeStatus) {
    // (userInfoIdを取得する)
    await axios.post("http://localhost:9090/article/like", {
      userInfoId: guestIdByCookie,
      articleId: articleId,
    });
  } else {
    await axios.post("http://localhost:9090/article/removeLike", {
      userInfoId: guestIdByCookie,
      articleId: articleId,
    });
  }
};

// ユーザーフォロー機能
export const changeFollowStatus = async (
  followStatus: boolean,
  postedUserId?: number
) => {
  // フォローするならif以下の処理(フォローステータス:0)
  if (!followStatus) {
    const res = await axios.post("http://localhost:9090/user/follow", {
      userInfoId: guestIdByCookie,
      followUserInfoId: postedUserId,
    });
    return res;
  } else {
    const res = await axios.post("http://localhost:9090/user/remove", {
      userInfoId: guestIdByCookie,
      followUserInfoId: postedUserId,
    });
    return res;
  }
};
