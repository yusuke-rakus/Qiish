import axios from "axios";
import { SelectStateType } from "../../hooks/useInputState";
import getCookie from "../../hooks/cookie/handleCookie";
// ログインユーザーのIdを取得
const guestId = getCookie();
const guestIdNum = Number(guestId);

export const editUserInfo = async (
  userName: string,
  email: string,
  description: string,
  engineerType: SelectStateType,
  tags: SelectStateType
) => {
  const res = await axios.post("http://localhost:9090/user/edit", {
    userInfoId: guestIdNum,
    userName: userName,
    image: null,
    email: email,
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
    articleId: articleId,
    title: title,
    content: content,
    tags: tags,
  });
  return res;
};
