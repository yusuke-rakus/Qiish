import React from "react";
import { HeartOutlined, MessageTwoTone, MenuOutlined } from "@ant-design/icons";
import { ProfileSmall } from ".";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { Dropdown, Menu } from "antd";
import { Article } from "../../const/Types";

const ArticleDetail: React.FC<Article> = ({
  article,
  articleTags,
  postedUser,
  likesCount,
  likeStatus,
  changeArticleLike,
  commentCountOnArticle,
  followerCount,
  followStatus,
  checkLoginUserFlag,
  changeUsrFollow,
  setEditFlag,
  onDeleteArticle,
  setLikeUserModalStatus,
}) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <button onClick={setEditFlag}>編集</button>
      </Menu.Item>
      <Menu.Item key="1">
        <button onClick={onDeleteArticle}>削除</button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="flex justify-center">
      <div className="text-center m-10 bg-white w-1/2 h-auto rounded-lg border shadow-md">
        <div className="pb-10 pt-20 text-2xl font-bold">{article.title}</div>
        <div className="pb-2">
          <div className="flex justify-center items-center">
            <button onClick={changeArticleLike}>
              {likeStatus ? (
                <span className="text-orange-500">
                  <HeartOutlined className="text-2xl" />
                </span>
              ) : (
                <HeartOutlined className="text-2xl" />
              )}
            </button>
            <span className="ml-1 text-xl text-black hover:text-gray-400">
              <button onClick={setLikeUserModalStatus}>{likesCount}</button>
            </span>
            &nbsp;
            <MessageTwoTone twoToneColor="#f97316" className="text-2xl" />
            <span className="ml-1 text-xl">{commentCountOnArticle}</span>
            {checkLoginUserFlag && (
              <Dropdown overlay={menu}>
                <MenuOutlined className="ml-1 text-2xl text-black hover:text-orange-500" />
              </Dropdown>
            )}
          </div>
        </div>
        <div className="px-10">
          <div className="flex justify-center flex-wrap">
            {articleTags.map((tag: any) => {
              return (
                <span
                  className="m-1 py-1 px-1 bg-orange-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
                  key={tag.id}
                >
                  {tag.skill}
                </span>
              );
            })}
          </div>
        </div>
        <div className="pt-1 text-slate-500 text-center">
          <span>
            投稿日: {moment(article.postedDate).format("YYYY年M月D日")}
          </span>
        </div>
        <div className="px-14 pt-6 text-lg">
          <div className="markdown">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="w-1/5 mt-8">
        <ProfileSmall
          user={postedUser}
          checkLoginUserFlag={checkLoginUserFlag}
          followerCount={followerCount}
          followStatus={followStatus}
          changeUsrFollow={changeUsrFollow}
        />
      </div>
    </div>
  );
};

export default ArticleDetail;
