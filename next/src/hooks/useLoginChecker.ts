import getCookie from "../lib/cookie/handleCookie";

/**
 * paramのユーザーIDがログインしているユーザーかどうかを判定するメソッド
 *
 * @param checkUserId - チェックするユーザーID
 * @param mockCookieId - フックスのテストで使用
 * @returns ログインしているかどうかの真偽値(true: ログインユーザー false: 本人以外のユーザー)
 */
export const useLoginChecker = (checkUserId: number, mockCookieId?: number) => {
  const guestId = Number(getCookie());
  let checkFlag = false;

  if (checkUserId === guestId || checkUserId === mockCookieId) {
    checkFlag = true;
  } else {
    checkFlag = false;
  }
  return checkFlag;
};
