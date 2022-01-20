import axios from "axios";
import { GetStaticProps } from "next";
import React from "react";
import { SWRConfig } from "swr";
import { Profile } from "../templates";

type Props = {
  [key: string]: any;
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
  const res = await axios.get("http://localhost:3001");

  return {
    props: {
      fallback: {
        "/profile": res.data,
      },
    },
  };
};
