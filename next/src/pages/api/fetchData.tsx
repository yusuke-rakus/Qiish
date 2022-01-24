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

// 記事検索、キーワードが含まれた記事
// キーワード二つ目以降は+区切りで付け足していく仕様とする。半角スペースを+に変換する。
export const fetchSearchedArticle = async (keyword: string) => {
  const res = await axios.get(`http://localhost:3001/search?keyword=${keyword}`);
  console.log(keyword);
  console.log(res);
};
