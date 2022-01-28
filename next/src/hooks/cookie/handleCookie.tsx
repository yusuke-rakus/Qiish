import { parseCookies, setCookie, destroyCookie } from "nookies";

// cookieからデータを取得
const getCookie = (ctx?: any) => {
  const cookie = parseCookies(ctx);
  return cookie.userId;
};
export default getCookie;

// ユーザーIDをCookiesに設定する
export const settingUserId = (userId: number) => {
  const cookies = parseCookies();

  // Set
  setCookie(null, "userId", String(userId), {
    // 60秒 * 60 秒 * 24 で一日間保存
    maxAge: 24 * 60 * 60,
  });

  // クッキーに設定したUserIdを削除する処理
  // destroyCookie(null, "userId");
};
