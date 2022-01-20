import React from "react";
import { GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { Profile } from "../templates";
import { fetchProfile } from "./api/fetchData";

type Props = {
  [key: string]: object;
};

const ProfilePage: React.FC<Props> = ({ fallback }) => {
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Profile />
      </SWRConfig>
    </div>
  );
};

export default ProfilePage;

export const getStaticProps: GetStaticProps = async () => {
  // プロフィール情報取得のAPI
  const profile = await fetchProfile();

  return {
    props: {
      fallback: {
        "/profile": profile,
      },
    },
  };
};
