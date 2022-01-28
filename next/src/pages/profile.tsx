import React from "react";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { Profile } from "../templates";
import { fetchProfile } from "./api/fetchData";
import getCookie from "../hooks/cookie/handleCookie";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userId = getCookie(ctx);
  // console.log("userId: " + userId);
  // console.log(ctx);

  const profile = await fetchProfile(userId);
  return {
    props: {
      fallback: {
        "/profile": profile,
      },
    },
  };
};
