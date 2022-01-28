import axios from "axios";
import { SelectStateType } from "../../hooks/useInputState";

export const editUserInfo = async (
  userName: string,
  email: string,
  description: string,
  engineerType: SelectStateType,
  tags: SelectStateType
) => {
  const res = await axios.post("http://localhost:9090/user/edit", {
    userInfoId: 1,
    userName: userName,
    image: null,
    email: email,
    password: "",
    engineerType: engineerType,
    description: description,
    tags: tags,
  });
  return res;
};

// 記事編集のAPI
export const editArticle = async (
  articleId: number,
  title: string,
  content: string,
  tags: SelectStateType
) => {
  const res = await axios.post("http://localhost:9090/article/edit", {
    // タグのidがnullで取得できていない
    articleId: articleId,
    title: title,
    content: content,
    tags: [1, 7],
  });
  return res;
};