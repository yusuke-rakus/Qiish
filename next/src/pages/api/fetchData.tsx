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
