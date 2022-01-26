import axios from "axios";
import { SelectStateType } from "../../hooks/useInputState";

// バック側でIntegerを求めてたがstringではないのか？
// 通信成功。タグの問題とユーザーIDを解決する。
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
