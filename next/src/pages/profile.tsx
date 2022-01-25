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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // プロフィール情報取得のAPI
  // undefindの可能性があるためparamsをoptionalにした
  const profile = await fetchProfile(params?.id);

  return {
    props: {
      fallback: {
        "/profile": profile,
      },
    },
  };
};
