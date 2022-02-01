import React from "react";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { Profile } from "../templates";
import { fetchProfile } from "./api/fetchData";
import getCookie, { getArticleUserId } from "../hooks/cookie/handleCookie";

type Props = {
  [key: string]: object;
};

const ProfilePage: React.FC<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Profile />
    </SWRConfig>
  );
};

export default ProfilePage;

// ユーザーIDよりプロフィール情報を取得
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const guestId = getCookie(ctx);
  let userInfoId = getArticleUserId(ctx);
  // Cookieに投稿者ID(articleUserId)がなければログインユーザーIdを利用
  if (!userInfoId) {
    userInfoId = getCookie(ctx);
  }

  const profile = await fetchProfile(guestId, userInfoId);
  return {
    props: {
      fallback: {
        "/profile": profile,
      },
    },
  };
};
