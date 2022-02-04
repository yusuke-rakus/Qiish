import axios from "axios";
import { BASEURL } from "../../const/Urls";
import getCookie from "../cookie/handleCookie";
// ログインユーザーのIdを取得
const guestIdByCookie = getCookie();

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
export const fetchSearchedArticle = async (keyword: string) => {
  const res = await axios.get(
    `http://localhost:9090/search?keyword=${keyword}`
  );
  console.log(keyword);
  console.log(res);
};

// タグで記事絞り込むAPI
export const fetchSearchedTag = async (tagId: string, guestId: string) => {
  const res = await axios.post(`${BASEURL}/searchTag`, {
    tagId: tagId,
    guestId: guestId,
  });
  return res.data.articleList;
};

/**
 * プロフィール情報の取得.
 *
 * @param guestId - ログインユーザーID(str)
 * @param userInfoId - ユーザー情報ID(str)
 * @returns ユーザープロフィール情報
 */
export const fetchProfile = async (guestId: string, userInfoId?: string) => {
  const res = await axios.post(`${BASEURL}/userPage`, {
    userInfoId: userInfoId,
    guestId: guestId,
  });
  return res.data;
};

// 記事一覧情報の取得のAPI
export const fetchArticleList = async () => {
  const res = await axios.post(`${BASEURL}`, {
    guestId: guestIdByCookie,
  });
  return res.data;
};

/**
 * タグ情報の取得.
 *
 * @returns タグ情報
 */
export const fetchGetTags = async () => {
  const res = await axios.get(`${BASEURL}/getTag`);
  return res.data;
};

/**
 * 特定の記事詳細情報の取得.
 *
 * @param articleId - 記事ID(str)
 * @param guestId - ログインユーザーID(str)
 * @returns 記事IDに当てはまる記事詳細情報
 */
export const fetchArticle = async (
  articleId: string | string[] | undefined,
  guestId: string
) => {
  const res = await axios.post(`${BASEURL}/article`, {
    articleId: articleId,
    guestId: guestId,
  });
  return res.data;
};

/**
 * 特定記事のコメント一覧情報を取得.
 *
 * @param articleId - 記事ID(num)
 * @returns 記事IDに当てはまるコメント一覧情報
 */
export const fetchcommentList = async (articleId: number) => {
  const res = await axios.post(`${BASEURL}/article/getComment`, {
    articleId: articleId,
    guestId: guestIdByCookie,
  });
  return res.data;
};

// パスワードを再発行するAPI
export const reissuePassword = async (mailAddress: string) => {
  const res = await axios.post(`${BASEURL}/resetRequest`, {
    email: mailAddress,
  });
  return res.data;
};

/**
 * 最新のQiita記事一覧10件を取得.
 *
 * @remarks リクエスト回数:通常(60回/hour), アクセストークンあり(1000回/hour)
 * @returns 最新のQiita記事一覧10件
 */
export const fetchQiitaList = async () => {
  const res = await axios.get("https://qiita.com/api/v2/items?per_page=10", {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
    },
  });
  return res.data;
};

//
/**
 * 特定のQiita記事取得.
 *
 * @remarks リクエスト回数:通常(60回/hour), アクセストークンあり(1000回/hour)
 * @param qiitaId - Qiita記事のID
 * @returns 特定のQiita記事
 */
export const fetchQiita = async (qiitaId: string | string[] | undefined) => {
  const res = await axios.get(`https://qiita.com/api/v2/items/${qiitaId}`, {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
    },
  });
  return res.data;
};

/**
 * フォローリスト取得.
 *
 * @remarks
 * - 記事詳細から取得の場合、記事投稿者のフォローリストを取得
 * - 記事詳細からプロフィールに遷移して取得の場合、記事投稿者のフォローリストを取得
 * - プロフィールから取得の場合、ログインユーザーのフォローリストを取得
 * @param guestId - ログインユーザーID(str)
 * @param userInfoId - 記事投稿者ID(str,オプショナル)
 * @returns 記事投稿者又はログインユーザーのフォローリスト
 */
export const fetchFollowList = async (guestId: string, userInfoId?: string) => {
  if (userInfoId) {
    const res = await axios.post(`${BASEURL}/user/followList`, {
      userInfoId: userInfoId,
      guestId: guestId,
    });
    return res.data;
  } else {
    const res = await axios.post(`${BASEURL}/user/followList`, {
      userInfoId: guestId,
      guestId: guestId,
    });
    return res.data;
  }
};
/**
 * フォロワーリスト取得.
 *
 * @remarks
 * - 記事詳細から取得の場合、記事投稿者のフォロワーリストを取得
 * - 記事詳細からプロフィールに遷移して取得の場合、記事投稿者のフォロワーリストを取得
 * - プロフィールから取得の場合、ログインユーザーのフォロワーリストを取得
 * @param guestId - ログインユーザーID(str)
 * @param userInfoId - 記事投稿者ID(str,オプショナル)
 * @returns 記事投稿者又はログインユーザーのフォロワーリスト
 */
export const fetchFollowerList = async (
  guestId: string,
  userInfoId?: string
) => {
  // もし記事投稿者ID(userInfoId)があるなら記事投稿者のフォロワーリストを取得
  // もし記事投稿者IDがないならログインユーザーのフォロワーリストを取得
  if (userInfoId) {
    const res = await axios.post(`${BASEURL}/user/followerList`, {
      userInfoId: userInfoId,
      guestId: guestId,
    });
    return res.data;
  } else {
    // マイプロフィールから直接フォロワーリストに遷移する場合
    const res = await axios.post(`${BASEURL}/user/followerList`, {
      userInfoId: guestId,
      guestId: guestId,
    });
    return res.data;
  }
};
