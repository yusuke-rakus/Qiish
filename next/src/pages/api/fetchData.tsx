import axios from "axios";

// プロフィール情報取得のAPI
export const fetchProfile = async () => {
  const res = await axios.get("http://localhost:3001");

  return res.data;
};

// 記事情報取得のAPI
export const fetchArticle = async () => {
  const res = await axios.get("http://localhost:3001");

  return res.data;
};

// Qiitaの記事一覧取得
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

// export const fetchQiitaDetail = async (qiitaId: string) => {
//   const res = await axios.get(`https://qiita.com/api/v2/items/${qiitaId}`, {
//     headers: {
//       Authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
//     },
//   });

//   return res.data;
// };
