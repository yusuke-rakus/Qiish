import axios from "axios";
import { SelectStateType } from "../../hooks/useInputState";

// 記事追加機能(userIdを取得する)
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

// ユーザーフォロー機能(userIdを取得する)
export const changeFollowStatus = async (usrFollowFlag: boolean) => {
  if (!usrFollowFlag) {
    const res = await axios.post("http://localhost:9090/user/follow", {
      userInfoId: 1,
      followUserInfoId: 2,
    });
    return res;
  } else {
    const res = await axios.post("http://localhost:9090/user/remove", {
      userInfoId: 1,
      followUserInfoId: 2,
    });
    return res;
  }
};
