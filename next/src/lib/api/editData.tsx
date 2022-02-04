import axios from "axios";
import { SelectStateType } from "../../const/Types";
import { BASEURL } from "../../const/Urls";
import getCookie from "../cookie/handleCookie";
const guestIdByCookie = getCookie();
const guestIdNum = Number(guestIdByCookie);

export const editUserInfo = async (
  userName: string,
  email: string,
  description: string,
  engineerType: SelectStateType,
  tags: SelectStateType
) => {
  const res = await axios.post(`${BASEURL}/user/edit`, {
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
  const res = await axios.post(`${BASEURL}/article/edit"`, {
    guestId: guestIdNum,
    articleId: articleId,
    title: title,
    content: content,
    tags: tags,
  });
  return res;
};
