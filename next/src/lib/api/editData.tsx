import axios from "axios";
import { SelectStateType } from "../../const/Types";
import { BASEURL } from "../../const/Urls";
import getCookie from "../cookie/handleCookie";
const guestIdByCookie = getCookie();
const guestIdNum = Number(guestIdByCookie);

/**
 * プロフィール(ログインユーザー)情報の編集.
 *
 * @param userName - ユーザーネーム
 * @param email - メールアドレス
 * @param description - 自己紹介
 * @param engineerType - エンジニアタイプ
 * @param tags - タグIDの配列
 * @returns 編集処理のステータス(success・error)
 */
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

/**
 * 記事IDに当てはまる記事情報の編集.
 *
 * @param articleId - 記事ID
 * @param title - タイトル
 * @param content - 内容
 * @param tags - タグIDの配列
 * @returns 編集処理のステータス(success・error)
 */
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
