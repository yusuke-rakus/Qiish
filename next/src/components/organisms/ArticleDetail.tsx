import React from "react";
import { HeartOutlined, MessageTwoTone, MenuOutlined } from "@ant-design/icons";
import { ProfileSmall } from ".";
import moment from "moment";
import { Dropdown, Menu } from "antd";
import { ArticleType } from "../../const/Types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MediaQuery from "react-responsive";
import { CommentList } from "../../templates";

const ArticleDetail: React.FC<ArticleType> = ({
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
    <div className="flex">
      <div className="flex-col m-4 w-4/12">
        <MediaQuery query="(min-width: 768px)">
          <div className="">
            <ProfileSmall
              user={postedUser}
              checkLoginUserFlag={checkLoginUserFlag}
              followerCount={followerCount}
              followStatus={followStatus}
              changeUsrFollow={changeUsrFollow}
            />
          </div>
        </MediaQuery>
        <CommentList articleId={article.id} />
      </div>

      <div className="m-4 w-8/12 ">
        <div className="bg-white h-auto border shadow">
          <div className="text-center pb-5 pt-20 text-3xl text-black font-bold">
            {article.title}
          </div>
          <div className="pb-4 flex justify-center flex-wrap">
            {articleTags.map((tag: any) => {
              return (
                <span
                  className="m-1 py-2 px-4 bg-sky-500 text-white text-center text-xs shadow rounded"
                  key={tag.id}
                >
                  {tag.skill}
                </span>
              );
            })}
          </div>

          <div className="pb-2">
            <div className="flex justify-center items-center gap-5">
              <div className="pt-1 text-slate-500 text-center">
                <span>
                  {moment(article.postedDate).format("YYYY年M月D日")}に公開
                </span>
                &nbsp;
                {article.updateDate && (
                  <span>
                    {moment(article.updateDate).format("YYYY年M月D日")}に更新
                  </span>
                )}
              </div>
              <div className="pt-1 text-slate-500 text-center">
                {article.visitedCount} views
              </div>
              <button onClick={changeArticleLike}>
                {likeStatus ? (
                  <span className="text-sky-500">
                    <HeartOutlined className="text-2xl text-slate-500" />
                  </span>
                ) : (
                  <HeartOutlined className="text-2xl" />
                )}
              </button>
              <span className="ml-1 text-xl text-slate-500 hover:text-gray-400">
                <button onClick={setLikeUserModalStatus}>{likesCount}</button>
              </span>
              &nbsp;
              <MessageTwoTone className="text-2xl text-slate-500" />
              <span className="ml-1 text-xl">{commentCountOnArticle}</span>
              {/* warning出る */}
              {checkLoginUserFlag && (
                <Dropdown overlay={menu}>
                  <MenuOutlined className="ml-1 text-2xl text-black hover:text-sky-500" />
                </Dropdown>
              )}
            </div>
          </div>
          <div className="px-8 pt-6 text-lg">
            <div className="markdown">
              <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
