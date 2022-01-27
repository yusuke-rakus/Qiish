import axios from "axios";

// プロフィール情報取得のAPI
export const fetchProfile = async (
  userInfoId: string | string[] | undefined
) => {
  const res = await axios.get(
    `http://localhost:9090/userPage?userInfoId=${userInfoId}`
  );
  return res.data;
};

// 特定の記事情報取得のAPI
export const fetchArticle = async (
  articleId: string | string[] | undefined
) => {
  const res = await axios.get(
    `http://localhost:9090/article?articleId=${articleId}`
  );

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
  const res = await axios.post(`http://localhost:9090/resetRequest`, {
    email: mailAddress,
  });
  console.log(mailAddress);
  console.log(res.data);
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
