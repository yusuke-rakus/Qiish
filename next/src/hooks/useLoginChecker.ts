import getCookie from "../lib/cookie/handleCookie";

const guestId = Number(getCookie());

/**
 * paramのユーザーIDがログインしているユーザーかどうかを判定するメソッド
 *
 * @param checkUserId - チェックするユーザーID
 * @returns ログインしているかどうかの真偽値(true: ログインユーザー false: 本人以外のユーザー)
 */
export const useLoginChecker = (checkUserId: number) => {
  let checkFlag = false;

  if (checkUserId === guestId) {
    checkFlag = true;
  } else {
    checkFlag = false;
  }
  return checkFlag;
};
