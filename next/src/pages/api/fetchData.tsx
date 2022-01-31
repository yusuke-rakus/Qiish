import axios from "axios";
import getCookie from "../../hooks/cookie/handleCookie";
// ログインユーザーのIdを取得
const guestIdByCookie = getCookie();

const baseUrl = "http://localhost:9090";

// プロフィール情報取得のAPI
export const fetchProfile = async (userInfoId?: string) => {
  const res = await axios.post(`${baseUrl}/userPage`, {
    userInfoId: userInfoId,
    guestId: guestIdByCookie,
  });
  return res.data;
};

// 記事一覧情報の取得のAPI
export const fetchArticleList = async () => {
  const res = await axios.post(`${baseUrl}`, {
    guestId: guestIdByCookie,
  });
  return res.data;
};

// 特定の記事情報取得のAPI
export const fetchArticle = async (
  articleId: string | string[] | undefined
) => {
  const res = await axios.post(`${baseUrl}/article`, {
    articleId: articleId,
    guestId: guestIdByCookie,
  });

  return res.data;
};

export const fetchCommentOnArticle = async (articleId: number) => {
  const res = await axios.post(`${baseUrl}/article/getComment`, {
    articleId: articleId,
    guestId: guestIdByCookie,
  });

  return res.data;
};

// 検索された記事を取得するAPI
// キーワード二つ目以降は+区切りで付け足していく仕様とする。半角スペースを+に変換する。
export const fetchSearchedArticle = async (keyword: string) => {
  const res = await axios.get(
    `http://localhost:3001/search?keyword=${keyword}`
  );
  console.log(keyword);
  console.log(res);
};

export const reissuePassword = async (mailAddress: string) => {
  // const res = await axios.post(`http://localhost:3001/resetRequest`, {
  //   email: mailAddress,
  // });
  // console.log(res);
  let errorMessage = "";
  // if (res.data.status == "success") {
  //   Router.push("/resetPassword");
  // } else if (res.data.status == "error") {
  errorMessage = "このメールアドレスは有効ではありません";
  // }
  console.log(errorMessage);
  return errorMessage;
};

export const fetchQiitaList = async () => {
  const res = await axios.get("https://qiita.com/api/v2/items?per_page=10", {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
    },
  });

  return res.data;
};

// 特定のQiitaの記事取得
// 定数.dataとしないとエラーが発生する
export const fetchQiita = async (qiitaId: string | string[] | undefined) => {
  const res = await axios.get(`https://qiita.com/api/v2/items/${qiitaId}`, {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
    },
  });

  return res.data;
};

// フォローリスト取得の処理
export const fetchFollowList = async (guestId: string, userInfoId?: string) => {
  // もし記事投稿者ID(userInfoId)があるなら記事投稿者のフォローリストを取得
  // もし記事投稿者IDがないならログインユーザーのフォローリストを取得

  if (userInfoId) {
    const res = await axios.post(`${baseUrl}/user/followList`, {
      userInfoId: userInfoId,
      guestId: guestId,
    });
    return res.data;
  } else {
    // マイプロフィールから直接フォローリストに遷移する場合
    const res = await axios.post(`${baseUrl}/user/followList`, {
      userInfoId: guestId,
      guestId: guestId,
    });
    return res.data;
  }
};
// フォロワーリスト取得の処理
export const fetchFollowerList = async (
  guestId: string,
  userInfoId?: string
) => {
  // もし記事投稿者ID(userInfoId)があるなら記事投稿者のフォロワーリストを取得
  // もし記事投稿者IDがないならログインユーザーのフォロワーリストを取得
  if (userInfoId) {
    const res = await axios.post(`${baseUrl}/user/followerList`, {
      userInfoId: userInfoId,
      guestId: guestId,
    });
    return res.data;
  } else {
    // マイプロフィールから直接フォロワーリストに遷移する場合
    const res = await axios.post(`${baseUrl}/user/followerList`, {
      userInfoId: guestId,
      guestId: guestId,
    });
    return res.data;
  }
};
