import { parseCookies, setCookie, destroyCookie } from "nookies";
import { NextPageContext } from "next";

// cookieからデータを取得
export const getCookie = (ctx?: NextPageContext) => {
  const cookie = parseCookies(ctx);

  //クッキーに設定したUserIdを取得して出力（確認できたら削除）
  console.log(cookie.userId);
};

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
