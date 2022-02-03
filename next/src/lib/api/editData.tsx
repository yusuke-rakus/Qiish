import axios from "axios";
import { SelectStateType } from "../../const/Types";
import getCookie from "../cookie/handleCookie";
const guestIdByCookie = getCookie();
const guestIdNum = Number(guestIdByCookie);

const baseUrl = "http://localhost:9090";

export const editUserInfo = async (
  userName: string,
  email: string,
  description: string,
  engineerType: SelectStateType,
  tags: SelectStateType
) => {
  const res = await axios.post(`${baseUrl}/user/edit`, {
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
  const res = await axios.post(`${baseUrl}/article/edit"`, {
    guestId: guestIdNum,
    articleId: articleId,
    title: title,
    content: content,
    tags: tags,
  });
  return res;
};
