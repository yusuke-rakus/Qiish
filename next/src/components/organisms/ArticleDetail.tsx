import React from "react";
import { HeartOutlined, MessageTwoTone, MenuOutlined } from "@ant-design/icons";
import { ProfileSmall } from ".";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { Dropdown, Menu } from "antd";

type Props = {
  article: {
    id: number;
    userInfoId: 1;
    title: string;
    content: string;
    postedDate: string;
    articleTags: { id: number; skill: string; image?: string }[];
    lieksUserList: {
      id: 2;
      userName: string;
      email: string;
      engineerType: string;
      description: string;
      image?: string;
      follow: number;
      followCount: number;
      follower: number;
      followerCount: number;
      tags: string;
      articles: number;
      articleCount: number;
      likes: number;
      comments: number;
    }[];
    likesCount: number;
  };
  postedUser: {
    id: number;
    userName: string;
    email: string;
    engineerType: string;
    description: string;
    image: string;
    follow: number;
    followCount: number;
    follower: number;
    followerCount: number;
    tags: { id: number; skill: string; image?: string }[];
    articles: number;
    articleCount: number;
    likes: number;
    comments: number;
  };
  likeCount: number;
  articleLikeFlag: boolean;
  changeArticleLike: () => void;
  usrFollowFlag: boolean;
  changeUsrFollow: () => void;
  setEditFlag: () => void;
};

const ArticleDetail: React.FC<Props> = ({
  article,
  postedUser,
  likeCount,
  articleLikeFlag,
  changeArticleLike,
  usrFollowFlag,
  changeUsrFollow,
  setEditFlag,
}) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <button onClick={setEditFlag}>編集</button>
      </Menu.Item>
      <Menu.Item key="1">
        <a href={"/#"}>削除</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="flex justify-center">
      <div className="text-center m-10 bg-white w-1/2 h-auto rounded-lg border shadow-md">
        <div className="pb-10 pt-20 text-2xl font-bold">
          {/* title(Article) */}
          {article.title}
        </div>
        <div className="pb-2">
          {/* likeCount(Article) */}
          <div className="flex justify-center items-center">
            <button onClick={changeArticleLike}>
              {articleLikeFlag ? (
                <span className="text-orange-500">
                  <HeartOutlined className="text-2xl" />
                </span>
              ) : (
                <HeartOutlined className="text-2xl" />
              )}
            </button>
            <a href="#" className="ml-1 text-xl text-black hover:text-gray-400">
              {likeCount ? likeCount : 0}
            </a>
            &nbsp;
            {/* commentCount(Article) */}
            <MessageTwoTone twoToneColor="#f97316" className="text-2xl" />
            <span className="ml-1 text-xl">1</span>
            <Dropdown overlay={menu}>
              <MenuOutlined className="ml-1 text-2xl text-black hover:text-orange-500" />
            </Dropdown>
          </div>
        </div>
        <div className="px-10">
          {/* tags(Article) */}
          <div className="flex justify-center flex-wrap">
            {/* idがnullになっているため、keyはskill名で代用 */}
            {article.articleTags.map((tag) => {
              return (
                <span
                  className="m-1 py-1 px-1 bg-orange-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
                  key={tag.skill}
                >
                  {tag.skill}
                </span>
              );
            })}
          </div>
        </div>
        <div className="pt-1 text-slate-500 text-center">
          {/* postedDate(Article) */}
          <span>
            投稿日: {moment(article.postedDate).format("YYYY年M月D日")}
          </span>
        </div>
        <div className="px-14 pt-6 text-lg">
          {/* content(Article) */}
          <div className="markdown">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="w-1/5 mt-8">
        {/* profile(User) */}
        <ProfileSmall
          user={postedUser}
          usrFollowFlag={usrFollowFlag}
          changeUsrFollow={changeUsrFollow}
        />
      </div>
    </div>
  );
};

export default ArticleDetail;
