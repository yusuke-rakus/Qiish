import Link from "next/link";
import React from "react";
import moment from "moment";
import { SkillTagsOnQiita } from "../molecules";

type Props = {
  qiitaData: {
    body: string;
    coediting: boolean;
    comments_count: number;
    created_at: string;
    group: number;
    id: string;
    likes_count: number;
    page_views_count: number;
    private: boolean;
    reactions_count: number;
    rendered_body: string;
    tags: { name: string; versions: any }[];
    team_membership: number;
    title: string;
    updated_at: string;
    url: string;
    user: {
      description: string;
      facebook_id: string;
      followees_count: number;
      followers_count: number;
      github_login_name: string;
      id: string;
      items_count: number;
      linkedin_id: string;
      location: string;
      name: string;
      organization: string;
      permanent_id: number;
      profile_image_url: string;
      team_only: boolean;
      twitter_screen_name: string;
      website_url: string;
    };
  };
};

const QiitaListComp: React.FC<Props> = ({ qiitaData }) => {
  const formatDate = moment(qiitaData.created_at).format("YYYY年MM月DD日");
  return (
    <div className="p-5 m-2 h-auto flex flex-col gap-1 bg-white rounded-lg shadow-xl">
      <div className="text-xs text-gray">
        {qiitaData.user.github_login_name
          ? `@${qiitaData.user.github_login_name}`
          : qiitaData.user.name}
        が{formatDate}
        に投稿しました
      </div>

      <Link href={`/qiitas/${qiitaData.id}`}>
        <a className="text-black hover:text-gray-400 text-base font-bold no-underline hover:underline">
          {qiitaData.title}
        </a>
      </Link>

      <SkillTagsOnQiita tags={qiitaData.tags} />
    </div>
  );
};
export default QiitaListComp;
