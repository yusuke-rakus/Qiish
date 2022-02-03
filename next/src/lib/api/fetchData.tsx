import axios from "axios";
import getCookie from "../cookie/handleCookie";
// ログインユーザーのIdを取得
const guestIdByCookie = getCookie();

const baseUrl = "http://localhost:9090";

// ユーザーログインのAPI
export const loginUser = async (mailAddress: string, password: string) => {
  const res = await axios.post("http://localhost:9090/user/login", {
    email: mailAddress,
    password: password,
  });
  return res.data;
};

// 検索された記事を取得するAPI
// キーワード二つ目以降は+区切りで付け足していく仕様とする。半角スペースを+に変換する。
export const fetchSearchedArticle = async (
  keyword: string,
  guestId: string
) => {
  console.log(keyword);
  console.log(guestId);
  const res = await axios.post(`${baseUrl}/search`, {
    keyword: keyword,
    guestId: guestId,
  });
  console.log(res);
  return res.data.articleList;
};

// タグで記事検索
export const fetchSearchedTag = async (tagId: string, guestId: string) => {
  const res = await axios.post(`${baseUrl}/searchTag`, {
    tagId: tagId,
    guestId: guestId,
  });
  return res.data.articleList;
};

// プロフィール情報取得のAPI
export const fetchProfile = async (guestId: string, userInfoId?: string) => {
  const res = await axios.post(`${baseUrl}/userPage`, {
    userInfoId: userInfoId,
    guestId: guestId,
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
// 記事一覧情報の取得のAPI
export const fetchGetTags = async () => {
  const res = await axios.get(`${baseUrl}/getTag`);
  return res.data;
};

// 特定の記事情報取得のAPI
export const fetchArticle = async (
  articleId: string | string[] | undefined,
  guestId: string
) => {
  const res = await axios.post(`${baseUrl}/article`, {
    articleId: articleId,
    guestId: guestId,
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

// パスワードを再発行するAPI
export const reissuePassword = async (mailAddress: string) => {
  const res = await axios.post(`${baseUrl}/resetRequest`, {
    email: mailAddress,
  });
  return res.data;
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
